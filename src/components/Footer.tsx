import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const linkClass =
    "hover:text-white transition-colors py-2 inline-block";

  return (
    <footer className="bg-parlia-dark text-gray-400 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <Image
          src="/images/parlia-logo-white.svg"
          alt="Parlia"
          width={136}
          height={40}
          className="mx-auto mb-8"
        />

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 mb-6 text-sm">
          <Link href="/" className={linkClass}>
            Home
          </Link>
          <Link href="/about" className={linkClass}>
            About Us
          </Link>
          <Link href="/tour" className={linkClass}>
            Tour
          </Link>
          <Link href="/opinion-dna" className={linkClass}>
            Opinion DNA™
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 mb-6 text-sm">
          <a href="#" className={linkClass}>
            Instagram
          </a>
          <a href="#" className={linkClass}>
            Facebook
          </a>
          <a href="#" className={linkClass}>
            Twitter
          </a>
          <a href="#" className={linkClass}>
            Newsletter
          </a>
          <a href="#" className={linkClass}>
            Podcast
          </a>
        </div>

        <div className="mb-6 text-sm">
          <a href="#" className={linkClass}>
            Encyclopedia of Opinion
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 mb-8 text-sm">
          <a href="#" className={linkClass}>
            Terms
          </a>
          <a href="#" className={linkClass}>
            Privacy
          </a>
          <a href="#" className={linkClass}>
            Cookies
          </a>
        </div>

        <p className="text-xs text-gray-500">
          Copyright Parlia 2024, Jadala Ltd.
        </p>
      </div>
    </footer>
  );
}
