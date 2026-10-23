import { Resend } from 'resend';
import { ContactInquiry } from './supabase';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Tariq Hamza | TariqTech Limited <noreply@tariqtechlimited.com>';
const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || 'team@tariqtechlimited.com';

/**
 * Builds responsive, clean HTML email matching the exact reference design
 */
export function buildUserConfirmationHtml(inquiry: ContactInquiry): string {
  const recipientName = inquiry.full_name ? inquiry.full_name.trim() : 'Valued Client';

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inquiry Received - TariqTech</title>
  </head>
  <body style="margin: 0; padding: 48px 16px; background-color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #111827; -webkit-font-smoothing: antialiased;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 580px; margin: 0 auto; background-color: #ffffff;">
      
      <!-- Top Brand Icon Mark (Teal Circle & Dark Pill) -->
      <tr>
        <td style="padding-bottom: 34px;">
          <table border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td style="width: 22px; height: 22px; background-color: #2a8a85; border-radius: 50%; vertical-align: middle;"></td>
              <td style="width: 8px;"></td>
              <td style="width: 54px; height: 22px; background-color: #142d29; border-radius: 12px; vertical-align: middle;"></td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Main Heading -->
      <tr>
        <td style="padding-bottom: 24px;">
          <h1 style="font-size: 26px; font-weight: 800; color: #111827; margin: 0; letter-spacing: -0.5px;">
            We Received Your Inquiry
          </h1>
        </td>
      </tr>

      <!-- Salutation & Body Content -->
      <tr>
        <td style="font-size: 14.5px; line-height: 1.7; color: #374151; padding-bottom: 36px;">
          <p style="margin: 0 0 16px;">
            Hello ${recipientName},
          </p>
          <p style="margin: 0 0 16px;">
            Thank you for reaching out. We have received your inquiry and <strong>will get back to you shortly</strong>.
          </p>
          <p style="margin: 0 0 20px;">
            We are excited to explore how we can help you with your digital and technology needs.
          </p>
          ${inquiry.meeting_date ? `
          <div style="margin: 0 0 24px; padding: 14px 18px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; font-size: 13.5px; color: #166534;">
            📅 <strong>Discovery Meeting:</strong> We noted your preferred schedule on <strong>${inquiry.meeting_date}</strong> (${inquiry.meeting_time || 'Business hours'}) via <strong>${inquiry.meeting_mode || 'Google Meet'}</strong>. Our engineering team will confirm and send the meeting link to your email shortly.
          </div>
          ` : ''}
          <p style="margin: 0 0 4px; color: #4b5563;">
            Best regards,
          </p>
          <p style="margin: 0; font-weight: 700; color: #111827;">
            Tariq Hamza
          </p>
        </td>
      </tr>

      <!-- Bottom Card Container -->
      <tr>
        <td>
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 16px; padding: 34px 24px; text-align: center; border: 1px solid #f1f5f9;">
            
            <!-- Social Icons Row (Globe, X, Instagram, LinkedIn) -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <!-- Website / Globe -->
                    <td style="padding: 0 8px;">
                      <a href="https://www.tariqtechlimited.com" target="_blank" style="text-decoration: none; display: inline-block;">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#475569" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="2" y1="12" x2="22" y2="12"></line>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                      </a>
                    </td>

                    <!-- X (Twitter) -->
                    <td style="padding: 0 8px;">
                      <a href="https://x.com" target="_blank" style="text-decoration: none; display: inline-block;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#0f172a">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    </td>

                    <!-- Instagram -->
                    <td style="padding: 0 8px;">
                      <a href="https://www.instagram.com/tariqtech.limited/" target="_blank" style="text-decoration: none; display: inline-block;">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E1306C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                    </td>

                    <!-- LinkedIn -->
                    <td style="padding: 0 8px;">
                      <a href="https://linkedin.com" target="_blank" style="text-decoration: none; display: inline-block;">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Physical Location -->
            <tr>
              <td style="font-size: 13.5px; color: #475569; padding-bottom: 6px;">
                Dar es Salaam, Tanzania
              </td>
            </tr>

            <!-- Clickable Phone Number -->
            <tr>
              <td style="font-size: 13.5px; padding-bottom: 14px;">
                <a href="tel:+255744588248" style="color: #0284c7; text-decoration: underline; font-weight: 600;">
                  +255744588248
                </a>
              </td>
            </tr>

            <!-- Copyright Notice -->
            <tr>
              <td style="font-size: 12px; color: #64748b; padding-bottom: 10px;">
                Copyright © 2026 TariqTech Limited. All rights reserved.
              </td>
            </tr>

            <!-- Terms & Privacy Links -->
            <tr>
              <td style="font-size: 12px; color: #64748b; padding-bottom: 16px;">
                <a href="https://www.tariqtechlimited.com/terms" style="color: #64748b; text-decoration: underline;">Terms and Conditions</a>
                <span style="color: #cbd5e1; margin: 0 6px;">|</span>
                <a href="https://www.tariqtechlimited.com/privacy" style="color: #64748b; text-decoration: underline;">Privacy Notice</a>
              </td>
            </tr>

            <!-- System Automation Notice -->
            <tr>
              <td style="font-size: 11px; line-height: 1.5; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 14px;">
                Empowering businesses with intelligent digital solutions. This email was sent from an automated system.
              </td>
            </tr>

          </table>
        </td>
      </tr>

    </table>
  </body>
</html>`;
}

/**
 * Builds HTML email to notify TariqTech internal admin team
 */
function buildAdminNotificationHtml(inquiry: ContactInquiry): string {
  return `<!DOCTYPE html>
<html>
  <head><meta charset="utf-8"></head>
  <body style="font-family: Arial, sans-serif; background-color: #f8fafc; padding: 20px; color: #1e293b;">
    <div style="max-width: 600px; margin: 0 auto; background: #fff; padding: 24px; border-radius: 12px; border: 1px solid #cbd5e1;">
      <h2 style="color: #1a3a35; margin-top: 0;">🚀 New Project Inquiry Received!</h2>
      <p>A new inquiry was submitted via the TariqTech website.</p>
      
      <table width="100%" cellpadding="6" cellspacing="0" style="border-collapse: collapse; font-size: 14px;">
        <tr style="background-color: #f1f5f9;">
          <td><strong>Client Name:</strong></td>
          <td>${inquiry.full_name}</td>
        </tr>
        <tr>
          <td><strong>Work Email:</strong></td>
          <td><a href="mailto:${inquiry.work_email}">${inquiry.work_email}</a></td>
        </tr>
        <tr style="background-color: #f1f5f9;">
          <td><strong>WhatsApp / Phone:</strong></td>
          <td><a href="https://wa.me/${inquiry.whatsapp_number.replace(/[^0-9]/g, '')}">${inquiry.whatsapp_number}</a></td>
        </tr>
        <tr>
          <td><strong>Company:</strong></td>
          <td>${inquiry.company_name || 'N/A'}</td>
        </tr>
        <tr style="background-color: #f1f5f9;">
          <td><strong>Services:</strong></td>
          <td>${(inquiry.services || []).join(', ') || 'N/A'}</td>
        </tr>
        <tr>
          <td><strong>Budget:</strong></td>
          <td>${inquiry.budget || 'N/A'}</td>
        </tr>
        <tr style="background-color: #f1f5f9;">
          <td><strong>Timeline:</strong></td>
          <td>${inquiry.timeline || 'N/A'}</td>
        </tr>
        <tr>
          <td><strong>Preferred Channel:</strong></td>
          <td>${inquiry.contact_channel || 'WhatsApp'}</td>
        </tr>
        <tr style="background-color: #f1f5f9;">
          <td><strong>Problem Statement:</strong></td>
          <td>${inquiry.problem_statement || 'N/A'}</td>
        </tr>
        <tr>
          <td><strong>Project Description:</strong></td>
          <td>${inquiry.project_description || 'N/A'}</td>
        </tr>
        <tr style="background-color: #dcfce7;">
          <td><strong>📅 Meeting Request:</strong></td>
          <td><strong>${inquiry.meeting_date ? `${inquiry.meeting_date} (${inquiry.meeting_time || 'Flexible'}) via ${inquiry.meeting_mode} [Invite Target: ${inquiry.meeting_email || inquiry.work_email}]` : 'None specified'}</strong></td>
        </tr>
      </table>

      <p style="margin-top: 20px; font-size: 12px; color: #64748b;">
        Inquiry ID: ${inquiry.id} • Saved in Supabase: public.contact_inquiries
      </p>
    </div>
  </body>
</html>`;
}

/**
 * Sends both confirmation email to client and alert to internal team via Resend.
 */
export async function sendInquiryEmails(inquiry: ContactInquiry) {
  if (!resend) {
    console.info('[Email Notice]: RESEND_API_KEY is not configured yet. Set RESEND_API_KEY in .env.local to activate live delivery.');
    return { success: true, simulated: true };
  }

  try {
    // 1. Send confirmation email to client (matching Kepha14 reference layout)
    const clientPromise = resend.emails.send({
      from: FROM_EMAIL,
      to: [inquiry.work_email],
      subject: `Inquiry Received - TariqTech`,
      html: buildUserConfirmationHtml(inquiry),
    });

    // 2. Send notification email to TariqTech admin/team
    const adminPromise = resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      subject: `🚨 New Lead: ${inquiry.full_name} (${(inquiry.services || []).join(', ')})`,
      html: buildAdminNotificationHtml(inquiry),
    });

    const [clientRes, adminRes] = await Promise.allSettled([clientPromise, adminPromise]);

    return {
      success: true,
      clientSent: clientRes.status === 'fulfilled',
      adminSent: adminRes.status === 'fulfilled',
    };
  } catch (error) {
    console.error('Failed to send inquiry emails via Resend:', error);
    return { success: false, error };
  }
}
