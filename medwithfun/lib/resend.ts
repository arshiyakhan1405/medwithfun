import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendDownloadEmail = async (userEmail: string, downloadLink: string) => {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', 
      to: userEmail,
      subject: 'Your E-Book',
      html: `<p>Here is your download link: ${downloadLink}</p>`
    });
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Email send failed:", error);
  }
};