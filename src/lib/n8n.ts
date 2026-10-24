import { ContactInquiry } from './supabase';

/**
 * Dispatches verified lead submissions to the TariqTech n8n automation engine.
 * Secured with custom header authentication token.
 */
export async function dispatchToN8nWebhook(inquiry: ContactInquiry): Promise<boolean> {
  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  const webhookSecret = process.env.N8N_WEBHOOK_SECRET;

  if (!webhookUrl) {
    console.warn('[n8n] N8N_WEBHOOK_URL is not set. Skipping webhook dispatch.');
    return false;
  }

  const payload = {
    id: inquiry.id,
    name: inquiry.full_name,
    email: inquiry.work_email,
    phone: inquiry.whatsapp_number,
    company: inquiry.company_name || 'Independent Client',
    service: Array.isArray(inquiry.services) && inquiry.services.length > 0 
      ? inquiry.services.join(', ') 
      : 'Strategic Technology Advisory',
    message: inquiry.problem_statement || inquiry.project_description || 'General Inquiry',
    problem_statement: inquiry.problem_statement || '',
    project_description: inquiry.project_description || '',
    expected_outcome: inquiry.expected_outcome || '',
    existing_tools: inquiry.existing_tools || '',
    budget: inquiry.budget || 'Not specified',
    timeline: inquiry.timeline || 'Flexible',
    budget_approved: inquiry.budget_approved || 'Pending',
    decision_maker: inquiry.decision_maker || 'Evaluating',
    booking_date: inquiry.meeting_date || '',
    booking_time: inquiry.meeting_time || '',
    booking_mode: inquiry.meeting_mode || 'Google Meet',
    booking_email: inquiry.meeting_email || inquiry.work_email,
    contact_channel: inquiry.contact_channel || 'WhatsApp',
    submitted_at: inquiry.created_at || new Date().toISOString(),
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-webhook-secret': webhookSecret || '',
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10000), // 10s resilient timeout
    });

    if (!response.ok) {
      const errText = await response.text().catch(() => 'No response body');
      console.error(`[n8n] Webhook rejected with HTTP ${response.status}:`, errText);
      return false;
    }

    console.log('[n8n] Webhook event successfully acknowledged by n8n workflow.');
    return true;
  } catch (error) {
    console.error('[n8n] Webhook dispatch exception:', error);
    return false;
  }
}
