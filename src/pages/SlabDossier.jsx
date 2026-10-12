import { Link } from "react-router-dom";
import { useState } from "react";

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
         {/* ◉ 1:1 TEXTURE LOUPE ACTIVE  */ }
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
    const [lighting, setLighting] = useState("GALLERY NEUTRAL");
    const [jointWidth, setJointWidth] = useState("3 MM");
const [mortarTone, setMortarTone] = useState("WARM GREY");
  return (
    <main className="bg-[#f5f2ea] text-[#27251f]">
      {/* ARCHIVE BAR */}
      <div className="border-b border-black/10 bg-[#f0ede5] px-6 py-4 lg:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-3 md:flex-row md:items-center">
          <div className="font-serif text-[10px] uppercase tracking-[0.09em] text-black/60">
            ARCHIVE / PORCELAIN SLABS /{" "}
            <span className="font-small text-black">
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

              <h1 className="font-serif text-[48px] leading-[0.92] tracking-[-0.045em] md:text-[64px] lg:text-[55px]">
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

    {/* =========================================================
    MAIN MATERIAL AREA
    Desktop reference geometry:
    Left  = 669px
    Gap   = 98px
    Right = 367px
    ========================================================= */}

<section className="px-6 py-8 md:px-12 lg:py-12 min-[1280px]:px-0 min-[1280px]:ml-[6.67vw]">
  <div
    className="
      grid grid-cols-1
      gap-8
      md:gap-10
      min-[1024px]:grid-cols-[minmax(0,1fr)_minmax(330px,0.55fr)]
      min-[1280px]:grid-cols-[669px_367px]
      min-[1280px]:gap-[98px]
    "
  >

    {/* =====================================================
        LEFT COLUMN
        ===================================================== */}
    <div className="min-w-0">

      {/* MAIN SLAB IMAGE */}
      <div className="relative aspect-[669/404] w-full overflow-hidden">
        <img
          src="/images/slab-main.jpg"
          alt="Ceppo di Gré Breccia slab surface"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>


      {/* ===================================================
          AMBIENT LIGHTING TEMPERATURE SIMULATOR
          =================================================== */}
      <div
        className="
          mt-7
          border border-black/[0.05]
          bg-[#f0eee7]
          px-5 py-6
          sm:px-7 sm:py-7
          min-[1280px]:h-[140px]
          min-[1280px]:px-[29px]
          min-[1280px]:py-[28px]
        "
      >

        {/* HEADER */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-serif text-[10px] font-bold uppercase tracking-[0.20em] text-[#2d2b26]">
            AMBIENT LIGHTING TEMPERATURE SIMULATOR
          </div>

          <div className="font-serif text-[10px] font-semibold uppercase tracking-[0.12em] text-[#a45b34]">
            {lighting === "MORNING SUN"
              ? "5000K GALLERY DAYLIGHT"
              : lighting === "WARM LED"
              ? "2700K WARM LED"
              : "4000K GALLERY NEUTRAL"}
          </div>
        </div>


        {/* LIGHTING BUTTONS */}
        <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">

          <button
            type="button"
            onClick={() => setLighting("MORNING SUN")}
            className={`
              flex h-[53px] items-center justify-center
              border px-1
              text-center
              font-serif text-[7px]
              uppercase tracking-[0.02em]
              whitespace-nowrap
              transition-colors
              min-[1280px]:text-[9px]
              ${
                lighting === "MORNING SUN"
                  ? "border-black bg-black text-white"
                  : "border-black/[0.04] bg-[#e8e4dc] text-[#3f3c36] hover:bg-[#ddd9d0]"
              }
            `}
          >
            MORNING SUN (5000K)
          </button>


          <button
            type="button"
            onClick={() => setLighting("GALLERY NEUTRAL")}
            className={`
              flex h-[53px] items-center justify-center
              border px-1
              text-center
              font-serif text-[7px]
              uppercase tracking-[0.02em]
              whitespace-nowrap
              transition-colors
              min-[1280px]:text-[9px]
              ${
                lighting === "GALLERY NEUTRAL"
                  ? "border-black bg-black text-white"
                  : "border-black/[0.04] bg-[#e8e4dc] text-[#3f3c36] hover:bg-[#ddd9d0]"
              }
            `}
          >
            GALLERY NEUTRAL (4000K)
          </button>


          <button
            type="button"
            onClick={() => setLighting("WARM LED")}
            className={`
              flex h-[53px] items-center justify-center
              border px-1
              text-center
              font-serif text-[7px]
              uppercase tracking-[0.02em]
              whitespace-nowrap
              transition-colors
              min-[1280px]:text-[9px]
              ${
                lighting === "WARM LED"
                  ? "border-black bg-black text-white"
                  : "border-black/[0.04] bg-[#e8e4dc] text-[#3f3c36] hover:bg-[#ddd9d0]"
              }
            `}
          >
            WARM LED (2700K)
          </button>

        </div>
      </div>


      {/* ===================================================
          VISUAL REFERENCE STUDIES
          =================================================== */}
      <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">

        {/* 01 */}
        <div className="min-w-0 border border-black/[0.06] bg-white/40 p-2">
          <img
            src="/images/macro-loupe.jpg"
            alt="Macro loupe reference"
            className="aspect-[1.84/1] w-full object-cover"
          />

          <div className="px-2 pb-2 pt-3">
            <div className="font-serif text-[9px] font-bold uppercase tracking-[0.12em]">
              01. MACRO LOUPE
            </div>
          </div>
        </div>


        {/* 02 */}
        <div className="min-w-0 border border-black/[0.06] bg-white/40 p-2">
          <img
            src="/images/monolith.jpg"
            alt="Monolith slab reference"
            className="aspect-[1.84/1] w-full object-cover"
          />

          <div className="px-2 pb-2 pt-3">
            <div className="font-serif text-[9px] font-bold uppercase tracking-[0.12em]">
              02. MONOLITH 1600×3200
            </div>
          </div>
        </div>


        {/* 03 */}
        <div className="min-w-0 border border-black/[0.06] bg-white/40 p-2">
          <img
            src="/images/milan-application.jpg"
            alt="Milan application reference"
            className="aspect-[1.84/1] w-full object-cover"
          />

          <div className="px-2 pb-2 pt-3">
            <div className="font-serif text-[9px] font-bold uppercase tracking-[0.12em]">
              03. MILAN APPLICATION
            </div>
          </div>
        </div>

      </div>

    </div>


    {/* =====================================================
        RIGHT COLUMN
        ===================================================== */}
    <div className="min-w-0">

      {/* ===================================================
          NOMINAL SLAB FORMAT & THICKNESS
          =================================================== */}
      <section>
        <div className="font-serif text-[10px] font-bold uppercase tracking-[0.08em]">
          NOMINAL SLAB FORMAT & THICKNESS
        </div>


        <div className="mt-5 grid grid-cols-2 gap-2">

          {/* CARD 01 */}
          <button
            type="button"
            className="
              min-h-[155px]
              border border-black/[0.08]
              bg-[#ebe8e0]
              px-4 py-4
              text-left
            "
          >
            <div className="font-serif text-[16px] font-bold leading-[1.05]">
              1600 × 3200 MM
            </div>

            <div className="mt-3 font-serif text-[11px] leading-5 text-black/60">
              12mm Countertop &amp;
              <br />
              Cladding
            </div>

            <div className="mt-3 font-serif text-[9px] font-semibold uppercase leading-5 tracking-[0.10em] text-[#a45b34]">
              AVAILABLE NOW (42
              <br />
              SLABS)
            </div>
          </button>


          {/* CARD 02 */}
          <button
            type="button"
            className="
              min-h-[155px]
              border border-black/[0.08]
              bg-[#f1eee7]
              px-4 py-4
              text-left
            "
          >
            <div className="font-serif text-[16px] font-bold leading-[1.05]">
              1200 × 2780 MM
            </div>

            <div className="mt-3 font-serif text-[11px] leading-5 text-black/60">
              6mm Ultra-Slim Wall
              <br />
              Cladding
            </div>

            <div className="mt-3 font-serif text-[9px] uppercase tracking-[0.10em] text-black/65">
              LEAD TIME: 14 DAYS
            </div>
          </button>


          {/* CARD 03 */}
          <button
            type="button"
            className="
              min-h-[155px]
              border border-black/[0.08]
              bg-[#f1eee7]
              px-4 py-4
              text-left
            "
          >
            <div className="font-serif text-[16px] font-bold leading-[1.05]">
              1600 × 3200 MM
            </div>

            <div className="mt-3 font-serif text-[11px] leading-5 text-black/60">
              20mm Monolithic Paver /
              <br />
              Island
            </div>

            <div className="mt-3 font-serif text-[9px] uppercase leading-5 tracking-[0.10em] text-black/65">
              IN MILAN ARCHIVE (18
              <br />
              SLABS)
            </div>
          </button>


          {/* CARD 04 */}
          <button
            type="button"
            className="
              min-h-[155px]
              border border-black/[0.08]
              bg-[#f1eee7]
              px-4 py-4
              text-left
            "
          >
            <div className="font-serif text-[16px] font-bold leading-[1.05]">
              BESPOKE CUT-
              <br />
              TO-SIZE
            </div>

            <div className="mt-3 font-serif text-[11px] leading-5 text-black/60">
              5-Axis Waterjet
              <br />
              Architectural
            </div>

            <div className="mt-3 font-serif text-[9px] font-semibold uppercase tracking-[0.10em] text-[#a45b34]">
              STUDIO CONSULTATION
            </div>
          </button>

        </div>
      </section>


      {/* ===================================================
          BESPOKE EDGE PROFILING
          =================================================== */}
      <section className="mt-7">

        <div className="flex items-center justify-between">
          <div className="font-serif text-[10px] font-bold uppercase tracking-[0.08em]">
            BESPOKE EDGE PROFILING
          </div>

          <div className="font-serif text-[10px] uppercase tracking-[0.08em] text-black/65">
            CNC PRE-FABRICATION
          </div>
        </div>


        <div className="mt-3 grid max-w-[345px] grid-cols-3 gap-2">

          {/* RECTIFIED */}
          <button
            type="button"
            className="
              flex
              min-h-[157px]
              flex-col
              items-start
              border border-black/[0.08]
              bg-[#ebe8e0]
              px-4 py-4
              text-left
            "
          >
            <div className="mb-3 flex h-[22px] items-center">
              <div className="h-[16px] w-[20px] border-[2px] border-black" />
            </div>

            <div className="font-serif text-[9px] font-bold uppercase leading-4 tracking-[0.08em]">
              RECTIFIED
              <br />
              90°
            </div>

            <div className="mt-3 font-serif text-[9px] leading-5 text-black/55">
              Sharpened 1mm
              <br />
              Arris
            </div>
          </button>


          {/* MICRO-BEVEL */}
          <button
            type="button"
            className="
              flex
              min-h-[157px]
              flex-col
              items-start
              border border-black/[0.08]
              bg-[#f1eee7]
              px-4 py-4
              text-left
            "
          >
            <div className="mb-3 flex h-[22px] items-center">
              <div className="h-[16px] w-[24px] rounded-[2px] border-[2px] border-black" />
            </div>

            <div className="font-serif text-[9px] font-bold uppercase leading-4 tracking-[0.08em]">
              MICRO-
              <br />
              BEVEL
            </div>

            <div className="mt-3 font-serif text-[9px] leading-5 text-black/55">
              Chamfer 2mm ×
              <br />
              45°
            </div>
          </button>


          {/* SHARK-NOSE */}
          <button
            type="button"
            className="
              flex
              min-h-[157px]
              flex-col
              items-start
              border border-black/[0.08]
              bg-[#f1eee7]
              px-4 py-4
              text-left
            "
          >
            <div className="mb-3 flex h-[22px] items-center">
              <div
                className="
                  h-0 w-0
                  border-b-[16px]
                  border-l-[7px]
                  border-r-0
                  border-solid
                  border-b-black
                  border-l-transparent
                "
              />
            </div>

            <div className="font-serif text-[9px] font-bold uppercase leading-4 tracking-[0.08em]">
              SHARK-NOSE
            </div>

            <div className="mt-3 font-serif text-[9px] leading-5 text-black/55">
              30° Undercut
              <br />
              Floating
            </div>
          </button>

        </div>
      </section>


      {/* ===================================================
          COMPLEMENTARY ARCHITECTURAL SAMPLE
          =================================================== */}
      <section className="mt-8 border border-black/[0.05] bg-[#ebe8e0] px-5 py-5">

        <div className="flex items-center gap-2">
          <span className="text-[#a45b34]">♢</span>

          <div className="font-serif text-[10px] font-bold uppercase tracking-[0.10em]">
            COMPLEMENTARY ARCHITECTURAL SAMPLE KIT
          </div>
        </div>

        <p className="mt-3 max-w-[300px] font-serif text-[10px] leading-5 text-black/55">
          Includes Calibrated 150 X 150 MM tactile field tile, technical dpssoer booklet, and cpmparative grout 
          sticls, Dispatched express via DHL from Clerkenwell Hub.
        </p>

      </section>


      {/* ===================================================
          SURFACE FINISH
          Kept below the reference-visible area so the
          desktop screenshot matches the Figma hierarchy.
          =================================================== */}
      <section className="mt-8 border-t border-black/10 pt-7">

        <div className="font-serif text-[10px] font-bold uppercase tracking-[0.08em]">
          SURFACE RIBA / AIA NUMBER    PROJECT DESTINATION 
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2">

          <button
            type="button"
            className="
              border border-[#a45b34]
              bg-[#f5f2ea]
              px-4 py-4
              text-left
            "
          >
            <div className="font-serif text-sm font-bold">
              RIBA-882910-LON
            </div>

            <div className="mt-1 text-[8px] uppercase tracking-[0.15em] text-black/40">
            
            </div>
          </button>

          <button
            type="button"
            className="
              border border-black/15
              bg-[#f5f2ea]
              px-4 py-4
              text-left
            "
          >
            <div className="font-serif text-sm font-bold">
              Kensington Residence PH
            </div>

            
          </button>

        </div>


        <button
          type="button"
          className="
            mt-8
            w-full
            bg-[#25241f]
            px-5 py-4
            font-serif text-[10px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-white
            transition
            hover:bg-[#a45b34]
          "
        >
          ADD TO SAMPLE BOX
        </button>

      </section>

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