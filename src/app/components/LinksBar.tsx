import Image from "next/image";

const LINKS = [
  {
    href: "https://t.me/yoloeth",
    label: "Telegram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.752 6.584a.75.75 0 0 0-1.04-.832l-17.25 7.5a.75.75 0 0 0 .04 1.39l4.89 1.96 2.06 4.12a.75.75 0 0 0 1.36-.02l2.13-4.26 4.89 1.96a.75.75 0 0 0 1.04-.832l-1.5-12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "https://x.com/yolo_on_eth",
    label: "X",
    icon: (
      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1024px-X_logo.jpg" alt="X" width={28} height={28} className="rounded bg-white" />
    ),
  },
  {
    href: "https://dexscreener.com/",
    label: "Dexscreener",
    icon: (
      <Image src="https://mediaresource.sfo2.digitaloceanspaces.com/wp-content/uploads/2024/04/20232343/dex-screener-logo-png_seeklogo-527276.png" alt="Dexscreener" width={28} height={28} className="rounded bg-white" />
    ),
  },
];

export default function LinksBar() {
  return null;
} 