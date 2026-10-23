import { Resend } from 'resend';
import { ContactInquiry } from './supabase';

function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'TariqTech Limited <noreply@tariqtechlimited.com>';
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
            
            <!-- Social Icons Row (Globe/Website, Instagram, LinkedIn, X) -->
            <tr>
              <td align="center" style="padding-bottom: 22px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <!-- Website / Globe (Dunia) -->
                    <td style="padding: 0 10px;">
                      <a href="https://www.tariqtechlimited.com" target="_blank" title="Website" style="text-decoration: none; display: inline-block;">
                        <img src="https://img.icons8.com/?id=3685&format=png&size=48&color=2a8a85" width="22" height="22" alt="Website" style="display: block; width: 22px; height: 22px; border: 0;" />
                      </a>
                    </td>

                    <!-- Instagram -->
                    <td style="padding: 0 10px;">
                      <a href="https://www.instagram.com/tariqtech.limited/" target="_blank" title="Instagram" style="text-decoration: none; display: inline-block;">
                        <img src="https://img.icons8.com/?id=32323&format=png&size=48" width="22" height="22" alt="Instagram" style="display: block; width: 22px; height: 22px; border: 0;" />
                      </a>
                    </td>

                    <!-- LinkedIn -->
                    <td style="padding: 0 10px;">
                      <a href="https://linkedin.com" target="_blank" title="LinkedIn" style="text-decoration: none; display: inline-block;">
                        <img src="https://img.icons8.com/?id=13930&format=png&size=48" width="22" height="22" alt="LinkedIn" style="display: block; width: 22px; height: 22px; border: 0;" />
                      </a>
                    </td>

                    <!-- X (Twitter) -->
                    <td style="padding: 0 10px;">
                      <a href="https://x.com" target="_blank" title="X" style="text-decoration: none; display: inline-block;">
                        <img src="https://img.icons8.com/?id=6Fsj3rv2DCmG&format=png&size=48&color=111827" width="20" height="20" alt="X" style="display: block; width: 20px; height: 20px; border: 0;" />
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
  const resend = getResendClient();

  if (!resend) {
    console.info('[Email Notice]: RESEND_API_KEY is not configured yet. Set RESEND_API_KEY in .env.local to activate live delivery.');
    return { success: true, simulated: true };
  }

  try {
    console.info(`[Email Dispatch]: Sending inquiry confirmation for ${inquiry.full_name} to ${inquiry.work_email} and admin ${ADMIN_EMAIL}...`);

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

    if (clientRes.status === 'fulfilled') {
      console.info(`[Email Success]: Client confirmation sent, ID:`, clientRes.value);
    } else {
      console.error(`[Email Error]: Failed to send client confirmation:`, clientRes.reason);
    }

    if (adminRes.status === 'fulfilled') {
      console.info(`[Email Success]: Admin notification sent, ID:`, adminRes.value);
    } else {
      console.error(`[Email Error]: Failed to send admin notification:`, adminRes.reason);
    }

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
