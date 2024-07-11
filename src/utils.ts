"use server"
import { Resend } from "resend";

let delay = 0;

export const getDelay = () => (delay+=210);

const resend = new Resend("re_2fthSobo_HHBWAU5x6XpXaA5QocdqGhfB");

export async function sendEmail(name: string, email: string, content: string) {
  /* TODO: Server-Side Emailing （Now using client-side）
    const { data, error } = await resend.emails.send({
        from: `${name} <${email}>`,
        to: ['2675256772@qq.com','2457483710@qq.com'],
        subject: `${content}`,
        html: `
        收到了新的反馈!
        ${content}`,
      });
    
      if (error) {
        return console.error({ error });
      }
      console.log({ data });

      return data;
  */
}