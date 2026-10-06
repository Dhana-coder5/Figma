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

      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <div className="mx-auto flex h-[82px] w-full max-w-[1185px] items-stretch">

        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex w-[272px] shrink-0 items-center border-r border-[#24231f]/10"
        >
          <img
            src="/images/atelier-wordmark.png"
            alt="Atelier Surfaces"
            className="h-[74px] w-[272px] object-contain object-left"
          />
        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav className="hidden h-full flex-1 items-stretch xl:flex">

          {/* ATELIER HOME */}
          <Link
            to="/"
            className={`relative flex w-[100px] shrink-0 items-center justify-center px-2 text-center font-serif text-[9px] font-semibold leading-[1.4] tracking-[0.12em] transition-colors ${
              location.pathname === "/"
                ? "text-[#995021]"
                : "text-[#302e29] hover:text-[#995021]"
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
            className={`relative flex w-[128px] shrink-0 items-center justify-center px-2 text-center font-serif text-[9px] font-semibold leading-[1.4] tracking-[0.12em] transition-colors ${
              location.pathname === "/surface-collections"
                ? "text-[#995021]"
                : "text-[#302e29] hover:text-[#995021]"
            }`}
          >
            <span>
              SURFACE
              <br />
              COLLECTIONS
            </span>

            {location.pathname === "/surface-collections" && (
              <span className="absolute bottom-0 left-[13px] right-[13px] h-[2px] bg-[#a45d36]" />
            )}
          </Link>


          {/* SLAB DOSSIER */}
          <Link
            to="/slab-dossier"
            className={`relative flex w-[87px] shrink-0 items-center justify-center px-2 text-center font-serif text-[9px] font-semibold leading-[1.4] tracking-[0.12em] transition-colors ${
              location.pathname === "/slab-dossier"
                ? "text-[#995021]"
                : "text-[#302e29] hover:text-[#995021]"
            }`}
          >
            <span>
              SLAB
              <br />
              DOSSIER
            </span>

            {location.pathname === "/slab-dossier" && (
              <span className="absolute bottom-0 left-[11px] right-[11px] h-[2px] bg-[#a45d36]" />
            )}
          </Link>


          {/* BESPOKE FABRICATION */}
          <Link
            to="/bespoke-fabrication"
            className={`relative flex w-[140px] shrink-0 items-center justify-center px-2 text-center font-serif text-[9px] font-semibold leading-[1.4] tracking-[0.12em] transition-colors ${
              location.pathname === "/bespoke-fabrication"
                ? "text-[#995021]"
                : "text-[#302e29] hover:text-[#995021]"
            }`}
          >
            <span>
              BESPOKE
              <br />
              FABRICATION
            </span>

            {location.pathname === "/bespoke-fabrication" && (
              <span className="absolute bottom-0 left-[13px] right-[13px] h-[2px] bg-[#a45d36]" />
            )}
          </Link>


          {/* TRADE & SAMPLES */}
          <Link
            to="/trade-specifier"
            className={`relative flex w-[114px] shrink-0 items-center justify-center px-2 text-center font-serif text-[9px] font-semibold leading-[1.4] tracking-[0.12em] transition-colors ${
              location.pathname === "/trade-specifier"
                ? "text-[#995021]"
                : "text-[#302e29] hover:text-[#995021]"
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


        {/* =================================================
            RIGHT ACTIONS
        ================================================= */}

        <div className="hidden shrink-0 items-center xl:flex">

          {/* ORDER SAMPLE BOX */}
          <button
            type="button"
            className="mx-[4px] flex h-[66px] w-[143px] shrink-0 flex-col items-center justify-center border border-[#24231f] bg-transparent text-center transition-colors hover:bg-[#ebe7de]"
          >
            <span className="font-serif text-[10px] font-bold leading-[1.1] tracking-[0.14em] text-[#24231f]">
              ORDER
            </span>

            <span className="font-serif text-[10px] font-bold leading-[1.1] tracking-[0.14em] text-[#24231f]">
              SAMPLE BOX
            </span>

            <span className="mt-[5px] font-serif text-[8px] font-bold leading-none text-[#24231f]">
              (0)
            </span>
          </button>


          {/* TRADE SPECIFIER */}
          <Link
            to="/trade-specifier"
            className={`ml-[10px] flex h-[47px] w-[95px] shrink-0 items-center justify-center bg-[#e9e5dc] px-2 text-center font-serif text-[9px] font-bold leading-[1.35] tracking-[0.1em] transition-colors ${
              location.pathname === "/trade-specifier"
                ? "text-[#995021]"
                : "text-[#302e29] hover:bg-[#ded9ce] hover:text-[#995021]"
            }`}
          >
            TRADE
            <br />
            SPECIFIER
          </Link>


          {/* CURATOR ACCESS */}
          <button
            type="button"
            className="ml-[8px] flex h-[64px] w-[104px] shrink-0 items-center justify-center gap-[7px] border-l border-[#24231f]/10 px-[6px] text-left transition-colors hover:bg-black/[0.02]"
          >

            <img
              src="/images/curator-avatar-clean.jpg"
              alt="Curator"
              className="h-[38px] w-[38px] shrink-0 rounded-full object-cover"
            />

            <div className="min-w-0">

              <div className="font-serif text-[9px] font-semibold leading-none tracking-[0.08em] text-[#24231f]">
                Curator
              </div>

              <div className="mt-[8px] text-[8px] leading-none text-[#24231f]/60">
                Access
              </div>

            </div>

          </button>

        </div>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

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


      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

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
                      ? "text-[#995021]"
                      : "text-[#302e29] hover:text-[#995021]"
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