import Image from "next/image";

const socialMediaList = [
  {
    altText: "Github",
    url: "https://github.com/Deniisolo",
    src: "./img/github.svg",
    size: 40,
  },
  {
    altText: "LinkedIn",
    url: "https://www.linkedin.com/in/denisolo/",
    src: "./img/linkedin.svg",
    size: 40,
  },
  {
    altText: "TikTok",
    url: "https://www.tiktok.com/@deniisolo",
    src: "./img/tiktok.svg",
    size: 40,
  },
];

export function AllSocialMedia() {
  return (
    <div className="flex gap-4">
      {socialMediaList.map((socialMedia) => (
        <a
          href={socialMedia.url}
          target="_blank"
          key={socialMedia.altText}
          className="opacity-50 transition hover:opacity-90"
        >
          <Image
            width={socialMedia.size}
            height={socialMedia.size}
            src={socialMedia.src}
            alt={socialMedia.altText}
          />
        </a>
      ))}
    </div>
  );
}
