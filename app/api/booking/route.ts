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
        const {
            serviceType,
            pickupDate,
            pickupTime,
            pickupLocation,
            dropoffLocation,
            passengers,
            luggage,
            vehicle,
            firstName,
            lastName,
            email,
            phone,
            comments
        } = body;

        // Generate a random confirmation code (e.g., ATL-ABC123)
        const randomStr = Math.random().toString(36).substring(2, 8).toUpperCase();
        const confirmationCode = `ATL-${randomStr}`;

        // Basic server-side validation
        if (!email || !firstName || !phone) {
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
            subject: `New Reservation: ${firstName} ${lastName} - ${serviceType}`,
            html: `
                <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px;">
                    <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">New Reservation Request</h2>
                    
                    <div style="margin-bottom: 20px;">
                        <h3 style="color: #555;">Customer Details</h3>
                        <p><strong>Confirmation Code:</strong> <span style="font-size: 18px; color: #d4af37; font-weight: bold;">${confirmationCode}</span></p>
                        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #d4af37;">${email}</a></p>
                        <p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #d4af37;">${phone}</a></p>
                    </div>
                    
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
                        <h3 style="color: #555; margin-top: 0;">Trip Details</h3>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr><td style="padding: 5px 0;"><strong>Service:</strong></td><td>${serviceType}</td></tr>
                            <tr><td style="padding: 5px 0;"><strong>Date:</strong></td><td>${pickupDate} at ${pickupTime}</td></tr>
                            <tr><td style="padding: 5px 0;"><strong>Vehicle:</strong></td><td>${vehicle || 'Not Selected'}</td></tr>
                            <tr><td style="padding: 5px 0;"><strong>From:</strong></td><td>${pickupLocation || 'N/A'}</td></tr>
                            <tr><td style="padding: 5px 0;"><strong>To:</strong></td><td>${dropoffLocation || 'N/A'}</td></tr>
                            <tr><td style="padding: 5px 0;"><strong>Pax/Luggage:</strong></td><td>${passengers} pass / ${luggage} bags</td></tr>
                        </table>
                    </div>
                    
                    <div>
                        <h3 style="color: #555;">Special Requests</h3>
                        <p style="background-color: #fff; padding: 10px; border: 1px solid #ddd;">${comments || 'None provided'}</p>
                    </div>

                    <div style="margin-top: 20px; font-size: 12px; color: #999; text-align: center;">
                        Sent via Avian Travels Website Booking System
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error('Resend Error:', error);
            // If Resend fails, we still want to return the confirmation code so the UI doesn't break,
            // but we log the error for debugging.
            return NextResponse.json(
                { message: 'Failed to send booking email to the team due to an internal error. Please call us directly to book.', confirmationCode, error },
                { status: 500 }
            );
        }

        return NextResponse.json({ 
            message: 'Booking request sent successfully',
            confirmationCode 
        }, { status: 200 });

    } catch (error) {
        console.error('Booking API Error:', error);
        return NextResponse.json(
            { message: 'Internal server error processing booking' },
            { status: 500 }
        );
    }
}
