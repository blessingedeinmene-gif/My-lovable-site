import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.jpg";
import audBusiness from "@/assets/aud-business.jpg";
import audPro from "@/assets/aud-pro.jpg";
import audCreator from "@/assets/aud-creator.jpg";
import audStudent from "@/assets/aud-student.jpg";
import { Calendar, Clock, Sparkles, TrendingUp, Briefcase, GraduationCap, Users, Check, ArrowRight, Bot, Wand2, Rocket, DollarSign, Wrench, Lightbulb, Flame, Target } from "lucide-react";

const REGISTER_URL = "https://forms.gle/Wzt8jGMbWUQS6rgY7";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Free 3-Day AI Workshop. Smart Tech" },
      { name: "description", content: "Join our free 3-day AI workshop (May 22 to 24). Learn practical AI for productivity, business growth, content, sales and new income opportunities." },
      { property: "og:title", content: "Free 3-Day AI Workshop. Smart Tech" },
      { property: "og:description", content: "Use AI to grow your income, career and business. Beginner-friendly. May 22 to 24. Register free." },
      { property: "og:url", content: "https://smarttechst.lovable.app/" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://smarttechst.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Free 3-Day AI Workshop",
          description: "Live 3-day workshop teaching practical AI for productivity, business growth, content, sales and new income opportunities.",
          provider: { "@type": "Organization", name: "Smart Tech Solutions and Trainings", sameAs: "https://smarttechst.lovable.app/" },
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "Online",
            startDate: "2026-05-22",
            endDate: "2026-05-24",
          },
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
        }),
      },
    ],
  }),
  component: Index,
});

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
      {children}
    </span>
  );
}

function CTA({ size = "lg", children }: { size?: "lg" | "md"; children: React.ReactNode }) {
  const sizing = size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";
  return (
    <a
      href={REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-semibold text-[var(--navy)] transition-all hover:-translate-y-0.5 ${sizing}`}
      style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-glow)" }}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Index() {
  const learn = [
    { icon: Bot, text: "Understanding the AI ecosystem" },
    { icon: Wand2, text: "Basic prompt engineering skills" },
    { icon: TrendingUp, text: "Use AI to improve productivity" },
    { icon: Rocket, text: "Optimize and scale your business" },
    { icon: Wrench, text: "AI tools for sales, content & automation" },
    { icon: DollarSign, text: "Income opportunities with AI skills" },
    { icon: Lightbulb, text: "The right way to use AI beyond trends" },
  ];

  const audience = [
    { img: audBusiness, label: "Business Owners", note: "Run leaner. Sell smarter." },
    { img: audPro, label: "Young Professionals", note: "Stay sharp. Get promoted." },
    { img: audCreator, label: "Freelancers & Creators", note: "Ship more in less time." },
    { img: audStudent, label: "Students and learners", note: "Skills school won't teach you." },
  ];

  const days = [
    { d: "Day 1", title: "Foundations of AI", body: "Demystify AI, explore the ecosystem and learn how it actually works behind the tools you see online every day." },
    { d: "Day 2", title: "Prompting & Productivity", body: "Master prompt engineering and apply AI to save hours every week in your work, projects and personal life." },
    { d: "Day 3", title: "Business, Income & Beyond", body: "Turn AI skills into real income. Automation, content, sales workflows and modern career leverage you can apply immediately." },
  ];

  return (
    <main className="min-h-screen font-sans text-foreground" style={{ background: "var(--gradient-hero)" }}>
      {/* Nav */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Smart Tech Solutions and Trainings" className="h-10 w-auto rounded-md" width={160} height={40} />
          </div>
          <CTA size="md">Register Free</CTA>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent, oklch(0.14 0.05 263) 90%)" }} />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-7">
            <Pill><span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" /> Free 3-Day Workshop</Pill>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Use AI to Grow Your{" "}
              <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--sky)] bg-clip-text text-transparent">
                Income, Career & Business
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--lilac)]">
              If you've been watching everyone else use AI and quietly wondering
              <span className="text-white"> "where do I even start?"</span>. this workshop was built for you.
              No fluff. No jargon. Just the exact skills that turn AI into income, growth and an unfair career edge.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-3 py-1.5 text-xs font-semibold text-[var(--gold)]">
                <Flame className="h-3.5 w-3.5" /> Seats are limited. register before they fill up
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <CTA>Claim My Free Seat</CTA>
                <div className="flex items-center gap-3 text-sm text-[var(--lilac)]">
                  <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-[var(--gold)]" /> May 22 to 24</div>
                  <span className="opacity-30">•</span>
                  <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-[var(--gold)]" /> Live</div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {["Productivity", "Prompting", "Automation", "Content", "Income"].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--lilac)]">{t}</span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-white/10 bg-[var(--card)]/70 p-6 backdrop-blur-xl" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--sky)]">Workshop Pass</span>
                <span className="rounded-full bg-[var(--gold)] px-2 py-0.5 text-[10px] font-bold text-[var(--navy)]">FREE</span>
              </div>
              <div className="mt-6">
                <div className="text-sm text-[var(--lilac)]">3-Day Live Workshop</div>
                <div className="mt-1 font-display text-3xl font-bold">May 22 to 24</div>
              </div>
              <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <ul className="space-y-3 text-sm">
                {[
                  "Live sessions with practical demos",
                  "Workbook & curated AI tools list",
                  "Q&A and community access",
                  "Replay available to attendees",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                    <span className="text-[var(--lilac)]">{i}</span>
                  </li>
                ))}
              </ul>
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-semibold text-[var(--navy)] transition hover:bg-[var(--gold)]"
              >
                Register Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, oklch(0.32 0.18 268 / 0.45), transparent 65%)" }} />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
            <Target className="h-3.5 w-3.5" /> Our Mission
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] md:text-6xl">
            Train <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--sky)] bg-clip-text text-transparent">1,000 people</span> to use AI for income, career and business.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--lilac)]">
            We're not running a webinar. We're building a movement of 1,000 everyday people
            who'll stop watching from the sidelines and actually use AI to change their work, money and life.
          </p>

          {/* Progress */}
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-white/10 bg-[var(--card)]/70 p-8 backdrop-blur-xl" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="flex items-end justify-between">
              <div className="text-left">
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--sky)]">Mission progress</div>
                <div className="mt-1 font-display text-4xl font-bold md:text-5xl">
                  <span className="text-[var(--gold)]">372</span>
                  <span className="text-white/40"> / 1,000</span>
                </div>
              </div>
              <div className="text-right text-sm text-[var(--lilac)]">
                <div className="font-semibold text-white">628 seats left</div>
                <div>across the mission</div>
              </div>
            </div>
            <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full" style={{ width: "37.2%", background: "var(--gradient-gold)", boxShadow: "var(--shadow-glow)" }} />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-left">
              {[
                { n: "1K", l: "People trained" },
                { n: "100%", l: "Free, always" },
                { n: "1", l: "Mission" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="font-display text-2xl font-bold text-[var(--gold)]">{s.n}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-[var(--lilac)]">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <CTA>I Want To Be One Of The 1,000</CTA>
            <p className="text-xs text-[var(--lilac)]">Each seat brings the mission closer. Will yours be next?</p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="relative border-y border-white/5 bg-[var(--navy)]/40 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">
            You don't have an AI problem. <br className="hidden md:block" />
            <span className="text-[var(--gold)]">You have a where to start problem.</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--lilac)]">
            Endless YouTube tutorials. Twitter threads promising overnight income. Tools you signed up for and never opened again.
            By the end of these 3 days, you'll stop collecting tabs and start using AI like the people you've been quietly studying.
          </p>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <Pill>What you'll learn</Pill>
            <h2 className="mt-5 font-display text-3xl font-bold md:text-5xl">
              Practical AI skills, not theory.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {learn.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)] transition group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-5 font-medium leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="relative py-24" style={{ background: "linear-gradient(180deg, transparent, oklch(0.20 0.07 263))" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Pill>Workshop schedule</Pill>
              <h2 className="mt-5 font-display text-3xl font-bold md:text-5xl">3 days. Real outcomes.</h2>
            </div>
            <div className="text-sm text-[var(--lilac)]">May 22 to 24 • Live sessions</div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {days.map((day, i) => (
              <div key={day.d} className="relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--card)] p-7">
                <div className="absolute -right-6 -top-6 font-display text-7xl font-bold text-white/[0.04]">0{i + 1}</div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--sky)]">{day.d}</span>
                <h3 className="mt-3 font-display text-xl font-bold">{day.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--lilac)]">{day.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <Pill>Who this is for</Pill>
            <h2 className="mt-5 font-display text-3xl font-bold md:text-5xl">
              Wait. this is literally <span className="text-[var(--gold)]">me.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--lilac)]">
              If you see yourself in any of these, you're in the right place.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audience.map(({ img, label, note }) => (
              <div key={label} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--card)]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={img}
                    alt={label}
                    width={768}
                    height={896}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-lg font-bold">{label}</p>
                  <p className="mt-1 text-sm text-[var(--lilac)]">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-24">
        <div
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16 md:py-20"
          style={{ background: "linear-gradient(135deg, var(--electric), oklch(0.32 0.18 268))" }}
        >
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[var(--gold)]/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[var(--sky)]/30 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--navy)]">
              <Flame className="h-3.5 w-3.5" /> Limited seats. closes soon
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold md:text-5xl">
              If you're still reading, <span className="text-[var(--gold)]">this is your sign.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--lilac)]">
              Two days from now you'll either still be wondering where to start with AI. or you'll already be using it. Pick one.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <CTA>Yes, Save My Free Seat</CTA>
              <p className="text-xs text-[var(--lilac)]">Free • Live • May 22 to 24</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-[var(--lilac)] md:flex-row">
          <div>© {new Date().getFullYear()} Smart Tech. All rights reserved.</div>
          <div>Free 3-Day AI Workshop • May 22 to 24</div>
        </div>
      </footer>
    </main>
  );
}
