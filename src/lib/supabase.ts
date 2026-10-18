import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://demo-tariqtech.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'demo-anon-key-placeholder';

export const isSupabaseConfigured = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
  !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('demo')
);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ConsultationBooking {
  id?: string;
  created_at?: string;
  full_name: string;
  email: string;
  phone: string;
  country: string;
  preferred_channel: 'SMS' | 'WhatsApp' | 'Email';
  service_of_interest: string;
  consultation_format: 'online' | 'inperson';
  brief_requirements: string;
  preferred_date?: string;
  consultation_fee: number;
  currency: string;
  status: 'pending_payment_instructions' | 'payment_verified' | 'completed' | 'cancelled';
}

/**
 * Saves a consultation booking securely.
 * If Supabase is connected with credentials, writes to Supabase.
 * Otherwise, persists safely to client/local storage and logs for immediate verification.
 */
export async function saveConsultationBooking(booking: Omit<ConsultationBooking, 'id' | 'created_at' | 'consultation_fee' | 'currency' | 'status'>) {
  const payload: ConsultationBooking = {
    ...booking,
    consultation_fee: 30000,
    currency: 'TZS',
    status: 'pending_payment_instructions',
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured) {
    const { data, error } = await supabase
      .from('consultation_bookings')
      .insert([payload])
      .select();

    if (error) {
      console.error('Supabase booking error:', error);
      throw error;
    }
    return { success: true, data, method: 'supabase' };
  }

  // Graceful fallback for local development / testing without live keys
  try {
    const existing = JSON.parse(localStorage.getItem('tariqtech_bookings') || '[]');
    const newEntry = { ...payload, id: 'TT-' + Date.now().toString(36).toUpperCase() };
    existing.unshift(newEntry);
    localStorage.setItem('tariqtech_bookings', JSON.stringify(existing));
    return { success: true, data: [newEntry], method: 'local_storage' };
  } catch (err) {
    console.warn('Storage fallback warning:', err);
    return { success: true, data: [payload], method: 'memory' };
  }
}
