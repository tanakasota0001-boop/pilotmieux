import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200/60 bg-white py-10">
      <div className="mx-auto max-w-6xl px-5 flex items-center justify-center gap-4 text-xs text-gray-400">
        <Link
          href="/privacy"
          className="transition-colors hover:text-gray-600"
        >
          Privacy Policy
        </Link>
        <span className="text-gray-200">|</span>
        <span>&copy; 2026 株式会社パイロットミュー（pilotmieux, Inc.）</span>
      </div>
    </footer>
  );
}
