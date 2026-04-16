import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, message, source = "website", lang = "en" } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const key = process.env.RESEND_API_KEY;
    if (!key) {
      // Not yet configured — log + return ok so the UI works while setup is pending
      console.log("[contact] New lead (Resend not configured):", { name, email, company, source });
      return NextResponse.json({ ok: true, pending: true });
    }

    const resend = new Resend(key);
    const subject = `New lead from ${source}: ${name}${company ? ` (${company})` : ""}`;
    const html = `
      <h2>New Lead from sisllc-international.com</h2>
      <p><strong>Source:</strong> ${escapeHtml(source)}</p>
      <p><strong>Language:</strong> ${escapeHtml(lang)}</p>
      <hr/>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
      <hr/>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    `;

    const { error } = await resend.emails.send({
      from: "SIS Website <noreply@sisllc-international.com>",
      to: ["info@sisllc-international.com"],
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ error: "Email failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Exception:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}
