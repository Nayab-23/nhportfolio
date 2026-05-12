import Image from "next/image"
import Link from "next/link"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nayabhossain",
    src: "/brands/linkedin-inbug.png",
    width: 40,
    height: 34,
    className: "h-10 w-auto",
  },
  {
    name: "GitHub",
    href: "https://github.com/Nayab-23",
    src: "/brands/github-invertocat-black.svg",
    width: 34,
    height: 34,
    className: "h-9 w-9",
  },
  {
    name: "Hugging Face",
    href: "https://huggingface.co/nayab",
    src: "/brands/huggingface-logo.svg",
    width: 34,
    height: 34,
    className: "h-9 w-9",
  },
] as const

/** Same structure as metallic-silver-border-card/components/electric-border-card.tsx; inner content is the site profile. */
export default function ElectricBorderCard() {
  return (
    <div className="profile-electric-border profile-card-float relative mx-auto w-fit transform-gpu text-white">
      <svg className="svg-container">
        <defs>
          <filter id="turbulent-displace" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="2" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
              <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="2" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
              <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />

            <feDisplacementMap
              in="SourceGraphic"
              in2="combinedNoise"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>
      </svg>

      <div className="card-container">
        <div className="inner-container">
          <div className="border-outer">
            <div className="main-card"></div>
          </div>
          <div className="glow-layer-1"></div>
          <div className="glow-layer-2"></div>
        </div>

        <div className="overlay-1"></div>
        <div className="overlay-2"></div>
        <div className="background-glow"></div>

        <div className="content-container">
          <div className="content-top">
            <div className="mx-auto mb-5 h-44 w-44 shrink-0 overflow-hidden rounded-full bg-white/10 sm:h-52 sm:w-52">
              <Image
                src="/images/nayab-portrait.jpg"
                alt="Portrait of Nayab Hossain"
                width={360}
                height={360}
                priority
                className="h-full w-full object-cover object-[center_58%]"
              />
            </div>
            <h2 className="title profile-card-name text-[1.65rem] font-semibold tracking-tight sm:text-[2.15rem]">
              Nayab Hossain
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-white/75" />
            <p className="mt-4 max-w-[17rem] text-center text-[0.82rem] font-semibold leading-snug tracking-[0.06em] text-white/95 sm:max-w-[19rem] sm:text-[0.9rem] sm:tracking-[0.08em]">
              Computer Engineering @ San José State University
            </p>
          </div>

          <hr className="divider" />

          <div className="content-bottom">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="profile-card-social-link"
              >
                <Image
                  src={social.src}
                  alt={`${social.name} logo`}
                  width={social.width}
                  height={social.height}
                  unoptimized={social.src.endsWith(".svg")}
                  className={social.className}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
