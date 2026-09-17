import { useState, type FormEvent } from "react";
import { Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useReveal } from "@/hooks/use-reveal";
import { SocialGlyph } from "@/components/site/icons";

export function Contact() {
  const ref = useReveal<HTMLElement>();
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setStatus("Sending message…");

    try {
      const body = new FormData(form);
      const response = await fetch(site.formEndpoint, {
        method: "POST",
        body,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      setStatus("Message sent successfully.");
      setOk(true);
      toast.success("Message sent.");
    } catch {
      setStatus("Failed to send. Please try again, or email me directly.");
      toast.error("Couldn’t send — try email instead.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="reveal relative z-10 mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28"
    >
      <p className="text-xs font-medium tracking-section text-muted uppercase">04 / Contact</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
        Let’s build something
      </h2>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <form
          id="contact-form"
          action={site.formEndpoint}
          method="POST"
          onSubmit={onSubmit}
          className="rounded-2xl bg-surface p-5 shadow-border sm:p-8"
        >
          <div className="mb-5 grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" required autoComplete="name" />
          </div>
          <div className="mb-5 grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@studio.com"
              required
              autoComplete="email"
            />
          </div>
          <div className="mb-6 grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={5} placeholder="What are we making?" required />
          </div>
          <Button type="submit" className="w-full" disabled={sending}>
            {sending ? "Sending…" : "Send message"}
          </Button>
          <p id="form-response" className="mt-3 min-h-6 text-sm text-muted" role="status">
            {status}
          </p>
        </form>

        <div className="rounded-2xl bg-surface p-5 shadow-border sm:p-8">
          <h3 className="font-display text-2xl font-semibold">Get in touch</h3>
          <p className="mt-2 text-muted">
            Roles, freelance, or a product that needs a sharper front. I usually reply within a day.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex gap-3">
              <Mail className="mt-1 size-5 text-primary" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium">Email</span>
                <a className="break-all text-muted transition-colors hover:text-primary" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                <a className="break-all text-muted transition-colors hover:text-primary" href={`mailto:${site.emailAlt}`}>
                  {site.emailAlt}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-1 size-5 text-primary" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium">Phone</span>
                <a className="text-muted transition-colors hover:text-primary" href={site.phoneHref}>
                  {site.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="inline-flex size-11 items-center justify-center rounded-full border border-line text-primary transition-colors duration-150 hover:bg-primary hover:text-primary-fg"
              >
                <SocialGlyph kind={s.kind} className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={ok} onOpenChange={setOk}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Message received</DialogTitle>
            <DialogDescription>
              Thanks — I’ll get back to you from {site.email}. If it’s urgent, WhatsApp or a call works too.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setOk(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
