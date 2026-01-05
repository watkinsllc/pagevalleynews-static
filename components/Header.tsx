"use client";

import { useState } from "react";
import WeatherWidget from "./WeatherWidget";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "News",
    href: "/news",
    children: [
      { label: "Agriculture", href: "/news/agriculture" },
      { label: "Business", href: "/news/business" },
      { label: "County", href: "/news/county" },
      { label: "Education", href: "/news/education" },
      { label: "Health", href: "/news/health" },
      { label: "Luray", href: "/news/luray" },
      { label: "Shenandoah", href: "/news/shenandoah" },
      { label: "Stanley", href: "/news/stanley" },
    ],
  },
  {
    label: "Sports",
    href: "/sports",
    children: [
      { label: "High Schools", href: "/sports/high-schools" },
      { label: "Outdoors and Recreation", href: "/sports/outdoors-recreation" },
    ],
  },
  {
    label: "Opinions",
    href: "/opinions",
    children: [
      { label: "Columns", href: "/opinions/columns" },
      { label: "Editorials", href: "/opinions/editorials" },
      { label: "Letters", href: "/opinions/letters" },
    ],
  },
  { label: "Obituaries", href: "/obituaries" },
  {
    label: "Public Notices",
    href: "/public-notices",
    children: [
      { label: "All Public Notices", href: "/public-notices" },
      { label: "Page County", href: "/public-notices/page-county" },
      { label: "Town of Luray", href: "/public-notices/town-of-luray" },
      { label: "Town of Stanley", href: "/public-notices/town-of-stanley" },
      { label: "Town of Shenandoah", href: "/public-notices/town-of-shenandoah" },
    ],
  },
  { label: "Yard Sales", href: "/yard-sales" },
  { label: "Jobs", href: "/jobs" },
  {
    label: "Community",
    href: "/community",
    children: [
      { label: "Local events", href: "/community/local-events" },
      { label: "Town of Luray", href: "/community/town-of-luray" },
      { label: "Town of Stanley", href: "/community/town-of-stanley" },
      { label: "Town of Shenandoah", href: "/community/town-of-shenandoah" },
      { label: "Chamber of Commerce", href: "/community/chamber-of-commerce" },
      { label: "Laurel Ridge Community College", href: "/community/laurel-ridge-community-college" },
      { label: "Luray Downtown Initiative", href: "/community/luray-downtown-initiative" },
      { label: "Page County", href: "/community/page-county" },
      { label: "Page County Public Schools", href: "/community/page-county-public-schools" },
      { label: "Page County Economic Development and Tourism", href: "/community/page-county-economic-development-tourism" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="border-b border-slate-200">
      {/* Full-width weather bar */}
      <div className="bg-slate-900 text-slate-100">
        <div className="mx-auto max-w-6xl px-0 py-1.5 flex justify-center">
          <WeatherWidget />
        </div>
      </div>

      {/* Red top links bar */}
      <div className="bg-red-700 text-white text-xs">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          {/* Left links */}
          <div className="flex flex-wrap items-center gap-4">
            <a href="/about" className="hover:underline">
              About Us
            </a>
            <a href="/contact" className="hover:underline">
              Contact Us
            </a>
            <a href="/donate" className="hover:underline">
              Donate
            </a>
            <a href="/subscribe" className="hover:underline">
              Subscribe to New Posts
            </a>
            <a href="/jobs/submit" className="hover:underline">
              Submit Job Listing
            </a>
          </div>

          {/* Right social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              X
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              YouTube
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

{/* Main masthead as single image */}
<div className="bg-white">
  <div className="mx-auto max-w-6xl px-4 py-2 md:py-3 flex justify-start">
    <a href="/">
      <img
        src="/header-banner.png"
        alt="Page Valley News – Covering the County Daily"
        className="h-auto w-auto max-w-full"
      />
    </a>
  </div>
</div>




      {/* Nav bar */}
      <nav className="bg-slate-900 text-slate-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
          {/* Desktop nav */}
          <ul className="hidden gap-6 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.children ? item.label : null)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a href={item.href} className="block py-2.5 hover:text-amber-300">
                  {item.label}
                </a>
                {item.children && openDropdown === item.label && (
                  <div className="absolute left-0 mt-1 min-w-[200px] rounded-md bg-white py-2 text-sm text-slate-900 shadow-lg">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-1.5 hover:bg-slate-100"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="border-t border-slate-800 bg-slate-900 md:hidden">
            <ul className="space-y-1 px-4 py-3 text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <div className="flex flex-col">
                    <a
                      href={item.href}
                      className="py-1.5 text-slate-100 hover:text-amber-300"
                    >
                      {item.label}
                    </a>
                    {item.children && (
                      <div className="ml-3 space-y-1 pb-1">
                        {item.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            className="block text-xs text-slate-300 hover:text-amber-300"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
