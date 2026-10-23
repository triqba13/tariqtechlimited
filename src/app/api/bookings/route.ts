import { NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured, ConsultationBooking } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      full_name,
      email,
      phone,
      country,
      preferred_channel,
      service_of_interest,
      consultation_format,
      brief_requirements,
      preferred_date,
    } = body;

    if (!full_name || !email || !phone || !brief_requirements) {
      return NextResponse.json(
        { error: 'Missing required consultation booking fields.' },
        { status: 400 }
      );
    }

    const bookingRecord: ConsultationBooking = {
      full_name,
      email,
      phone,
      country: country || 'Tanzania',
      preferred_channel: preferred_channel || 'SMS',
      service_of_interest: service_of_interest || 'website',
      consultation_format: consultation_format || 'online',
      brief_requirements,
      preferred_date: preferred_date || undefined,
      consultation_fee: 30000,
      currency: 'TZS',
      status: 'pending_payment_instructions',
      created_at: new Date().toISOString(),
    };

    if (isSupabaseConfigured) {
      const bookingId = crypto.randomUUID();
      const { error } = await supabase
        .from('consultation_bookings')
        .insert([{ ...bookingRecord, id: bookingId }]);

      if (error) {
        console.error('Database insertion error:', error);
        return NextResponse.json(
          { error: 'Failed to record booking in database.' },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        referenceId: bookingId,
        message: 'Booking stored in Supabase successfully.',
      });
    }

    // Local development mode
    const simulatedId = 'TT-' + Date.now().toString(36).toUpperCase();
    return NextResponse.json({
      success: true,
      referenceId: simulatedId,
      message: 'Booking request recorded successfully (Development mode).',
    });
  } catch (err: unknown) {
    console.error('API booking route error:', err);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
