import Link from "next/link";
import Image from "next/image";

export default function Footer() {
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

        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/tour" className="hover:text-white transition-colors">
            Tour
          </Link>
          <Link
            href="/opinion-dna"
            className="hover:text-white transition-colors"
          >
            Opinion DNA™
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Facebook
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Newsletter
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Podcast
          </a>
        </div>

        <div className="mb-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">
            Encyclopedia of Opinion
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
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
