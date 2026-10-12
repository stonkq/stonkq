"use client"

import { useState } from "react"

const NAV_LINKS = [
  { label: "Platform",     href: "#platform" },
  { label: "Agents",       href: "#agents" },
  { label: "Workflow",     href: "#workflow" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing",      href: "#pricing" },
] 

const BRAND_LOGO = "/stonk-quantum-logo.jpg"

const NAV_STYLE = {
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  background: "rgba(0,0,0,0.88)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.22), 0 2px 8px rgba(8,197,232,0.08)",
} as const

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-3xl">

        {/* Main bar */}
        <nav
          className="flex items-center justify-between px-5 py-3 rounded-2xl border border-white/10"
          style={NAV_STYLE}
        >
          <a href="/" aria-label="Stonk Quantum home" className="flex h-9 w-[150px] max-w-[42vw] min-w-0 items-center overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#08C5E8]">
            <img src={BRAND_LOGO} alt="Stonk Quantum" className="h-full w-full scale-[2.25] object-contain object-center" />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
            {NAV_LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="text-[11px] text-white/65 hover:text-[#08C5E8] transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="text-[11px] px-4 py-2 rounded-xl border border-white/15 text-white/75 hover:text-white hover:border-[#08C5E8]/60 hover:bg-[#08C5E8]/10 transition-all duration-200 tracking-wide hidden md:block" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
              START BUILDING
            </button>

            {/* Burger — mobile only */}
            <button
              onClick={() => setOpen(v => !v)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] rounded-lg hover:bg-white/10 transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span
                className="block h-px bg-white/80 transition-all duration-300 origin-center"
                style={{
                  width: "18px",
                  transform: open ? "translateY(6px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block h-px bg-black/60 transition-all duration-300"
                style={{
                  width: "18px",
                  opacity: open ? 0 : 1,
                  transform: open ? "scaleX(0)" : "none",
                }}
              />
              <span
                className="block h-px bg-white/80 transition-all duration-300 origin-center"
                style={{
                  width: "18px",
                  transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <div
          className="md:hidden mt-2 overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: open ? "320px" : "0px", opacity: open ? 1 : 0 }}
        >
          <div
            className="rounded-2xl border border-white/10 px-2 py-2 flex flex-col"
            style={NAV_STYLE}
          >
            {NAV_LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                onClick={close}
                className="px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors tracking-wide"
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              >
                {l.label}
              </a>
            ))}
            <div className="mt-1 px-2 pb-1">
              <button className="w-full text-[11px] px-4 py-2.5 rounded-xl border border-white/15 text-white/75 hover:text-white hover:border-[#08C5E8]/60 hover:bg-[#08C5E8]/10 transition-all duration-200 tracking-wide" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
                START BUILDING
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
