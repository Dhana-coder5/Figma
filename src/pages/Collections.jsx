import { Link } from "react-router-dom";

const collections = [
  {
    code: "01",
    name: "MINERAL PORCELAIN",
    subtitle: "ENGINEERED STONE SURFACES",
    description:
      "Large-format porcelain slabs developed around the visual language of natural mineral surfaces.",
    finish: "MATTE / HONED / STRUCTURED",
  },
  {
    code: "02",
    name: "ITALIAN MARBLE",
    subtitle: "NATURAL QUARRIED STONE",
    description:
      "Selected marble slabs with distinctive veining, tonal movement and bookmatch potential.",
    finish: "POLISHED / HONED / LEATHER",
  },
  {
    code: "03",
    name: "VOLCANIC CERAMIC",
    subtitle: "HAND-FINISHED SURFACES",
    description:
      "Dark mineral compositions inspired by volcanic rock and developed for tactile interiors.",
    finish: "RAW / TEXTURED / SATIN",
  },
  {
    code: "04",
    name: "ARCHITECTURAL TERRAZZO",
    subtitle: "AGGREGATE COMPOSITIONS",
    description:
      "Controlled aggregate surfaces designed for continuous floors, walls and custom fabrication.",
    finish: "HONED / MATTE / POLISHED",
  },
];

const specifications = [
  ["MAXIMUM FORMAT", "1600 × 3200 MM"],
  ["THICKNESS", "6 / 12 / 20 MM"],
  ["WATER ABSORPTION", "< 0.05%"],
  ["SURFACE HARDNESS", "HIGH PERFORMANCE"],
  ["SLIP RESISTANCE", "UP TO R11"],
  ["APPLICATION", "INTERIOR / EXTERIOR"],
];

function ImagePlaceholder({ label, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden bg-[#d7d2c8] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,#f0ece3_0,#d4cec3_40%,#aaa49a_100%)]" />

      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(135deg,transparent_25%,#fff_26%,transparent_28%,transparent_65%,#fff_66%,transparent_68%)]" />

      <div className="absolute bottom-4 left-4 border border-[#2b2924]/25 bg-[#f5f2ea]/80 px-3 py-2">
        <span className="text-[8px] font-semibold tracking-[0.16em]">
          {label}
        </span>
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-[7px] w-[7px] bg-[#96501f]" />

      <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#96501f]">
        {children}
      </span>
    </div>
  );
}

export default function Collections() {
  return (
    <main className="bg-[#f5f2ea]">

      {/* =====================================================
          PAGE INTRO
      ===================================================== */}

      <section className="mx-auto max-w-[1450px] px-6 pb-16 pt-16 lg:px-10 lg:pt-20">

        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr]">

          <div>

            <SectionLabel>
              2025 / 2026 SURFACE COLLECTIONS
            </SectionLabel>

            <h1 className="max-w-[850px] font-serif text-[48px] leading-[0.98] tracking-[-0.045em] md:text-[64px] lg:text-[76px]">
              SURFACE
              <br />
              COLLECTIONS
              <br />
              & SLAB REGISTRY
            </h1>

          </div>

          <div className="flex items-end">

            <p className="max-w-[470px] text-[12px] leading-6 text-[#5d5951]">
              A curated architectural material archive spanning engineered
              porcelain, Italian marble, volcanic ceramics and aggregate
              surfaces. Every collection is evaluated for visual continuity,
              fabrication and technical performance.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          COLLECTION FILTER BAR
      ===================================================== */}

      <section className="border-y border-[#d7d2c8] bg-[#eeebe3]">

        <div className="mx-auto flex max-w-[1450px] flex-wrap items-center justify-between gap-5 px-6 py-5 lg:px-10">

          <div className="flex flex-wrap gap-2">

            {[
              "ALL SURFACES",
              "PORCELAIN",
              "MARBLE",
              "CERAMIC",
              "TERRAZZO",
            ].map((filter, index) => (
              <button
                key={filter}
                className={`border px-4 py-2 text-[8px] font-semibold tracking-[0.12em] transition ${
                  index === 0
                    ? "border-[#24231f] bg-[#24231f] text-white"
                    : "border-[#d1ccc1] hover:border-[#24231f]"
                }`}
              >
                {filter}
              </button>
            ))}

          </div>

          <div className="font-mono text-[8px] tracking-[0.12em] text-[#77736b]">
            04 COLLECTIONS / 24 MATERIALS
          </div>

        </div>

      </section>


      {/* =====================================================
          COLLECTION GRID
      ===================================================== */}

      <section className="mx-auto max-w-[1450px] px-6 py-16 lg:px-10">

        <div className="grid gap-6 md:grid-cols-2">

          {collections.map((collection) => (
            <article
              key={collection.code}
              className="group border border-[#d6d1c6] bg-[#f8f6f0]"
            >

              <ImagePlaceholder
                label={`COLLECTION ${collection.code}`}
                className="aspect-[1.35/0.82]"
              />

              <div className="grid gap-8 p-7 md:grid-cols-[1fr_auto]">

                <div>

                  <div className="font-mono text-[8px] tracking-[0.15em] text-[#96501f]">
                    COLLECTION {collection.code}
                  </div>

                  <h2 className="mt-3 font-serif text-2xl tracking-[-0.02em]">
                    {collection.name}
                  </h2>

                  <div className="mt-1 text-[8px] font-semibold tracking-[0.14em] text-[#666159]">
                    {collection.subtitle}
                  </div>

                  <p className="mt-5 max-w-[480px] text-[11px] leading-5 text-[#625f58]">
                    {collection.description}
                  </p>

                </div>

                <div className="flex flex-col justify-between md:text-right">

                  <div className="text-[8px] leading-5 text-[#706c64]">
                    FINISH OPTIONS
                    <br />
                    <span className="font-semibold text-[#292823]">
                      {collection.finish}
                    </span>
                  </div>

                  <Link
                    to="/slab-dossier"
                    className="mt-8 inline-block text-[8px] font-semibold tracking-[0.12em] underline underline-offset-4"
                  >
                    OPEN DOSSIER →
                  </Link>

                </div>

              </div>

            </article>
          ))}

        </div>

      </section>


      {/* =====================================================
          MATERIAL REGISTRY
      ===================================================== */}

      <section className="border-y border-[#d7d2c8] bg-[#262620] text-[#f5f2ea]">

        <div className="mx-auto max-w-[1450px] px-6 py-16 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

            <div>

              <SectionLabel>
                SLAB REGISTRY
              </SectionLabel>

              <h2 className="font-serif text-4xl leading-[1.05] md:text-5xl">
                Technical
                <br />
                specification.
              </h2>

              <p className="mt-6 max-w-[400px] text-[11px] leading-6 text-[#bcb8af]">
                Core performance data for the architectural material archive.
                Project-specific technical documentation is available through
                the trade and specifier portal.
              </p>

            </div>


            <div className="border-t border-[#5b5a53]">

              {specifications.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-2 border-b border-[#5b5a53] py-5 md:grid-cols-[1fr_1fr]"
                >

                  <span className="text-[8px] font-semibold tracking-[0.14em] text-[#a7a39a]">
                    {label}
                  </span>

                  <span className="text-right font-mono text-[9px] tracking-[0.08em]">
                    {value}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED MATERIAL
      ===================================================== */}

      <section className="mx-auto max-w-[1450px] px-6 py-20 lg:px-10">

        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">

          <ImagePlaceholder
            label="FEATURED SLAB / CEPPO DI GRÉ"
            className="aspect-[1.2/1] min-h-[420px]"
          />

          <div className="border border-[#d6d1c6] bg-[#eeeae2] p-8 lg:p-12">

            <SectionLabel>
              FEATURED MATERIAL
            </SectionLabel>

            <div className="font-mono text-[8px] tracking-[0.15em] text-[#77736b]">
              AS-01 / NATURAL REFERENCE
            </div>

            <h2 className="mt-5 font-serif text-4xl leading-[1.05] md:text-5xl">
              CEPPO
              <br />
              DI GRÉ
            </h2>

            <p className="mt-7 text-[11px] leading-6 text-[#5d5951]">
              A graphic aggregate limestone reference translated into an
              architectural surface system. Its irregular mineral fragments
              create a strong visual rhythm across large-format applications.
            </p>


            <div className="mt-8 grid grid-cols-2 border-t border-[#d2cdc2]">

              <div className="border-r border-[#d2cdc2] py-5 pr-5">

                <div className="text-[8px] uppercase tracking-[0.12em] text-[#77736b]">
                  FORMAT
                </div>

                <div className="mt-2 font-serif text-lg">
                  1600 × 3200
                </div>

              </div>

              <div className="py-5 pl-5">

                <div className="text-[8px] uppercase tracking-[0.12em] text-[#77736b]">
                  THICKNESS
                </div>

                <div className="mt-2 font-serif text-lg">
                  6 / 12 MM
                </div>

              </div>

            </div>


            <Link
              to="/slab-dossier"
              className="mt-8 inline-flex bg-[#24231f] px-6 py-4 text-[9px] font-semibold tracking-[0.13em] text-white transition hover:bg-[#96501f]"
            >
              VIEW FULL SLAB DOSSIER →
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          APPLICATIONS
      ===================================================== */}

      <section className="bg-[#eae6dd]">

        <div className="mx-auto max-w-[1450px] px-6 py-20 lg:px-10">

          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <SectionLabel>
                APPLICATIONS
              </SectionLabel>

              <h2 className="font-serif text-4xl leading-[1.05] md:text-5xl">
                Specified for
                <br />
                architecture.
              </h2>

            </div>

            <p className="max-w-[430px] text-[11px] leading-5 text-[#625f58]">
              Material selection begins with the architectural application.
              From large walls to fabricated furniture, every surface is
              considered as part of a complete spatial system.
            </p>

          </div>


          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["01", "WALLS", "Continuous wall systems"],
              ["02", "FLOORS", "High-traffic surfaces"],
              ["03", "FURNITURE", "Integrated stone elements"],
              ["04", "HOSPITALITY", "Guest and public spaces"],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="border border-[#d2cdc2] bg-[#f5f2ea] p-6"
              >

                <div className="font-mono text-[8px] text-[#96501f]">
                  {number}
                </div>

                <div className="mt-12 font-serif text-xl">
                  {title}
                </div>

                <div className="mt-3 text-[9px] leading-5 text-[#706c64]">
                  {description}
                </div>

                <div className="mt-8 h-[1px] w-7 bg-[#96501f]" />

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="mx-auto max-w-[1450px] px-6 py-20 lg:px-10">

        <div className="relative overflow-hidden bg-[#25251f] px-7 py-14 text-[#f5f2ea] md:px-12">

          <div className="absolute right-0 top-0 h-full w-[35%] opacity-20">

            <div className="h-full w-full bg-[linear-gradient(135deg,transparent_25%,#d9d3c8_26%,transparent_28%,transparent_50%,#d9d3c8_51%,transparent_53%,transparent_75%,#d9d3c8_76%,transparent_78%)]" />

          </div>

          <div className="relative max-w-[720px]">

            <SectionLabel>
              PHYSICAL MATERIAL REVIEW
            </SectionLabel>

            <h2 className="font-serif text-3xl leading-tight md:text-4xl">
              Build the material
              <br />
              into your specification.
            </h2>

            <p className="mt-5 max-w-[560px] text-[11px] leading-6 text-[#bbb7ae]">
              Request physical samples, technical information and project
              support from the Atelier Surfaces specification team.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <button className="bg-[#f5f2ea] px-7 py-4 text-[9px] font-semibold tracking-[0.13em] text-[#24231f] transition hover:bg-[#96501f] hover:text-white">
                REQUEST SAMPLE BOX
              </button>

              <Link
                to="/trade-specifier"
                className="border border-[#77736b] px-7 py-4 text-[9px] font-semibold tracking-[0.13em] transition hover:border-white"
              >
                TRADE & SPECIFIER →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SMALL FOOTER
      ===================================================== */}

      <footer className="border-t border-[#d7d2c8]">

        <div className="mx-auto flex max-w-[1450px] flex-col justify-between gap-4 px-6 py-8 text-[8px] uppercase tracking-[0.13em] text-[#77736b] md:flex-row lg:px-10">

          <span>
            ATELIER SURFACES / SURFACE COLLECTIONS
          </span>

          <Link
            to="/"
            className="hover:text-[#96501f]"
          >
            BACK TO ATELIER →
          </Link>

        </div>

      </footer>

    </main>
  );
}