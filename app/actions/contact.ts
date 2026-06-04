"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    brand: string;
    service: string;
    message: string;
    referral: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
    try {
        const { error } = await resend.emails.send({
            // to: change this to "temitayoomotosho50@gmail.com" once you verify a domain in Resend
            from: "TheDigitalTee <onboarding@resend.dev>",
            to: "temitayoomotosho50@gmail.com",
            replyTo: data.email,
            subject: `New Inquiry from ${data.name}${data.service ? ` — ${data.service}` : ""}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #FAF7F4;">
                    <h2 style="color: #7D4A3F; margin-bottom: 4px;">New Client Inquiry</h2>
                    <p style="color: #5C5C5C; margin-top: 0; font-size: 14px;">via TheDigitalTee website</p>

                    <table style="width: 100%; border-collapse: collapse; margin-top: 24px;">
                        <tr style="border-bottom: 1px solid #e4e4e4;">
                            <td style="padding: 12px 0; color: #5C5C5C; font-size: 13px; width: 140px;">Name</td>
                            <td style="padding: 12px 0; color: #1C1C1C; font-size: 14px; font-weight: 600;">${data.name}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #e4e4e4;">
                            <td style="padding: 12px 0; color: #5C5C5C; font-size: 13px;">Email</td>
                            <td style="padding: 12px 0; font-size: 14px;"><a href="mailto:${data.email}" style="color: #7D4A3F;">${data.email}</a></td>
                        </tr>
                        ${data.phone ? `
                        <tr style="border-bottom: 1px solid #e4e4e4;">
                            <td style="padding: 12px 0; color: #5C5C5C; font-size: 13px;">Phone</td>
                            <td style="padding: 12px 0; color: #1C1C1C; font-size: 14px;">${data.phone}</td>
                        </tr>` : ""}
                        ${data.brand ? `
                        <tr style="border-bottom: 1px solid #e4e4e4;">
                            <td style="padding: 12px 0; color: #5C5C5C; font-size: 13px;">Brand</td>
                            <td style="padding: 12px 0; color: #1C1C1C; font-size: 14px;">${data.brand}</td>
                        </tr>` : ""}
                        ${data.service ? `
                        <tr style="border-bottom: 1px solid #e4e4e4;">
                            <td style="padding: 12px 0; color: #5C5C5C; font-size: 13px;">Service</td>
                            <td style="padding: 12px 0; color: #1C1C1C; font-size: 14px;">${data.service}</td>
                        </tr>` : ""}
                        ${data.referral ? `
                        <tr style="border-bottom: 1px solid #e4e4e4;">
                            <td style="padding: 12px 0; color: #5C5C5C; font-size: 13px;">How they found you</td>
                            <td style="padding: 12px 0; color: #1C1C1C; font-size: 14px;">${data.referral}</td>
                        </tr>` : ""}
                    </table>

                    <div style="margin-top: 28px; padding: 20px; background: #fff; border-radius: 12px; border-left: 3px solid #7D4A3F;">
                        <p style="color: #5C5C5C; font-size: 13px; margin-top: 0; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Project Details</p>
                        <p style="color: #1C1C1C; font-size: 14px; line-height: 1.7; margin: 0;">${data.message.replace(/\n/g, "<br>")}</p>
                    </div>

                    <p style="margin-top: 32px; font-size: 12px; color: #aaa; border-top: 1px solid #e4e4e4; padding-top: 16px;">
                        Sent from thedigitaltee.com · Reply directly to this email to respond to ${data.name}
                    </p>
                </div>
            `,
        });

        if (error) return { success: false, error: error.message };
        return { success: true };
    } catch (err) {
        const message = err instanceof Error ? err.message : "Failed to send email";
        return { success: false, error: message };
    }
}
