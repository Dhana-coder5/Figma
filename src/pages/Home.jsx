import { Link } from "react-router-dom";

const materials = [
  {
    name: "CEPPO DI GRÉ",
    type: "ITALIAN LIMESTONE",
    code: "AS-01",
    description:
      "Architectural stone with a distinctive mineral aggregate and restrained tonal variation.",
  },
  {
    name: "CALACATTA VENA",
    type: "BOOKMATCHED MARBLE",
    code: "AS-02",
    description:
      "High-contrast veining selected for continuous slab compositions and monumental interiors.",
  },
  {
    name: "TERRA FERRATA",
    type: "VOLCANIC CERAMIC",
    code: "AS-03",
    description:
      "Hand-finished volcanic surface developed for tactile architectural applications.",
  },
  {
    name: "BASALT VEIL",
    type: "PORCELAIN STONEWARE",
    code: "AS-04",
    description:
      "Dense mineral surface with a deep graphite character and highly controlled finish.",
  },
];

const applications = [
  {
    number: "01",
    title: "WALL SYSTEMS",
    text: "Large-format surfaces engineered for continuous architectural walls.",
  },
  {
    number: "02",
    title: "MONOLITHIC VANITIES",
    text: "Precision fabricated stone elements with concealed joints and integrated details.",
  },
  {
    number: "03",
    title: "FLOOR & STAIR",
    text: "High-performance slabs developed for demanding horizontal applications.",
  },
  {
    number: "04",
    title: "HOSPITALITY",
    text: "Material systems specified for residential and hospitality environments.",
  },
];

function ImagePlaceholder({
  label = "FIGMA IMAGE ASSET",
  className = "",
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[#ddd8ce] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,#f3efe6_0,#d9d3c8_35%,#bbb5aa_100%)]" />

      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(125deg,transparent_35%,#ffffff_36%,transparent_38%,transparent_60%,#ffffff_61%,transparent_63%)]" />

      <div className="absolute bottom-4 left-4 border border-[#24231f]/30 bg-[#f5f2ea]/80 px-3 py-2">
        <span className="text-[8px] font-semibold tracking-[0.16em] text-[#45423c]">
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

export default function Home() {
  return (
    <main className="bg-[#f5f2ea]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="mx-auto max-w-[1450px] px-6 pb-20 pt-16 lg:px-10 lg:pt-20">

        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">

          {/* LEFT */}
          <div>

            <SectionLabel>
              ARCHITECTURAL MINERAL ARCHIVE • EDITION 25/26
            </SectionLabel>

            <h1 className="max-w-[650px] font-serif text-[52px] leading-[0.98] tracking-[-0.045em] sm:text-[64px] lg:text-[76px]">
              SURFACES AS
              <br />
              PURE
              <br />
              ARCHITECTURE
            </h1>

            <p className="mt-8 max-w-[600px] text-[16px] leading-7 text-[#53504a] lg:text-[17px]">
              Ultra-large format porcelain stoneware, bookmatched Italian
              marbles, and handcrafted volcanic ceramics engineered for
              monumental residential and hospitality interiors.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <Link
                to="/surface-collections"
                className="inline-flex min-h-[50px] items-center justify-center bg-[#171714] px-7 text-[10px] font-semibold tracking-[0.12em] text-white transition hover:bg-[#96501f]"
              >
                EXPLORE 2025/2026 ARCHIVE
                <span className="ml-5 text-lg">→</span>
              </Link>

              <button
                className="inline-flex min-h-[50px] items-center justify-center border border-[#d8d3c9] bg-[#ebe7de] px-7 text-[10px] font-semibold tracking-[0.1em] text-[#292823] transition hover:border-[#171714]"
              >
                <span className="mr-3">□</span>
                REQUEST PHYSICAL SWATCH BOX
              </button>

            </div>

          </div>


          {/* RIGHT HERO IMAGE */}
          <div className="relative">

            <ImagePlaceholder
              label="HERO ARCHITECTURE IMAGE"
              className="aspect-[1.08/0.88] w-full"
            />

            <div className="absolute bottom-5 left-5 bg-[#f5f2ea] px-5 py-4 shadow-sm">

              <div className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#8e4c21]">
                FEATURED RESIDENCE
              </div>

              <div className="mt-1 font-serif text-[15px]">
                Mineral Bath Collection
              </div>

              <div className="mt-1 text-[8px] uppercase tracking-[0.12em] text-[#666159]">
                CEPPO / NATURAL STONE / ARCHITECTURAL DETAIL
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PERFORMANCE STRIP
      ===================================================== */}

      <section className="bg-[#24241f] text-[#f5f2ea]">

        <div className="mx-auto grid max-w-[1450px] grid-cols-2 divide-x divide-[#57564f] px-6 py-8 md:grid-cols-4 lg:px-10">

          <div className="px-5 py-3 md:px-8">
            <div className="font-serif text-3xl lg:text-4xl">
              1600×3200
            </div>

            <div className="mt-2 text-[8px] uppercase tracking-[0.17em] text-[#bdb8ad]">
              MAX FORMAT / MM
            </div>
          </div>

          <div className="px-5 py-3 md:px-8">
            <div className="font-serif text-3xl lg:text-4xl">
              &lt; 0.05%
            </div>

            <div className="mt-2 text-[8px] uppercase tracking-[0.17em] text-[#bdb8ad]">
              WATER ABSORPTION
            </div>
          </div>

          <div className="px-5 py-3 md:px-8">
            <div className="font-serif text-3xl lg:text-4xl">
              R11 / 45+
            </div>

            <div className="mt-2 text-[8px] uppercase tracking-[0.17em] text-[#bdb8ad]">
              SLIP / WEAR PERFORMANCE
            </div>
          </div>

          <div className="px-5 py-3 md:px-8">
            <div className="font-serif text-3xl lg:text-4xl">
              100%
            </div>

            <div className="mt-2 text-[8px] uppercase tracking-[0.17em] text-[#bdb8ad]">
              ARCHITECTURAL TRACEABILITY
            </div>
          </div>

        </div>

      </section>


      {/* =====================================================
          MATERIAL LINEAGE ARCHIVE
      ===================================================== */}

      <section className="mx-auto max-w-[1450px] px-6 py-20 lg:px-10">

        <div className="flex flex-col justify-between gap-6 border-b border-[#d5d0c5] pb-8 md:flex-row md:items-end">

          <div>

            <SectionLabel>
              MATERIAL LINEAGE ARCHIVE
            </SectionLabel>

            <h2 className="max-w-[700px] font-serif text-4xl leading-[1.05] tracking-[-0.03em] md:text-5xl">
              Mineral surfaces selected
              <br />
              for architectural continuity.
            </h2>

          </div>

          <Link
            to="/surface-collections"
            className="text-[9px] font-semibold uppercase tracking-[0.14em] underline underline-offset-4"
          >
            VIEW COMPLETE ARCHIVE →
          </Link>

        </div>


        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {materials.map((material) => (
            <article
              key={material.code}
              className="group border border-[#d9d4c9] bg-[#f8f6f0] transition hover:-translate-y-1"
            >

              <ImagePlaceholder
                label={material.code}
                className="aspect-[1.25/1]"
              />

              <div className="p-5">

                <div className="text-[8px] font-semibold tracking-[0.15em] text-[#96501f]">
                  {material.type}
                </div>

                <h3 className="mt-3 font-serif text-[21px]">
                  {material.name}
                </h3>

                <p className="mt-3 text-[11px] leading-5 text-[#625f58]">
                  {material.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[#ddd8ce] pt-4">

                  <span className="font-mono text-[8px] tracking-[0.12em]">
                    {material.code}
                  </span>

                  <span className="text-[8px] font-semibold tracking-[0.1em] opacity-0 transition group-hover:opacity-100">
                    VIEW DOSSIER →
                  </span>

                </div>

              </div>

            </article>
          ))}

        </div>

      </section>


      {/* =====================================================
          SPATIAL APPLICATION MATRIX
      ===================================================== */}

      <section className="border-y border-[#d8d3c8] bg-[#eeebe3]">

        <div className="mx-auto max-w-[1450px] px-6 py-20 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

            <div>

              <SectionLabel>
                SPATIAL APPLICATION MATRIX
              </SectionLabel>

              <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.03em] md:text-5xl">
                One material.
                <br />
                Multiple architectural
                <br />
                expressions.
              </h2>

              <p className="mt-7 max-w-[430px] text-[12px] leading-6 text-[#5d5951]">
                Each surface is evaluated not only as a finish, but as part
                of a larger architectural system. Format, edge condition,
                jointing and fabrication are considered from the beginning.
              </p>

              <Link
                to="/bespoke-fabrication"
                className="mt-8 inline-flex border border-[#24231f] px-6 py-4 text-[9px] font-semibold tracking-[0.13em] transition hover:bg-[#24231f] hover:text-white"
              >
                EXPLORE FABRICATION →
              </Link>

            </div>


            <div className="grid border-l border-[#d1ccc1] sm:grid-cols-2">

              {applications.map((item) => (
                <div
                  key={item.number}
                  className="border-b border-r border-[#d1ccc1] p-7 last:border-b-0 sm:nth-[3]:border-b-0"
                >

                  <div className="font-mono text-[9px] text-[#96501f]">
                    {item.number}
                  </div>

                  <h3 className="mt-7 font-serif text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[10px] leading-5 text-[#625f58]">
                    {item.text}
                  </p>

                  <div className="mt-8 h-[1px] w-8 bg-[#96501f]" />

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PORCELAIN VS QUARRIED BLOCK
      ===================================================== */}

      <section className="mx-auto max-w-[1450px] px-6 py-20 lg:px-10">

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">

          <div>

            <SectionLabel>
              MATERIAL SYSTEM
            </SectionLabel>

            <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.03em] md:text-5xl">
              Mineral porcelain
              <br />
              vs. quarried block.
            </h2>

            <p className="mt-7 max-w-[570px] text-[12px] leading-6 text-[#5d5951]">
              The archive pairs natural mineral references with engineered
              surfaces that reproduce architectural depth while offering
              predictable technical performance and repeatable fabrication.
            </p>

          </div>


          <div className="grid grid-cols-2 border border-[#d4cfc4]">

            <div className="border-r border-[#d4cfc4]">

              <div className="border-b border-[#d4cfc4] p-5">

                <div className="text-[8px] font-semibold tracking-[0.15em] text-[#96501f]">
                  ENGINEERED
                </div>

                <div className="mt-2 font-serif text-xl">
                  PORCELAIN
                </div>

              </div>

              {[
                "CONSISTENT FORMAT",
                "CONTROLLED VARIATION",
                "LOW ABSORPTION",
                "REPEATABLE SUPPLY",
              ].map((item) => (
                <div
                  key={item}
                  className="border-b border-[#d4cfc4] px-5 py-4 text-[9px] tracking-[0.07em] last:border-b-0"
                >
                  {item}
                </div>
              ))}

            </div>


            <div>

              <div className="border-b border-[#d4cfc4] p-5">

                <div className="text-[8px] font-semibold tracking-[0.15em] text-[#96501f]">
                  NATURAL
                </div>

                <div className="mt-2 font-serif text-xl">
                  QUARRIED BLOCK
                </div>

              </div>

              {[
                "UNIQUE VEINING",
                "NATURAL VARIATION",
                "STONE CHARACTER",
                "BLOCK DEPENDENCY",
              ].map((item) => (
                <div
                  key={item}
                  className="border-b border-[#d4cfc4] px-5 py-4 text-[9px] tracking-[0.07em] last:border-b-0"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURE IMAGE / EDITORIAL
      ===================================================== */}

      <section className="mx-auto max-w-[1450px] px-6 pb-20 lg:px-10">

        <div className="grid gap-0 lg:grid-cols-[1.25fr_0.75fr]">

          <ImagePlaceholder
            label="ARCHITECTURAL APPLICATION IMAGE"
            className="aspect-[1.45/1] min-h-[360px]"
          />

          <div className="flex flex-col justify-between border border-[#d5d0c5] bg-[#ece9e1] p-8 lg:p-10">

            <div>

              <div className="font-mono text-[9px] tracking-[0.15em] text-[#96501f]">
                ARCHIVE / 25—26
              </div>

              <h3 className="mt-8 font-serif text-3xl leading-[1.1]">
                Architecture begins
                <br />
                at the surface.
              </h3>

              <p className="mt-6 text-[11px] leading-6 text-[#625f58]">
                From slab selection to final joint, our material systems
                are developed to preserve architectural intent through
                every stage of specification and fabrication.
              </p>

            </div>

            <div className="mt-10 border-t border-[#d2cdc2] pt-5">

              <div className="text-[8px] uppercase tracking-[0.14em]">
                ATELIER SURFACES
              </div>

              <div className="mt-1 text-[8px] uppercase tracking-[0.14em] text-[#716d64]">
                ARCHITECTURAL MINERAL ARCHIVE
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          QUOTE
      ===================================================== */}

      <section className="border-y border-[#d8d3c8] bg-[#eeeae2]">

        <div className="mx-auto max-w-[1100px] px-6 py-20 text-center">

          <div className="mx-auto h-[1px] w-12 bg-[#96501f]" />

          <blockquote className="mt-8 font-serif text-2xl leading-[1.45] tracking-[-0.02em] md:text-3xl lg:text-4xl">
            “Material becomes architecture when the surface,
            <br className="hidden md:block" />
            fabrication and space are considered as one.”
          </blockquote>

          <div className="mt-7 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#6a665e]">
            ATELIER SURFACES / MATERIAL PRINCIPLE
          </div>

        </div>

      </section>


      {/* =====================================================
          SAMPLE BOX CTA
      ===================================================== */}

      <section className="bg-[#20201c] text-[#f5f2ea]">

        <div className="mx-auto max-w-[1450px] px-6 py-16 lg:px-10">

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">

            <div>

              <SectionLabel>
                SPECIFIER ACCESS
              </SectionLabel>

              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                ORDER CUSTOM ARCHITECT'S
                <br />
                MINERAL SPEC BOX
              </h2>

              <p className="mt-5 max-w-[600px] text-[11px] leading-6 text-[#bbb7ae]">
                Request a curated physical material set containing selected
                surfaces, finish references and technical specification
                information for your project.
              </p>

            </div>

            <div className="flex flex-wrap gap-3">

              <button className="border border-[#aaa59a] px-7 py-4 text-[9px] font-semibold tracking-[0.12em] transition hover:bg-[#f5f2ea] hover:text-[#20201c]">
                REQUEST SPEC BOX
              </button>

              <Link
                to="/trade-specifier"
                className="bg-[#96501f] px-7 py-4 text-[9px] font-semibold tracking-[0.12em] transition hover:bg-[#b7672d]"
              >
                SPECIFIER ACCESS →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#f5f2ea]">

        <div className="mx-auto grid max-w-[1450px] gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">

          <div>

            <div className="font-serif text-lg font-bold">
              ATELIER SURFACES
            </div>

            <p className="mt-3 max-w-[230px] text-[9px] leading-5 text-[#68645c]">
              Architectural surfaces and porcelain slabs developed for
              residential, hospitality and commercial interiors.
            </p>

          </div>


          <div>

            <div className="text-[8px] font-semibold tracking-[0.16em]">
              EXPLORE
            </div>

            <div className="mt-4 space-y-3 text-[9px]">

              <Link
                to="/surface-collections"
                className="block hover:text-[#96501f]"
              >
                Surface Collections
              </Link>

              <Link
                to="/slab-dossier"
                className="block hover:text-[#96501f]"
              >
                Slab Dossier
              </Link>

              <Link
                to="/bespoke-fabrication"
                className="block hover:text-[#96501f]"
              >
                Bespoke Fabrication
              </Link>

            </div>

          </div>


          <div>

            <div className="text-[8px] font-semibold tracking-[0.16em]">
              SPECIFICATION
            </div>

            <div className="mt-4 space-y-3 text-[9px]">

              <Link
                to="/trade-specifier"
                className="block hover:text-[#96501f]"
              >
                Trade & Specifier
              </Link>

              <div>Technical Assets</div>

              <div>Sample Box</div>

            </div>

          </div>


          <div>

            <div className="text-[8px] font-semibold tracking-[0.16em]">
              CONTACT
            </div>

            <div className="mt-4 text-[9px] leading-5 text-[#68645c]">
              GLOBAL ATELIER STUDIOS
              <br />
              ARCHITECTURAL MATERIALS
              <br />
              BY APPOINTMENT
            </div>

          </div>

        </div>


        <div className="border-t border-[#d8d3c8]">

          <div className="mx-auto flex max-w-[1450px] flex-col justify-between gap-3 px-6 py-5 text-[7px] uppercase tracking-[0.13em] text-[#77736b] md:flex-row lg:px-10">

            <span>
              © 2025/26 ATELIER SURFACES
            </span>

            <span>
              ARCHITECTURAL MINERAL ARCHIVE
            </span>

          </div>

        </div>

      </footer>

    </main>
  );
}