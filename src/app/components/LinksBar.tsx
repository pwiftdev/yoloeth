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
  return (
    <div className="w-full flex justify-center py-6 bg-black/80 border-t border-zinc-800 gap-8">
      {LINKS.map(link => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-zinc-900/80 hover:bg-pink-500/80 transition-colors text-white font-bold text-lg shadow-lg hover:scale-105"
        >
          {link.icon}
          <span className="hidden sm:inline">{link.label}</span>
        </a>
      ))}
    </div>
  );
} 