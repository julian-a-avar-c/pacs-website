export const prerender = false;

import type { APIRoute } from "astro";

import { Resend } from 'resend';

// TODO: 
export const POST: APIRoute = async ({ request }) => {

  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    const recipient = body.recipient;

    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    const res = await resend.emails.send({
      // from: 'onboarding@resend.dev',
      from: "noreply@marketing.pacsllc.net",
      to: recipient,
      subject: 'View PACS\' RDU Video Now',
      html: `
      <p>Welcome to the pack!</p>
      <p></p>
      <p>To see PACS's RDU promotional video, please click <a href="https://youtu.be/fbv5_lv5TTk?si=knrPmu8CC46w69H7">HERE</a>.</p>
      <p></p>
      <p></p>
      <p>Sincerely,</p>
      <p>The PACS Team</p>
      <p>
        Email: <a href="mailto:info@pacsllc.net">info@pacsllc.net</a>
        <br />
        Tel: <a href="tel:+17734749701">(773) 474-9701</a>
      </p>
      `
    });
    console.log(res)

    return new Response(JSON.stringify({ res }), { status: 200 });
  }

  return new Response(null, { status: 400 });
};
