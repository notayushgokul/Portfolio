import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const resendKey = process.env.RESEND_API_KEY || '';
const contactEmail = process.env.CONTACT_EMAIL || 'ayushgokul2207@gmail.com';

const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;
const resend = resendKey ? new Resend(resendKey) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, service, message } = body;

    // Strict validation
    if (!name || !email || !company || !service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Insert into Supabase (if configured)
    if (supabase) {
      const { error: dbError } = await supabase
        .from('leads')
        .insert([
          { name, email, company, service, message, status: 'new' }
        ]);

      if (dbError) {
        console.error('Database Error:', dbError);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
      }
    } else {
      console.warn("Supabase is not configured yet. Skipping DB insert.");
    }

    // Send email via Resend (if configured)
    if (resend) {
      await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>', // In prod, change this to a verified domain
        to: contactEmail,
        subject: `New Lead: ${name} from ${company}`,
        text: `New Inquiry from Portfolio\n\nName: ${name}\nEmail: ${email}\nCompany/Product: ${company}\nNeed: ${service}\n\nMessage:\n${message || 'N/A'}`
      });
    } else {
      console.warn("Resend is not configured yet. Skipping email notification.");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
