import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://demo-tariqtech.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'demo-anon-key-placeholder';

export const isSupabaseConfigured = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
  !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('demo')
);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactInquiry {
  id?: string;
  created_at?: string;
  full_name: string;
  work_email: string;
  whatsapp_number: string;
  company_name?: string;
  contact_channel?: string;
  services?: string[];
  problem_statement?: string;
  project_description?: string;
  expected_outcome?: string;
  existing_tools?: string;
  budget?: string;
  timeline?: string;
  budget_approved?: string;
  decision_maker?: string;
  status?: string;
  meeting_date?: string;
  meeting_time?: string;
  meeting_mode?: string;
  meeting_email?: string;
}

/**
 * Saves a contact/project inquiry securely to Supabase.
 * Strictly avoids storing Personally Identifiable Information (PII) in browser localStorage.
 */
export async function saveContactInquiry(inquiry: Omit<ContactInquiry, 'id' | 'created_at' | 'status'>) {
  const generatedId = crypto.randomUUID();
  const payload: ContactInquiry = {
    ...inquiry,
    id: generatedId,
    created_at: new Date().toISOString(),
    status: 'new',
  };

  // Also clean up any legacy cached inquiries in localStorage from previous versions for user privacy
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem('tariqtech_inquiries');
    }
  } catch {
    // Ignore storage cleanup issues
  }

  // 1. Primary path: Call the secure server-side API route
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data = await res.json();
      return { success: true, referenceId: data.referenceId || generatedId, method: 'api' };
    }
  } catch (apiErr) {
    console.warn('API contact route unreachable, trying direct Supabase client fallback:', apiErr);
  }

  // 2. Direct Supabase insertion fallback
  if (isSupabaseConfigured) {
    const { error } = await supabase
      .from('contact_inquiries')
      .insert([payload]);

    if (error) {
      console.error('Supabase contact direct insert error:', error);
      throw error;
    }
    return { success: true, referenceId: generatedId, method: 'supabase' };
  }

  throw new Error('Service temporarily unavailable. Please try again or reach out on WhatsApp.');
}
