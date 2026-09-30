import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navItems = [
  {
    label: "ATELIER HOME",
    path: "/",
  },
  {
    label: "SURFACE COLLECTIONS",
    path: "/surface-collections",
  },
  {
    label: "SLAB DOSSIER",
    path: "/slab-dossier",
  },
  {
    label: "BESPOKE FABRICATION",
    path: "/bespoke-fabrication",
  },
  {
    label: "TRADE & SAMPLES",
    path: "/trade-specifier",
  },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#24231f]/10 bg-[#f4f1e9]">
      {/* DESKTOP / MAIN HEADER */}
      <div className="mx-auto flex h-[82px] w-full max-w-[1185px] items-stretch">
        {/* -------------------------------------------------- */}
        {/* LOGO */}
        {/* -------------------------------------------------- */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex w-[237px] shrink-0 flex-col justify-center border-r border-[#24231f]/10 pl-[8px] pr-[20px]"
        >
          <div className="font-serif text-[20px] font-semibold leading-none tracking-[-0.035em] text-[#24231f]">
            ATELIER SURFACES
          </div>

          <div className="mt-[8px] text-[8px] font-semibold leading-[1.35] tracking-[0.16em] text-[#24231f]/75">
            ARCHITECTURAL SURFACES &
            <br />
            PORCELAIN SLABS
          </div>
        </Link>

        {/* -------------------------------------------------- */}
        {/* MAIN NAVIGATION */}
        {/* -------------------------------------------------- */}
        <nav className="hidden h-full flex-1 items-stretch xl:flex">
          {/* ATELIER HOME */}
          <Link
            to="/"
            className={`relative flex w-[98px] shrink-0 items-center justify-center px-2 text-center font-serif text-[10px] font-semibold leading-[1.45] tracking-[0.11em] transition-colors ${
              location.pathname === "/"
                ? "text-[#934c27]"
                : "text-[#302e29] hover:text-[#934c27]"
            }`}
          >
            <span>
              ATELIER
              <br />
              HOME
            </span>

            {location.pathname === "/" && (
              <span className="absolute bottom-0 left-[12px] right-[12px] h-[2px] bg-[#a45d36]" />
            )}
          </Link>

          {/* SURFACE COLLECTIONS */}
          <Link
            to="/surface-collections"
            className={`relative flex w-[132px] shrink-0 items-center justify-center px-2 text-center font-serif text-[10px] font-semibold leading-[1.4] tracking-[0.11em] transition-colors ${
              location.pathname === "/surface-collections"
                ? "text-[#934c27]"
                : "text-[#302e29] hover:text-[#934c27]"
            }`}
          >
            <span>
              SURFACE
              <br />
              COLLECTIONS
            </span>

            {location.pathname === "/surface-collections" && (
              <span className="absolute bottom-0 left-[14px] right-[14px] h-[2px] bg-[#a45d36]" />
            )}
          </Link>

          {/* SLAB DOSSIER */}
          <Link
            to="/slab-dossier"
            className={`relative flex w-[90px] shrink-0 items-center justify-center px-2 text-center font-serif text-[10px] font-semibold leading-[1.4] tracking-[0.11em] transition-colors ${
              location.pathname === "/slab-dossier"
                ? "text-[#934c27]"
                : "text-[#302e29] hover:text-[#934c27]"
            }`}
          >
            <span>
              SLAB
              <br />
              DOSSIER
            </span>

            {location.pathname === "/slab-dossier" && (
              <span className="absolute bottom-0 left-[12px] right-[12px] h-[2px] bg-[#a45d36]" />
            )}
          </Link>

          {/* BESPOKE FABRICATION */}
          <Link
            to="/bespoke-fabrication"
            className={`relative flex w-[127px] shrink-0 items-center justify-center px-2 text-center font-serif text-[10px] font-semibold leading-[1.4] tracking-[0.11em] transition-colors ${
              location.pathname === "/bespoke-fabrication"
                ? "text-[#934c27]"
                : "text-[#302e29] hover:text-[#934c27]"
            }`}
          >
            <span>
              BESPOKE
              <br />
              FABRICATION
            </span>

            {location.pathname === "/bespoke-fabrication" && (
              <span className="absolute bottom-0 left-[14px] right-[14px] h-[2px] bg-[#a45d36]" />
            )}
          </Link>

          {/* TRADE & SAMPLES */}
          <Link
            to="/trade-specifier"
            className={`relative flex w-[101px] shrink-0 items-center justify-center px-2 text-center font-serif text-[10px] font-semibold leading-[1.4] tracking-[0.11em] transition-colors ${
              location.pathname === "/trade-specifier"
                ? "text-[#934c27]"
                : "text-[#302e29] hover:text-[#934c27]"
            }`}
          >
            <span>
              TRADE &
              <br />
              SAMPLES
            </span>

            {location.pathname === "/trade-specifier" && (
              <span className="absolute bottom-0 left-[12px] right-[12px] h-[2px] bg-[#a45d36]" />
            )}
          </Link>
        </nav>

        {/* -------------------------------------------------- */}
        {/* RIGHT ACTIONS */}
        {/* -------------------------------------------------- */}
        <div className="hidden shrink-0 items-center xl:flex">
          {/* ORDER SAMPLE BOX */}
          <button
            type="button"
            className="mx-[5px] flex h-[66px] w-[144px] flex-col items-center justify-center border border-[#24231f] bg-transparent text-center transition-colors hover:bg-[#ebe7de]"
          >
            <span className="font-serif text-[10px] font-bold leading-[1.15] tracking-[0.15em] text-[#24231f]">
              ORDER
            </span>

            <span className="font-serif text-[10px] font-bold leading-[1.15] tracking-[0.15em] text-[#24231f]">
              SAMPLE BOX
            </span>

            <span className="mt-[5px] text-[9px] font-bold leading-none text-[#24231f]">
              (0)
            </span>
          </button>

          {/* TRADE SPECIFIER */}
          <Link
            to="/trade-specifier"
            className={`ml-[10px] flex h-[47px] w-[95px] items-center justify-center bg-[#e9e5dc] px-2 text-center font-serif text-[9px] font-bold leading-[1.35] tracking-[0.11em] transition-colors ${
              location.pathname === "/trade-specifier"
                ? "text-[#934c27]"
                : "text-[#302e29] hover:bg-[#dfd9cd] hover:text-[#934c27]"
            }`}
          >
            TRADE
            <br />
            SPECIFIER
          </Link>

          {/* CURATOR ACCESS */}
          <button
            type="button"
            className="ml-[8px] flex h-[60px] w-[139px] items-center justify-center gap-[9px] px-2 text-left transition-colors hover:bg-black/[0.02]"
          >
            {/* ROUND ICON */}
            <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#24231f]/10 bg-[#d4ccbd]">
              <div className="h-[18px] w-[18px] rounded-full bg-[#b9ae9b]" />
            </div>

            {/* TEXT */}
            <div className="flex flex-col">
              <span className="font-serif text-[9px] font-semibold leading-none tracking-[0.1em] text-[#24231f]">
                Curator
              </span>

              <span className="mt-[8px] text-[8px] leading-none text-[#24231f]/60">
                Access
              </span>
            </div>
          </button>
        </div>

        {/* -------------------------------------------------- */}
        {/* MOBILE HAMBURGER */}
        {/* -------------------------------------------------- */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="ml-auto flex h-full w-[54px] items-center justify-center xl:hidden"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
        >
          <div className="flex w-[20px] flex-col gap-[5px]">
            <span className="h-px w-full bg-[#24231f]" />
            <span className="h-px w-full bg-[#24231f]" />
            <span className="h-px w-full bg-[#24231f]" />
          </div>
        </button>
      </div>

      {/* -------------------------------------------------- */}
      {/* MOBILE NAVIGATION */}
      {/* -------------------------------------------------- */}
      {mobileOpen && (
        <div className="border-t border-[#24231f]/10 bg-[#f4f1e9] px-6 py-4 xl:hidden">
          <div className="flex flex-col">
            {navItems.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`border-b border-[#24231f]/10 py-[14px] font-serif text-[10px] font-semibold tracking-[0.14em] ${
                    active
                      ? "text-[#934c27]"
                      : "text-[#302e29] hover:text-[#934c27]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}