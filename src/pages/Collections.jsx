import { useState } from "react";

export default function Collections() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("architectural");

  function resetFilters() {
    setSearchQuery("");
    setViewMode("architectural");
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f3ec] text-[#24231f]">
      <div className="mx-auto max-w-[1400px] px-5 pt-5 sm:px-6 lg:px-[23px]">

        {/* ==========================================
            PAGE HEADING + CATALOG STATISTICS
        ========================================== */}

        <section className="grid grid-cols-1 gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(390px,449px)] lg:gap-10">

          {/* LEFT: ARCHIVE LABEL, TITLE AND DESCRIPTION */}

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="h-[10px] w-[10px] shrink-0 bg-[#a45b34]" />

              <p className="font-serif text-[9px] font-bold uppercase tracking-[0.22em] text-[#96501f] sm:text-[10px]">
                ARCHIVAL REPOSITORY // SYSTEM 2025
              </p>

              <span className="font-serif text-[10px] text-black/40">
                / VOL. IV
              </span>
            </div>

            <h1 className="mt-[11px] max-w-[680px] font-serif text-[32px] leading-[0.98] tracking-[-0.045em] sm:text-[38px] lg:text-[40px]">
              SURFACE COLLECTIONS &amp; SLAB REGISTRY
            </h1>

            <p className="mt-4 max-w-[650px] font-sans text-[14px] leading-[1.75] text-[#494a4d] sm:text-[16px]">
              Engineered architectural slabs, sintered minerals, and rare
              geological strata curated for high-traffic civic spaces, luxury
              wellness retreats, and tailored interior monolithic planes.
            </p>
          </div>


          {/* RIGHT: CATALOG STATISTICS CARD */}

          <div className="mt-0 grid min-h-[150px] grid-cols-3 border border-black/[0.06] bg-white px-3 py-6 shadow-[0_2px_5px_rgba(0,0,0,0.025)] sm:px-5 lg:mt-[29px] lg:min-h-[169px] lg:px-7 lg:py-7">

            {/* STATISTIC 1 */}

            <div className="min-w-0 border-r border-[#e7e3dc] pr-2 sm:pr-4">
              <p className="font-serif text-[9px] font-bold uppercase leading-[1.6] tracking-[0.05em] text-[#49484a] sm:text-[10px]">
                CATALOG
                <br />
                ENTRIES
              </p>

              <p className="mt-2 font-serif text-[25px] font-bold leading-none tracking-[-0.04em] sm:text-[28px]">
                48
              </p>

              <p className="mt-3 font-serif text-[9px] uppercase leading-[1.65] tracking-[0.06em] text-[#96501f] sm:text-[10px]">
                VERIFIED EPD
                <br />
                CERTIFIED
              </p>
            </div>


            {/* STATISTIC 2 */}

            <div className="min-w-0 border-r border-[#e7e3dc] px-2 sm:px-5">
              <p className="font-serif text-[9px] font-bold uppercase leading-[1.6] tracking-[0.05em] text-[#49484a] sm:text-[10px]">
                MAX FORMAT
              </p>

              <p className="mt-2 whitespace-nowrap font-serif text-[25px] font-bold leading-none tracking-[-0.04em] sm:text-[28px]">
                3.2<span className="text-[12px] font-normal">m</span>
              </p>

              <p className="mt-3 font-serif text-[9px] uppercase leading-[1.65] tracking-[0.04em] text-[#49484a] sm:text-[10px]">
                BOOKMATCH
                <br />
                CONTINUOUS
              </p>
            </div>


            {/* STATISTIC 3 */}

            <div className="min-w-0 pl-2 sm:pl-5">
              <p className="font-serif text-[9px] font-bold uppercase leading-[1.6] tracking-[0.05em] text-[#49484a] sm:text-[10px]">
                INSPECTION
                <br />
                BATCH
              </p>

              <p className="mt-2 whitespace-nowrap font-serif text-[25px] font-bold leading-none tracking-[-0.04em] sm:text-[28px]">
                Q3/25
              </p>

              <p className="mt-3 font-serif text-[9px] uppercase leading-[1.65] tracking-[0.04em] text-[#49484a] sm:text-[10px]">
                SASSUOLO &amp;
                <br />
                CARRARA
              </p>
            </div>

          </div>
        </section>


        {/* ==========================================
            SEARCH AND VIEW TOOLBAR
        ========================================== */}

        <section className="mt-8 border border-[#e3dfd6] bg-[#f8f6f0] p-3 shadow-[0_2px_3px_rgba(0,0,0,0.025)] sm:mt-10 sm:p-4 lg:mt-[48px]">

          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

            {/* SEARCH INPUT */}

            <label className="flex h-[38px] w-full items-center gap-3 border border-transparent bg-white px-4 transition focus-within:border-[#b2aaa0] xl:max-w-[384px]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-[13px] w-[13px] shrink-0 text-[#494a4d]"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" />
              </svg>

              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="SEARCH BY SPEC CODE, MINERAL, OR STRATA..."
                aria-label="Search catalog"
                className="min-w-0 flex-1 bg-transparent font-serif text-[10px] uppercase tracking-[0.04em] text-[#24231f] outline-none placeholder:text-[#92908c] sm:text-[11px]"
              />
            </label>


            {/* VIEW MODE + RESET */}

            <div className="flex flex-wrap items-center gap-2 xl:justify-end">

              <span className="mr-1 font-serif text-[9px] font-bold uppercase tracking-[0.12em] text-[#49484a] sm:text-[10px]">
                VIEW MODE:
              </span>


              {/* ARCHITECTURAL GRID VIEW */}

              <button
                type="button"
                onClick={() => setViewMode("architectural")}
                aria-pressed={viewMode === "architectural"}
                className={`flex h-[28px] items-center justify-center gap-1.5 px-3 font-serif text-[9px] font-bold uppercase tracking-[0.03em] transition-colors sm:px-4 sm:text-[10px] ${
                  viewMode === "architectural"
                    ? "bg-black text-white"
                    : "border border-black/[0.06] bg-[#efede6] text-[#24231f] hover:bg-[#e3dfd6]"
                }`}
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-[12px] w-[12px]"
                  aria-hidden="true"
                >
                  <rect x="1" y="1" width="5" height="5" />
                  <rect x="9" y="1" width="6" height="5" />
                  <rect x="1" y="9" width="5" height="6" />
                  <rect x="9" y="9" width="6" height="6" />
                </svg>

                ARCHITECTURAL (6)
              </button>


              {/* SCHEDULE LIST VIEW */}

              <button
                type="button"
                onClick={() => setViewMode("schedule")}
                aria-pressed={viewMode === "schedule"}
                className={`flex h-[28px] items-center justify-center gap-1.5 px-3 font-serif text-[9px] font-bold uppercase tracking-[0.03em] transition-colors sm:px-4 sm:text-[10px] ${
                  viewMode === "schedule"
                    ? "bg-black text-white"
                    : "border border-black/[0.06] bg-[#efede6] text-[#24231f] hover:bg-[#e3dfd6]"
                }`}
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-[12px] w-[12px]"
                  aria-hidden="true"
                >
                  <rect x="1.5" y="3" width="13" height="10" />
                  <path d="M5 3v10" />
                </svg>

                SCHEDULE LIST
              </button>


              {/* RESET */}

              <button
                type="button"
                onClick={resetFilters}
                className="flex h-[28px] items-center justify-center bg-[#f2efe8] px-4 font-serif text-[9px] font-bold uppercase tracking-[0.08em] text-[#96501f] transition-colors hover:bg-[#e8e2d7] sm:text-[10px]"
              >
                RESET FILTERS
              </button>

            </div>
          </div>
        </section>

{/* MODULE 1: RESULTS STATUS BAR */}

<section className="mx-auto max-w-[1185px] px-5 pt-7 sm:px-6">
  <div className="flex flex-col gap-2 bg-[#d6d3ca] px-4 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between lg:min-h-[39px] lg:flex-nowrap lg:gap-4 lg:py-2">

    {/* LEFT: RESULT COUNT */}
    <p className="font-serif text-[9px] font-bold uppercase tracking-[0.07em]">
      DISPLAYING 6 OF 48 FORMULATIONS
    </p>

    {/* CENTER: SORTING PRIORITY */}
    <p className="font-serif text-[9px] uppercase tracking-[0.05em] text-black/70">
      SORT: ARCHITECTURAL PRIORITY
    </p>

    {/* RIGHT: BATCH INFORMATION */}
    <p className="font-serif text-[9px] font-bold uppercase tracking-[0.05em] text-black/70">
      BATCH HARMONIZATION:
      <span className="ml-1 text-[#96501f]">
        CALIBRATED DIN EN 14411
      </span>
    </p>

  </div>
</section>



        {/* Collection cards and schedule results will be added
            below this toolbar when we build the next Figma section. */}

      </div>
    </main>
  );
}