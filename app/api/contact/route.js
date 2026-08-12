import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Run on the Node.js runtime — nodemailer is not Edge-compatible.
export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function POST(request) {
    const formData = await request.formData();

    const hpField = formData.get("hpField");
    // Bot trap: if the hidden field is filled, pretend success and drop it.
    if (hpField) {
        return NextResponse.json({ ok: true });
    }

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const projectType = String(formData.get("projectType") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const uploadedFiles = formData.getAll("attachments").filter((f) => f && f.size > 0);

    if (!name || !email || !message) {
        return NextResponse.json(
            { error: "Please fill in all required fields." },
            { status: 400 }
        );
    }

    if (!EMAIL_RE.test(email)) {
        return NextResponse.json(
            { error: "Please enter a valid email address." },
            { status: 400 }
        );
    }

    const MAX_TOTAL_SIZE = 20 * 1024 * 1024; // 20MB
    const totalSize = uploadedFiles.reduce((sum, f) => sum + f.size, 0);
    if (totalSize > MAX_TOTAL_SIZE) {
        return NextResponse.json(
            { error: "Attachments exceed the 20MB limit." },
            { status: 400 }
        );
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
    const to = process.env.CONTACT_TO || "estimates@sigmaestimations.com";
    const from = process.env.CONTACT_FROM || SMTP_USER;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
        console.error("Contact form: SMTP environment variables are not configured.");
        return NextResponse.json(
            { error: "Email service is not configured. Please try again later." },
            { status: 500 }
        );
    }

    const port = Number(SMTP_PORT) || 465;

    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port,
        secure: port === 465, // true for 465, false for 587/STARTTLS
        auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const safe = {
        name: escapeHtml(name),
        email: escapeHtml(email),
        phone: escapeHtml(phone || "Not provided"),
        projectType: escapeHtml(projectType || "Not specified"),
        message: escapeHtml(message).replace(/\n/g, "<br/>"),
    };

    const attachmentNote = uploadedFiles.length
        ? `<p style="margin:12px 0 0"><strong>Attachments:</strong> ${uploadedFiles
            .map((f) => escapeHtml(f.name))
            .join(", ")}</p>`
        : "";

    const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#1a1a2e">
      <div style="background:linear-gradient(135deg,#0F172A,#004AB7);padding:24px;border-radius:12px 12px 0 0">
        <h2 style="color:#fff;margin:0;font-size:18px">New Estimate Request — Sigma Estimations</h2>
        <p style="color:#AEC7F9;margin:6px 0 0;font-size:13px">${safe.projectType} Project</p>
      </div>
      <div style="border:1px solid #e5e5f0;border-top:none;border-radius:0 0 12px 12px;padding:24px">
        <p style="margin:0 0 8px"><strong>Name:</strong> ${safe.name}</p>
        <p style="margin:0 0 8px"><strong>Email:</strong> ${safe.email}</p>
        <p style="margin:0 0 8px"><strong>Phone:</strong> ${safe.phone}</p>
        <p style="margin:0 0 8px"><strong>Project Type:</strong> ${safe.projectType}</p>
        <hr style="border:none;border-top:1px solid #e5e5f0;margin:16px 0"/>
        <p style="margin:0 0 6px"><strong>Project Details</strong></p>
        <p style="margin:0;line-height:1.6;color:#333">${safe.message}</p>
        ${attachmentNote}
      </div>
    </div>
  `;

    const text =
        `New estimate request — Sigma Estimations\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || "Not provided"}\n` +
        `Project Type: ${projectType || "Not specified"}\n\n` +
        `Message:\n${message}\n` +
        (uploadedFiles.length
            ? `\nAttachments: ${uploadedFiles.map((f) => f.name).join(", ")}\n`
            : "");

    const attachments = await Promise.all(
        uploadedFiles.map(async (file) => ({
            filename: file.name,
            content: Buffer.from(await file.arrayBuffer()),
        }))
    );

    try {
        await transporter.sendMail({
            from: `"Sigma Estimations Website" <${from}>`,
            to,
            replyTo: `"${name}" <${email}>`,
            subject: `[Estimate Request] ${projectType || "General"} — ${name}`,
            text,
            html,
            attachments,
        });
    } catch (err) {
        console.error("Contact form: failed to send email", err);
        return NextResponse.json(
            { error: "Could not send your message. Please try again." },
            { status: 502 }
        );
    }

    return NextResponse.json({ ok: true });
}