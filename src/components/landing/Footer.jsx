import Link from "next/link";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className=" border-t border-border bg-slate-950 text-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-bold">
                Q
              </div>

              <span className="text-xl font-bold">
                Queue<span className="text-primary">Less</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              Real-time queue and appointment management for modern
              healthcare.
            </p>

            <div className="mt-6 flex gap-3">
              {[IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:bg-white/10 hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold">Product</h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>
                <Link href="#features" className="hover:text-white">
                  Features
                </Link>
              </li>

              <li>
                <Link href="#pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold">Company</h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white">
                  Blog
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold">Support</h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Help Center
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © 2026 QueueLess. All rights reserved.
          </p>

          <p>
            Less Wait. Better Care.
          </p>
        </div>
      </div>
    </footer>
  );
}