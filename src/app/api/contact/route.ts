import { NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured, ContactInquiry } from '@/lib/supabase';
import { sendInquiryEmails } from '@/lib/email';
import { dispatchToN8nWebhook } from '@/lib/n8n';

// Email validation helper
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      full_name,
      work_email,
      whatsapp_number,
      company_name,
      contact_channel,
      services,
      problem_statement,
      project_description,
      expected_outcome,
      existing_tools,
      budget,
      timeline,
      budget_approved,
      decision_maker,
      meeting_date,
      meeting_time,
      meeting_mode,
      meeting_email,
    } = body;

    // Strict validation
    if (!full_name || typeof full_name !== 'string' || full_name.trim().length === 0) {
      return NextResponse.json(
        { error: 'Full name is required.' },
        { status: 400 }
      );
    }

    if (!work_email || typeof work_email !== 'string' || !isValidEmail(work_email.trim())) {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    if (!whatsapp_number || typeof whatsapp_number !== 'string' || whatsapp_number.trim().length < 5) {
      return NextResponse.json(
        { error: 'A valid phone or WhatsApp number is required.' },
        { status: 400 }
      );
    }

    const inquiryId = crypto.randomUUID();
    const cleanServices = Array.isArray(services) 
      ? services.filter((s): s is string => typeof s === 'string') 
      : [];

    const inquiryRecord: ContactInquiry = {
      id: inquiryId,
      created_at: new Date().toISOString(),
      full_name: full_name.trim().slice(0, 150),
      work_email: work_email.trim().toLowerCase().slice(0, 150),
      whatsapp_number: whatsapp_number.trim().slice(0, 50),
      company_name: company_name ? String(company_name).trim().slice(0, 150) : undefined,
      contact_channel: contact_channel ? String(contact_channel).trim().slice(0, 50) : 'WhatsApp',
      services: cleanServices,
      problem_statement: problem_statement ? String(problem_statement).trim().slice(0, 3000) : undefined,
      project_description: project_description ? String(project_description).trim().slice(0, 3000) : undefined,
      expected_outcome: expected_outcome ? String(expected_outcome).trim().slice(0, 2000) : undefined,
      existing_tools: existing_tools ? String(existing_tools).trim().slice(0, 1000) : undefined,
      budget: budget ? String(budget).trim().slice(0, 100) : undefined,
      timeline: timeline ? String(timeline).trim().slice(0, 100) : undefined,
      budget_approved: budget_approved ? String(budget_approved).trim().slice(0, 100) : undefined,
      decision_maker: decision_maker ? String(decision_maker).trim().slice(0, 100) : undefined,
      meeting_date: meeting_date ? String(meeting_date).trim().slice(0, 50) : undefined,
      meeting_time: meeting_time ? String(meeting_time).trim().slice(0, 50) : undefined,
      meeting_mode: meeting_mode ? String(meeting_mode).trim().slice(0, 50) : 'Google Meet',
      meeting_email: meeting_email ? String(meeting_email).trim().slice(0, 150) : undefined,
      status: 'new',
    };

    if (isSupabaseConfigured) {
      // Direct insertion without .select() ensures row-level security (RLS) compliance
      // preventing client data leaks while reliably saving lead records.
      const { error } = await supabase
        .from('contact_inquiries')
        .insert([inquiryRecord]);

      if (error) {
        console.error('Supabase contact inquiry insertion error:', error);
        return NextResponse.json(
          { error: 'Database storage error. Please try again or reach out on WhatsApp.' },
          { status: 500 }
        );
      }

      // Trigger n8n Automation Engine (AI Personalization, Client Email, Team Alert, WhatsApp Alert)
      const n8nDispatched = await dispatchToN8nWebhook(inquiryRecord);

      // If n8n was not dispatched or unconfigured, fallback to standard Resend email
      if (!n8nDispatched) {
        await sendInquiryEmails(inquiryRecord);
      }

      return NextResponse.json({
        success: true,
        referenceId: inquiryId,
        message: 'Inquiry safely recorded in Supabase and automation dispatched.',
      });
    }

    // Local / development fallback
    const localDispatched = await dispatchToN8nWebhook(inquiryRecord);
    if (!localDispatched) {
      await sendInquiryEmails(inquiryRecord);
    }

    return NextResponse.json({
      success: true,
      referenceId: inquiryId,
      message: 'Inquiry recorded in local/development mode.',
    });
  } catch (err: unknown) {
    console.error('API contact route exception:', err);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
