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
      <p>Please click <a href="">HERE</a> to view the promotional video for the RDU.</p>
      <p>Sincerely,</p>
      <p>
      The PACS Team
      </p>
      `
    });
    console.log(res)

    return new Response(JSON.stringify({ res }), { status: 200 });
  }

  return new Response(null, { status: 400 });
};
