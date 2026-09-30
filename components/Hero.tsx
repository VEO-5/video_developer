import Image from "next/image";
import BookCallButton from "@/components/BookCallButton";
import FollowButton from "@/components/FollowButton";
import { profile } from "@/data/content";

function SocialIcon({ label }: { label: string }) {
  const common = "h-5 w-5";
  if (label === "Instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={common}
        aria-hidden="true"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    );
  }
  if (label === "LinkedIn") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={common}
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={common}
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="bg-cream text-ink">
      {/* thin dark top rule, as in the reference design */}
      <div className="h-[3px] bg-[#22303f]" aria-hidden="true" />

      <div className="mx-auto w-full max-w-3xl px-6 pt-8 pb-10 sm:pt-12">
        {/* availability */}
        <p className="flex items-center gap-2 text-[14px] text-muted">
          <span
            className="inline-block h-2 w-2 rounded-full bg-[#22c55e]"
            aria-hidden="true"
          />
          {profile.availability}
        </p>

        {/* main row */}
        <div className="mt-6 grid gap-8 md:grid-cols-[1.35fr_1fr] md:items-start">
          <div>
            <h1 className="text-[30px] font-semibold leading-none tracking-tight sm:text-[32px]">
              {profile.name}
            </h1>

            <p className="mt-5 text-[15px] leading-[1.65]">
              <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
                Currently —{" "}
              </span>
              {profile.currently}
            </p>

            <p className="mt-4 text-[15px] leading-[1.65]">
              <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
                Previously —{" "}
              </span>
              {profile.previously}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <BookCallButton href={profile.bookCall.href} />
              <FollowButton href={profile.follow.href} />
            </div>
          </div>

          {/* portrait */}
          <div className="relative aspect-[4/5] w-full max-w-[240px] overflow-hidden bg-[#e9e7e0] md:justify-self-end">
            <Image
              src={profile.portrait.src}
              alt={profile.portrait.alt}
              fill
              sizes="(max-width: 768px) 100vw, 240px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* bottom link columns */}
        <div className="mt-28 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-[14px] font-normal text-muted">What I do</h2>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium">
              {profile.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[14px] font-normal text-muted">
              Stay in touch
            </h2>
            <ul className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-ink transition-colors hover:text-[#4b1fff]"
                  >
                    <SocialIcon label={social.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
