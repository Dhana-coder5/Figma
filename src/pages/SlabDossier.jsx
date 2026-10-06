import { Link } from "react-router-dom";

function ImagePlaceholder({ className = "" }) {
  return (
    <div
      className={`relative overflow-hidden bg-[#b8b1a5] ${className}`}
      style={{
        backgroundImage: `
          radial-gradient(circle at 12% 28%, rgba(75,70,63,.45) 0 3%, transparent 3.5%),
          radial-gradient(circle at 22% 65%, rgba(230,224,211,.7) 0 4%, transparent 4.5%),
          radial-gradient(circle at 35% 35%, rgba(85,80,72,.4) 0 5%, transparent 5.5%),
          radial-gradient(circle at 47% 72%, rgba(225,218,203,.7) 0 3%, transparent 3.5%),
          radial-gradient(circle at 62% 42%, rgba(82,77,70,.42) 0 4%, transparent 4.5%),
          radial-gradient(circle at 76% 70%, rgba(220,214,201,.65) 0 5%, transparent 5.5%),
          radial-gradient(circle at 88% 30%, rgba(72,68,61,.4) 0 4%, transparent 4.5%),
          radial-gradient(circle at 54% 18%, rgba(230,223,210,.65) 0 3%, transparent 3.5%),
          linear-gradient(120deg, #aaa397, #c8c0b2 45%, #a69e91)
        `,
      }}
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[15%] top-[10%] h-[2px] w-[35%] rotate-[18deg] bg-white" />
        <div className="absolute left-[48%] top-[65%] h-[2px] w-[28%] rotate-[-14deg] bg-black/30" />
        <div className="absolute left-[5%] top-[55%] h-[1px] w-[45%] rotate-[7deg] bg-white" />
      </div>

      <div className="absolute left-4 top-4 border border-black/10 bg-[#f7f3eb]/90 px-4 py-2">
        <span className="text-[9px] font-semibold tracking-[0.16em]">
          ◉ 1:1 TEXTURE LOUPE ACTIVE
        </span>
      </div>

      <div className="absolute bottom-4 right-5 text-[9px] tracking-[0.15em] text-white/60">
        3 / 5
      </div>
    </div>
  );
}

function SpecRow({ label, children }) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-black/10 py-3 last:border-b-0">
      <span className="font-serif text-[10px] uppercase tracking-[0.08em] text-black/55">
        {label}
      </span>

      <span className="text-right font-serif text-[10px] font-bold uppercase tracking-[0.05em]">
        {children}
      </span>
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div className="border-r border-black/10 px-5 py-5 first:pl-0 last:border-r-0">
      <div className="font-serif text-2xl tracking-[-0.03em]">
        {value}
      </div>

      <div className="mt-2 text-[8px] uppercase tracking-[0.18em] text-black/45">
        {label}
      </div>
    </div>
  );
}

export default function SlabDossier() {
  return (
    <main className="bg-[#f5f2ea] text-[#27251f]">
      {/* ARCHIVE BAR */}
      <div className="border-b border-black/10 bg-[#f0ede5] px-6 py-4 lg:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-3 md:flex-row md:items-center">
          <div className="font-serif text-[10px] uppercase tracking-[0.09em] text-black/60">
            ARCHIVE / PORCELAIN SLABS /{" "}
            <span className="font-bold text-black">
              CEPPO DI GRÉ BRECCIA
            </span>{" "}
            /{" "}
            <span className="bg-black/[0.025] px-2 py-1">
              REF: AT-CPG-902
            </span>
          </div>

          <div className="font-serif text-[9px] font-bold uppercase tracking-[0.12em]">
            <span className="mr-2 text-[#a35b30]">●</span>
            IN STOCK: CLERKENWELL & MILAN HUBS (74 SLABS)
          </div>
        </div>
      </div>

      {/* TITLE AREA */}
      <section className="border-b border-black/10 px-6 py-12 md:px-12 md:py-16 lg:px-[7%] lg:py-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_365px] lg:items-start">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#b26a42]" />

                <span className="font-serif text-[10px] font-bold uppercase tracking-[0.3em] text-[#9d552f]">
                  Architectural Mineral Series 04
                </span>
              </div>

              <h1 className="font-serif text-[48px] leading-[0.92] tracking-[-0.045em] md:text-[64px] lg:text-[66px]">
                CEPPO DI GRÉ BRECCIA
              </h1>

              <p className="mt-6 max-w-[850px] font-sans text-[15px] leading-7 text-black/65 md:text-[17px]">
                A homage to Lombardy&apos;s iconic clastic sedimentary rock.
                Engineered with sintered volcanic aggregates and fine mineral
                clays to recreate the tactile pebble-matrix of classic Italian
                architecture with zero maintenance porosity.
              </p>
            </div>

            {/* SPEC CARD */}
            <div className="border border-black/[0.07] bg-[#f0eee7] p-6 shadow-[0_2px_10px_rgba(0,0,0,.025)]">
              <SpecRow label="Geological Lineage">
                Lombard Breccia
              </SpecRow>

              <SpecRow label="Fabrication Method">
                Sintered Continua+
              </SpecRow>

              <SpecRow label="Surface Tactility">
                Honed Matte (Satinato)
              </SpecRow>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN MATERIAL AREA */}
      <section className="px-6 py-12 md:px-12 lg:px-[7%] lg:py-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[1.45fr_0.9fr]">
            {/* IMAGE */}
            <div>
              <ImagePlaceholder className="aspect-[1.48/1] w-full" />

              <div className="mt-4 flex justify-between font-serif text-[9px] uppercase tracking-[0.15em] text-black/40">
                <span>AT-CPG-902 / SURFACE STUDY</span>
                <span>ORIGINAL SCALE / 1:1</span>
              </div>
            </div>

            {/* CONFIGURATOR */}
            <div className="border border-black/[0.07] bg-white/60 p-8 md:p-10">
              <div className="mb-9">
                <div className="font-serif text-[10px] font-bold uppercase tracking-[0.27em] text-[#a45b34]">
                  Project Configurator
                </div>

                <div className="mt-2 font-serif text-[10px] uppercase tracking-[0.08em] text-black/60">
                  Commercial & Residential
                  <br />
                  High-Traffic
                </div>
              </div>

              <div className="border-t border-black/10 pt-7">
                <div className="font-serif text-[10px] font-bold uppercase tracking-[0.08em]">
                  Nominal Slab Format & Thickness
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="border border-black/20 bg-[#f5f2ea] px-4 py-4 text-left"
                  >
                    <div className="font-serif text-sm font-bold">
                      1600 × 3200
                    </div>
                    <div className="mt-1 text-[8px] uppercase tracking-[0.15em] text-black/40">
                      6 MM
                    </div>
                  </button>

                  <button
                    type="button"
                    className="border border-black/20 bg-[#f5f2ea] px-4 py-4 text-left"
                  >
                    <div className="font-serif text-sm font-bold">
                      1600 × 3200
                    </div>
                    <div className="mt-1 text-[8px] uppercase tracking-[0.15em] text-black/40">
                      12 MM
                    </div>
                  </button>
                </div>
              </div>

              <div className="mt-8 border-t border-black/10 pt-7">
                <div className="font-serif text-[10px] font-bold uppercase tracking-[0.08em]">
                  Surface Finish
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="border border-[#a45b34] bg-[#f5f2ea] px-4 py-4 text-left"
                  >
                    <div className="font-serif text-sm font-bold">
                      Satinato
                    </div>
                    <div className="mt-1 text-[8px] uppercase tracking-[0.15em] text-black/40">
                      HONED MATTE
                    </div>
                  </button>

                  <button
                    type="button"
                    className="border border-black/15 px-4 py-4 text-left"
                  >
                    <div className="font-serif text-sm font-bold">
                      Naturale
                    </div>
                    <div className="mt-1 text-[8px] uppercase tracking-[0.15em] text-black/40">
                      NATURAL
                    </div>
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="mt-8 w-full bg-[#25241f] px-5 py-4 font-serif text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#a45b34]"
              >
                ADD TO SAMPLE BOX
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL STRIP */}
      <section className="border-y border-black/10 bg-[#ebe7dd] px-6 md:px-12 lg:px-[7%]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
          <Metric value="1600×3200" label="Nominal Format / MM" />
          <Metric value="6 / 12" label="Thickness / MM" />
          <Metric value="<0.05%" label="Water Absorption" />
          <Metric value="R11" label="Slip Resistance" />
        </div>
      </section>

      {/* MATERIAL DESCRIPTION */}
      <section className="px-6 py-20 md:px-12 lg:px-[7%] lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="font-serif text-[9px] font-bold uppercase tracking-[0.28em] text-[#9e5934]">
              Material Intelligence
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl font-serif text-[38px] leading-[1.02] tracking-[-0.035em] md:text-[52px]">
              Geological character,
              <br />
              translated for architecture.
            </h2>

            <p className="mt-7 max-w-3xl font-sans text-[14px] leading-7 text-black/60">
              Ceppo di Gré Breccia interprets the irregular pebble matrix of
              historic Lombard stone through a controlled engineered surface.
              Mineral variation remains visible across the slab, creating a
              tactile field rather than a repetitive printed pattern.
            </p>

            <div className="mt-10 grid border-t border-black/10 sm:grid-cols-3">
              <div className="border-b border-black/10 py-6 sm:border-r sm:pr-6">
                <div className="font-serif text-[10px] uppercase tracking-[0.16em] text-black/40">
                  Character
                </div>
                <div className="mt-3 font-serif text-xl">
                  Clastic
                </div>
              </div>

              <div className="border-b border-black/10 py-6 sm:px-6 sm:border-r">
                <div className="font-serif text-[10px] uppercase tracking-[0.16em] text-black/40">
                  Palette
                </div>
                <div className="mt-3 font-serif text-xl">
                  Warm Grey
                </div>
              </div>

              <div className="border-b border-black/10 py-6 sm:pl-6">
                <div className="font-serif text-[10px] uppercase tracking-[0.16em] text-black/40">
                  Tactility
                </div>
                <div className="mt-3 font-serif text-xl">
                  Honed Matte
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-[#272621] px-6 py-20 text-[#f3f0e8] md:px-12 lg:px-[7%] lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <div className="font-serif text-[9px] font-bold uppercase tracking-[0.28em] text-[#c8794c]">
                Architectural Application
              </div>

              <h2 className="mt-5 font-serif text-[45px] leading-[0.95] tracking-[-0.04em] md:text-[58px]">
                Specified
                <br />
                for space.
              </h2>
            </div>

            <div className="grid border-t border-white/15 md:grid-cols-2">
              {[
                ["01", "Flooring", "High-traffic interior environments"],
                ["02", "Wall Cladding", "Continuous architectural surfaces"],
                ["03", "Countertops", "Residential and hospitality worktops"],
                ["04", "Furniture", "Tables and integrated elements"],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="border-b border-white/10 py-7 md:p-8 md:nth-[odd]:border-r md:nth-[odd]:pl-0"
                >
                  <div className="text-[9px] tracking-[0.2em] text-[#c8794c]">
                    {number}
                  </div>

                  <h3 className="mt-8 font-serif text-2xl">{title}</h3>

                  <p className="mt-3 text-xs leading-6 text-white/45">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL DATA */}
      <section className="px-6 py-20 md:px-12 lg:px-[7%] lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="font-serif text-[9px] font-bold uppercase tracking-[0.28em] text-[#9e5934]">
              Technical Registry
            </div>

            <h2 className="mt-4 font-serif text-4xl tracking-[-0.03em] md:text-5xl">
              Specification data
            </h2>
          </div>

          <div className="grid border-t border-black/10 md:grid-cols-2">
            {[
              ["Material Family", "Porcelain / Mineral Composite"],
              ["Series", "Architectural Mineral Series 04"],
              ["Reference", "AT-CPG-902"],
              ["Geological Lineage", "Lombard Breccia"],
              ["Fabrication Method", "Sintered Continua+"],
              ["Surface", "Honed Matte / Satinato"],
              ["Water Absorption", "< 0.05%"],
              ["Slip Resistance", "R11 / 45+"],
              ["Frost Resistance", "100%"],
              ["UV Stability", "Suitable"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[1fr_1fr] gap-5 border-b border-black/10 py-5"
              >
                <span className="font-serif text-[9px] uppercase tracking-[0.16em] text-black/40">
                  {label}
                </span>

                <span className="font-serif text-[11px] font-bold uppercase">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-black/10 bg-[#b26743] px-6 py-20 text-white md:px-12 lg:px-[7%] lg:py-24">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <div className="font-serif text-[9px] font-bold uppercase tracking-[0.28em] text-white/60">
              Project Specification
            </div>

            <h2 className="mt-5 max-w-3xl font-serif text-[46px] leading-[0.95] tracking-[-0.04em] md:text-[62px]">
              Bring Ceppo di Gré
              <br />
              into your project.
            </h2>
          </div>

          <Link
            to="/trade-specifier"
            className="inline-flex w-fit items-center gap-6 border border-white/40 px-7 py-5 font-serif text-[10px] font-bold uppercase tracking-[0.2em] transition hover:bg-white hover:text-[#b26743]"
          >
            REQUEST SPECIFICATION
            <span>→</span>
          </Link>
        </div>
      </section>

     
      
    </main>
  );
}