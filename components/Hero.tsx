import Image from "next/image";
import { profile } from "@/data/content";

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

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={profile.bookCall.href}
                className="inline-flex h-10 items-center rounded-xl bg-[#111110] px-5 text-[14px] font-semibold text-white transition-colors hover:bg-[#2b2b28]"
              >
                {profile.bookCall.label}
              </a>
              <a
                href={profile.follow.href}
                className="inline-flex h-10 items-center rounded-xl bg-[#efeee9] px-5 text-[14px] font-medium text-ink transition-colors hover:bg-[#e4e3dc]"
              >
                {profile.follow.label}
              </a>
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
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="transition-colors hover:text-[#4b1fff]"
                  >
                    {social.label}
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
