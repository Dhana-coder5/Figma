import { Link, useLocation } from "react-router-dom";

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-[#f4f1e9]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[80px] w-full items-stretch px-6 lg:px-8">
        {/* LOGO */}
        <Link
          to="/"
          className="flex min-w-[275px] flex-col justify-center border-r border-black/10 pr-7"
        >
          <div className="font-serif text-[20px] font-semibold leading-none tracking-[-0.03em]">
            ATELIER SURFACES
          </div>

          <div className="mt-2 text-[8px] font-semibold leading-[1.3] tracking-[0.18em] text-black/65">
            ARCHITECTURAL SURFACES &
            <br />
            PORCELAIN SLABS
          </div>
        </Link>

        {/* MAIN NAV */}
        <nav className="hidden flex-1 items-stretch xl:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center justify-center px-5 text-center font-serif text-[10px] font-semibold leading-[1.35] tracking-[0.13em] transition ${
                  active
                    ? "text-[#934c27]"
                    : "text-[#302e29] hover:text-[#934c27]"
                }`}
              >
                {item.label}

                {active && (
                  <span className="absolute bottom-0 left-5 right-5 h-[2px] bg-[#a45d36]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="ml-auto hidden items-stretch lg:flex">
          {/* SAMPLE BOX */}
          <button
            type="button"
            className="flex w-[142px] flex-col items-center justify-center border-l border-r border-black/10 px-4 text-center transition hover:bg-black/[0.025]"
          >
            <span className="font-serif text-[10px] font-bold leading-[1.2] tracking-[0.16em]">
              ORDER
            </span>

            <span className="font-serif text-[10px] font-bold leading-[1.2] tracking-[0.16em]">
              SAMPLE BOX
            </span>

            <span className="mt-1 text-[9px] font-bold">(0)</span>
          </button>

          {/* TRADE SPECIFIER */}
          <Link
            to="/trade-specifier"
            className={`flex w-[96px] items-center justify-center border-r border-black/10 px-3 text-center font-serif text-[9px] font-bold leading-[1.4] tracking-[0.13em] transition ${
              location.pathname === "/trade-specifier"
                ? "text-[#934c27]"
                : "text-[#302e29] hover:text-[#934c27]"
            }`}
          >
            TRADE
            <br />
            SPECIFIER
          </Link>

          {/* CURATOR ACCESS */}
          <button
            type="button"
            className="flex w-[145px] items-center justify-center gap-3 px-3 transition hover:bg-black/[0.025]"
          >
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-[#d7d0c2]">
              <div className="h-5 w-5 rounded-full bg-[#b8ad9a]" />
            </div>

            <div className="text-left">
              <div className="font-serif text-[9px] font-bold tracking-[0.12em]">
                Curator
              </div>

              <div className="mt-1 text-[8px] text-black/50">
                Access
              </div>
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        <button
          type="button"
          className="ml-auto flex h-full w-12 items-center justify-center xl:hidden"
          aria-label="Open navigation"
        >
          <div className="flex w-5 flex-col gap-[5px]">
            <span className="h-px w-full bg-black" />
            <span className="h-px w-full bg-black" />
            <span className="h-px w-full bg-black" />
          </div>
        </button>
      </div>

      {/* MOBILE NAV */}
      <div className="border-t border-black/10 bg-[#f4f1e9] px-6 py-5 xl:hidden">
        <div className="grid grid-cols-1 gap-1">
          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`border-b border-black/10 py-4 font-serif text-[11px] font-semibold tracking-[0.15em] ${
                  active ? "text-[#934c27]" : "text-black/70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            to="/trade-specifier"
            className="py-4 font-serif text-[11px] font-semibold tracking-[0.15em]"
          >
            TRADE SPECIFIER
          </Link>
        </div>
      </div>
    </header>
  );
}