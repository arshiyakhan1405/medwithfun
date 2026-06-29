'use server'

import { sendDownloadEmail } from "../lib/resend";

export async function triggerEmailAction(email: string) {
  try {
    // Ebook ka link
    const downloadLink = "https://drive.google.com/file/d/1R6kRxP80LaHBWJX3jP_Nm6svQzTlq6Ok/view?usp=sharing";
    
    // Email bhejne ka function call
    await sendDownloadEmail(email, downloadLink);
    
    return { success: true };
  } catch (error) {
    console.error("Action error:", error);
    return { success: false, error: "Failed to send email" };
  }
}