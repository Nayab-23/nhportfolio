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
                sizes="(max-width: 640px) 176px, 208px"
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
