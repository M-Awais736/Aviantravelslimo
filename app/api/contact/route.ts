import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    try {
        // Initialize Resend with API key
        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not set');
            return NextResponse.json(
                { message: 'Email service is not configured' },
                { status: 500 }
            );
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const body = await request.json();
        const { name, email, subject, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Avian Travels Limo <onboarding@resend.dev>', // Will use your verified domain later
            to: ['aviantravelslimo@gmail.com'],
            replyTo: email,
            subject: `Contact Form: ${subject || 'New Message'} - ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px;">
                    <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">New Contact Message</h2>
                    
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
                    
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin-top: 20px; font-size: 16px; line-height: 1.5;">
                        <strong>Message:</strong><br/>
                        ${message.replace(/\n/g, '<br/>')}
                    </div>
                    
                    <div style="margin-top: 20px; font-size: 12px; color: #999; text-align: center;">
                        Sent via Avian Travels Website Contact Form
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return NextResponse.json(
                { message: 'Failed to send message due to an internal error.', error },
                { status: 500 }
            );
        }

        return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { message: 'Failed to send message' },
            { status: 500 }
        );
    }
}
