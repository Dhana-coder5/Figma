import { useState } from "react";

const materials = [
  {
    code: "CP-902",
    name: "CEPPO DI GRÉ",
    size: "12mm RECTIFIED",
    slip: "R11 • SLIP B",
    finish: "HONED FLAMED",
    type: "SEDIMENTARY & CEPPO",
    tone: "ceppo",
  },
  {
    code: "ST-408",
    name: "STATUARIO SATIN",
    size: "20mm SOLID",
    slip: "R9 • MATTE",
    finish: "VEIN-MATCHED",
    type: "METAMORPHIC MARBLE",
    tone: "marble",
  },
  {
    code: "TR-110",
    name: "NAVONA NATURALE",
    size: "12mm RECTIFIED",
    slip: "R10 • OPEN PORE",
    finish: "CROSS-CUT",
    type: "SEDIMENTARY & CEPPO",
    tone: "travertine",
  },
  {
    code: "BS-705",
    name: "BASALT FLUTED",
    size: "14mm SOLID",
    slip: "R12 • WET AREA",
    finish: "TACTILE GROOVE",
    type: "RAW COTTO & BASALT",
    tone: "basalt",
  },
  {
    code: "CT-330",
    name: "TUSCAN COTTO",
    size: "16mm ARTISANAL",
    slip: "R11 • NATURAL",
    finish: "WOOD FIRED",
    type: "RAW COTTO & BASALT",
    tone: "cotto",
  },
  {
    code: "GC-504",
    name: "GRIGIO CARNICO",
    size: "12mm RECTIFIED",
    slip: "R10 • HONED",
    finish: "CARBON MATRIX",
    type: "METAMORPHIC MARBLE",
    tone: "grigio",
  },
];

const studios = [
  {
    city: "MILANO BRERA",
    title: "VIA SOLFERINO 18, BRERA",
    eyebrow: "HEADQUARTERS & SLAB VAULT",
    description:
      "Full 3200×1600mm continuous bookmatched slabs, dedicated material science lab, and private architect specification suites.",
    advisor: "Matteo Castelli, Arch.",
    hours: "MON - FRI: 09:00 - 18:30",
    action: "BOOK PRIVATE MILAN CONSULTATION",
    image: "studio-milan",
  },
  {
    city: "LONDON SPECIFIER LAB",
    title: "42 CLERKENWELL CLOSE, EC1R",
    eyebrow: "UK & SCANDINAVIA DESK",
    description:
      "Tactile surface library for commercial developers, acoustic-rated ceramic backing consultation, and physical sample pickup bar.",
    advisor: "Harriet Sterling, RIBA",
    hours: "MON - FRI: 08:30 - 18:00",
    action: "BOOK CLERKENWELL APPOINTMENT",
    image: "studio-london",
  },
  {
    city: "NEW YORK GALLERY",
    title: "88 SPRING STREET, SOHO",
    eyebrow: "AMERICAS CONSULTATION",
    description:
      "LEED v4.1 credit guidance, bespoke facade cladding sub-structure assemblies, and physical mock-up staging space.",
    advisor: "Julian Rhodes, AIA",
    hours: "MON - SAT: 10:00 - 19:00",
    action: "BOOK SOHO GALLERY SESSION",
    image: "studio-newyork",
  },
];

function SectionLabel({ children }) {
  return (
    <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-[#9a4e16]">
      <span className="h-2 w-2 bg-[#9a4e16]" />
      <span>{children}</span>
    </div>
  );
}

function ImagePlaceholder({ variant = "stone", className = "" }) {
  const backgrounds = {
    ceppo:
      "radial-gradient(circle at 20% 30%, #8d8b82 0 5%, transparent 6%), radial-gradient(circle at 65% 60%, #6e6d66 0 7%, transparent 8%), linear-gradient(135deg,#b8b5aa,#74736d)",
    marble:
      "linear-gradient(125deg, transparent 35%, rgba(65,65,62,.75) 36%, transparent 39%), linear-gradient(35deg, transparent 45%, rgba(145,103,68,.65) 46%, transparent 50%), linear-gradient(135deg,#eee7da,#c9c0b0)",
    travertine:
      "repeating-linear-gradient(7deg, rgba(120,91,62,.18) 0 3px, transparent 3px 18px), linear-gradient(135deg,#d9c5a5,#bda17e)",
    basalt:
      "repeating-linear-gradient(90deg,#171716 0 9px,#292825 9px 16px,#11110f 16px 23px)",
    cotto:
      "repeating-linear-gradient(25deg,rgba(90,45,20,.22) 0 2px,transparent 2px 14px),linear-gradient(135deg,#a65f35,#75401f)",
    grigio:
      "linear-gradient(140deg,transparent 45%,rgba(225,220,207,.8) 46%,transparent 49%),linear-gradient(25deg,transparent 35%,rgba(245,241,232,.55) 36%,transparent 38%),linear-gradient(135deg,#343432,#555450)",
    "studio-milan":
      "linear-gradient(135deg,#d9d4c8 0%,#a69c8a 35%,#ded8cc 36%,#81796d 65%,#d7d1c5 66%)",
    "studio-london":
      "linear-gradient(145deg,#b9aa92 0%,#756654 40%,#c9baa4 41%,#66584b 75%,#a99982 76%)",
    "studio-newyork":
      "linear-gradient(135deg,#d8d2c6 0%,#958b7b 35%,#e1dbcf 36%,#756b5d 70%,#c6bcac 71%)",
    stone:
      "linear-gradient(135deg,#d6d0c3,#8e897e 50%,#c4bdae)",
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: backgrounds[variant] || backgrounds.stone }}
    >
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,white_0,transparent_25%),radial-gradient(circle_at_80%_70%,black_0,transparent_30%)]" />
    </div>
  );
}

function MaterialCard({ material, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group w-full border bg-white text-left transition-all ${
        selected
          ? "border-black shadow-[0_0_0_1px_#111]"
          : "border-transparent hover:border-[#a8a49b]"
      }`}
    >
      <div className="relative p-4">
        <ImagePlaceholder
          variant={material.tone}
          className="h-[235px] w-full"
        />

        {selected && (
          <div className="absolute right-6 top-6 bg-black px-3 py-2 text-[10px] font-semibold tracking-[0.12em] text-white">
            IN BOX
          </div>
        )}

        <div className="mt-4 flex items-center justify-between text-[11px]">
          <span className="font-semibold text-[#9a4e16]">
            {material.code}
          </span>
          <span className="tracking-[0.05em] text-[#55534e]">
            {material.size}
          </span>
        </div>

        <h3 className="mt-2 font-serif text-[22px] leading-tight text-[#20201d]">
          {material.name}
        </h3>

        <div className="mt-3 flex justify-between bg-[#efede7] px-2 py-2 text-[10px] tracking-[0.04em]">
          <span>{material.slip}</span>
          <strong>{material.finish}</strong>
        </div>
      </div>
    </button>
  );
}

function Field({ label, placeholder, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-[10px] font-bold tracking-[0.08em] text-[#33312e]">
        {label}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border border-[#dedbd2] bg-[#f6f3ed] px-4 py-4 text-sm text-[#292824] outline-none placeholder:text-[#9ba3b3] focus:border-[#9a4e16]"
      />
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-[#f6f3eb] px-6 py-16 md:px-[7%]">
      <div className="grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="font-serif text-xl font-bold">GLOBAL STUDIOS</h3>
          <p className="mt-4 text-sm leading-6 text-[#55534e]">
            Architectural physical inspection libraries and technical
            consultation suites.
          </p>

          <div className="mt-4 border-l border-[#c9c5bc] pl-3 text-xs leading-6">
            <p>MILAN ATELIER</p>
            <p>Via Solferino 18, Brera</p>
            <p className="mt-2">LONDON SPEC LAB</p>
            <p>Clerkenwell Road 92, EC1</p>
            <p className="mt-2">NEW YORK GALLERY</p>
            <p>Greene Street, SoHo</p>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl font-bold">
            SUSTAINABILITY & EPD
          </h3>

          <p className="mt-4 text-sm leading-6 text-[#55534e]">
            Full lifecycle declarations and green building qualification
            standards.
          </p>

          <div className="mt-4 text-xs">
            {[
              ["EPD Certified Life-Cycle", "ISO 14025"],
              ["LEED v4.1 Credits", "EQ / MR"],
              ["Recycled Content Matrix", "Min. 42%"],
              ["Zero VOC Emissions", "A+ Rating"],
            ].map(([a, b]) => (
              <div
                key={a}
                className="flex justify-between border-b border-[#dedbd2] py-2"
              >
                <span>{a}</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl font-bold">DIGITAL BIM / CAD</h3>

          <p className="mt-4 text-sm leading-6 text-[#55534e]">
            High-definition continuous surface texture maps, seamless normals,
            and technical assets.
          </p>

          <div className="mt-4 space-y-2">
            {[
              "REVIT PARAMETRIC ASSETS",
              "ARCHICAD MATERIAL PACK",
              "8K SEAMLESS TEXTURES",
            ].map((item) => (
              <button
                key={item}
                className="flex w-full items-center justify-between border border-[#dedbd2] bg-white px-4 py-3 text-[10px] font-bold tracking-[0.1em]"
              >
                <span>{item}</span>
                <span>↓</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl font-bold">SPECIFIER DISPATCH</h3>

          <p className="mt-4 text-sm leading-6 text-[#55534e]">
            Curated quarterly architectural dispatches on mineral extraction,
            ceramic technology, and large-format engineering.
          </p>

          <label className="mt-4 block text-[10px] font-bold tracking-[0.1em]">
            ARCHITECTURAL PRACTICE EMAIL
          </label>

          <input
            type="email"
            placeholder="name@architects-studio.com"
            className="mt-2 w-full border border-[#cbc7be] bg-white px-4 py-3 text-sm outline-none"
          />

          <button className="mt-1 w-full bg-black px-4 py-3 text-[10px] font-bold tracking-[0.1em] text-white">
            SUBSCRIBE SPECIFIER DISPATCH
          </button>
        </div>
      </div>

      <div className="mt-14 flex flex-col justify-between gap-4 border-t border-[#dedbd2] pt-5 text-[10px] tracking-[0.08em] text-[#55534e] md:flex-row">
        <span>
          © 2025 ATELIER SURFACES S.P.A. ARCHITECTURAL PORCELAIN & STONE SLABS.
          ALL RIGHTS RESERVED.
        </span>

        <div className="flex flex-wrap gap-5">
          <span>MATERIAL SAFETY (MSDS)</span>
          <span>TERMS OF SPECIFICATION</span>
          <span>PRIVACY MATRIX</span>
        </div>
      </div>
    </footer>
  );
}

export default function TradeSpecifier() {
  const [selected, setSelected] = useState(["CP-902", "ST-408"]);

  const toggleMaterial = (code) => {
    setSelected((current) => {
      if (current.includes(code)) {
        return current.filter((item) => item !== code);
      }

      if (current.length >= 5) {
        return current;
      }

      return [...current, code];
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f5ee] text-[#24231f]">
      {/* PAGE HEADER */}
      <section className="border-b border-[#dedbd2] px-6 pb-12 pt-16 md:px-[7%] md:pt-24">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-[820px]">
            <SectionLabel>
              ARCHITECTURAL TRADE DESK // SPECIFIER CURATION
            </SectionLabel>

            <h1 className="font-serif text-[42px] leading-[0.98] tracking-[-0.03em] md:text-[62px]">
              PHYSICAL MATERIAL DOSSIER & CUSTOM CURATION BOX
            </h1>

            <p className="mt-6 max-w-[820px] text-[16px] leading-7 text-[#55534e] md:text-[18px]">
              Tactile 150×150mm & 300×150mm rectified specimen slabs dispatched
              via priority overnight courier to accredited RIBA, AIA, and BIID
              studios worldwide. Hand-finished with raw geological calibration
              marks.
            </p>
          </div>

          <div className="grid min-w-[360px] grid-cols-2 border border-[#dedbd2] bg-white">
            <div className="p-5">
              <p className="text-[10px] font-bold tracking-[0.1em]">
                BATCH DISPATCH
                <br />
                STATUS
              </p>
              <p className="mt-3 font-serif text-xl font-bold">
                TODAY
                <br />
                16:30 CET
              </p>
            </div>

            <div className="border-l border-[#dedbd2] p-5">
              <p className="text-[10px] font-bold tracking-[0.1em]">
                VERIFIED SPECIFIERS
              </p>
              <p className="mt-5 font-serif text-xl font-bold text-[#9a4e16]">
                COMPLIMENTARY
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIMEN SELECTOR */}
      <section className="px-6 py-14 md:px-[7%] md:py-20">
        <div className="grid gap-10 xl:grid-cols-[1.45fr_.9fr]">
          <div>
            <div className="flex flex-col justify-between gap-4 border-b border-[#dedbd2] pb-5 md:flex-row md:items-end">
              <div>
                <p className="text-[10px] font-bold tracking-[0.12em]">
                  STEP 01 / SPECIMEN MATRIX
                </p>

                <h2 className="mt-3 font-serif text-3xl md:text-[36px]">
                  SELECT HIGH-PRECISION SLABS
                </h2>

                <p className="mt-2 max-w-[700px] text-sm leading-6 text-[#55534e]">
                  Choose up to 5 architectural grades. Each specimen contains
                  laser-etched nominal density, slip classification, and quarry
                  batch origin.
                </p>
              </div>

              <div className="whitespace-nowrap text-[11px] font-bold tracking-[0.1em] text-[#9a4e16]">
                SELECTED: {selected.length} OF 5 SLOTS
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "ALL MINERALS (8)",
                "SEDIMENTARY & CEPPO",
                "METAMORPHIC MARBLE",
                "RAW COTTO & BASALT",
              ].map((filter, index) => (
                <button
                  key={filter}
                  className={`px-4 py-2 text-[10px] font-bold tracking-[0.08em] ${
                    index === 0
                      ? "bg-black text-white"
                      : "bg-[#ebe8e1] text-[#292824]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {materials.map((material) => (
                <MaterialCard
                  key={material.code}
                  material={material}
                  selected={selected.includes(material.code)}
                  onSelect={() => toggleMaterial(material.code)}
                />
              ))}
            </div>
          </div>

          {/* BOX PREVIEW */}
          <aside className="h-fit border border-[#dedbd2] bg-[#f6f3eb] p-7 xl:sticky xl:top-8">
            <div className="flex items-start justify-between border-b border-[#d7d3ca] pb-5">
              <div>
                <p className="text-[10px] font-bold tracking-[0.12em]">
                  CURATION TRAY
                </p>

                <h2 className="mt-1 font-serif text-2xl font-bold">
                  MONOLITHIC SPECIMEN BOX
                </h2>
              </div>

              <div className="bg-black px-3 py-3 text-[10px] font-bold text-white">
                BOX NO. AT-2025-
                <br />
                X
              </div>
            </div>

            <div className="mt-5 bg-[#302f2b] p-5 text-white">
              <div className="flex justify-between text-[9px] tracking-[0.12em]">
                <span>ATELIER SURFACES // MILANO</span>
                <span>CUSTOM LINEN FOAM TRAY</span>
              </div>

              <div className="mt-8 grid grid-cols-5 gap-2">
                {materials.slice(0, 5).map((material) => {
                  const active = selected.includes(material.code);

                  return (
                    <div
                      key={material.code}
                      className={`flex aspect-[0.75] flex-col justify-end border p-1 ${
                        active
                          ? "border-white bg-[#dedbd2]"
                          : "border-[#47453f] bg-[#292824]"
                      }`}
                    >
                      {active ? (
                        <span className="bg-white px-1 py-2 text-center text-[7px] text-black">
                          {material.name.split(" ")[0]}
                        </span>
                      ) : (
                        <span className="text-center text-xl text-[#6f6c65]">
                          +
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 flex justify-between text-[9px] tracking-[0.1em]">
                <span>OVERNIGHT REFRIGERATED COURIER</span>
                <strong className="text-[#d69a63]">
                  CERTIFIED EPD 2025
                </strong>
              </div>
            </div>

            <div className="mt-4 bg-white p-5">
              <h3 className="text-[10px] font-bold tracking-[0.12em]">
                INCLUDED WITH BOX
              </h3>

              <div className="mt-4 space-y-4">
                {[
                  "5x Specimen Slabs with protective chamfered bevels",
                  "Technical Binder: Full EPD, Slip Coefficient, Water Absorption",
                  "Mortar Joint Gauge Key & 3x Tint Swatch Sticks",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 text-sm leading-5 text-[#34322f]"
                  >
                    <span className="text-[#9a4e16]">◉</span>
                    <span>{item}</span>
                    <span className="ml-auto whitespace-nowrap text-[9px]">
                      INCLUDED
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button className="mt-4 w-full bg-black px-5 py-4 text-[11px] font-bold tracking-[0.1em] text-white transition hover:bg-[#9a4e16]">
              PROCEED TO TRADE VERIFICATION & DISPATCH
            </button>
          </aside>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="border-t border-[#dedbd2] px-6 py-16 md:px-[7%] md:py-24">
        <div className="mx-auto max-w-[850px] text-center">
          <SectionLabel>ARCHITECTURAL SPECIFICATION DESK</SectionLabel>

          <h2 className="font-serif text-[40px] leading-tight md:text-[50px]">
            PROFESSIONAL CREDENTIALS & LOGISTICS
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] text-sm leading-6 text-[#55534e]">
            Sample curation boxes are exclusively supplied on a complimentary
            basis to licensed architects, interior studios, structural
            engineers, and verified hospitality developers.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[900px] border border-[#dedbd2] bg-white p-6 md:p-12">
          {/* PART A */}
          <div>
            <h3 className="border-b border-[#dedbd2] pb-3 font-serif text-xl font-bold">
              <span className="mr-2 bg-[#efede7] px-2 py-1 text-[10px] font-sans">
                PART A
              </span>
              PRACTICE & LICENSE VERIFICATION
            </h3>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <Field
                label="PRIMARY SPECIFIER NAME *"
                placeholder="Arch. Elena Vance"
              />

              <Field
                label="ARCHITECTURE / DESIGN STUDIO NAME *"
                placeholder="Studio Vance & Partners Ltd."
              />

              <Field
                label="PROFESSIONAL ACCREDITATION BODY *"
                placeholder="RIBA (Royal Institute of British Architects)"
              />

              <Field
                label="LICENSE OR REGISTRATION NUMBER *"
                placeholder="e.g. RIBA-892410-EU"
              />
            </div>
          </div>

          {/* PART B */}
          <div className="mt-12">
            <h3 className="border-b border-[#dedbd2] pb-3 font-serif text-xl font-bold">
              <span className="mr-2 bg-[#efede7] px-2 py-1 text-[10px] font-sans">
                PART B
              </span>
              TARGET PROJECT ARCHITECTURE
            </h3>

            <div className="mt-5 grid gap-5 md:grid-cols-3">
              <Field
                label="PROJECT TYPOLOGY *"
                placeholder="Luxury High-End Residential"
              />

              <Field
                label="ESTIMATED SURFACE EXTENT *"
                placeholder="250 - 500 m² (2,700 - 5,400 sq ft)"
              />

              <Field
                label="TENDER / INSTALLATION PHASE"
                placeholder="Concept / Schematic Selection (Q3 2025)"
              />
            </div>
          </div>

          {/* PART C */}
          <div className="mt-12">
            <h3 className="border-b border-[#dedbd2] pb-3 font-serif text-xl font-bold">
              <span className="mr-2 bg-[#efede7] px-2 py-1 text-[10px] font-sans">
                PART C
              </span>
              COURIER STUDIO DISPATCH
            </h3>

            <div className="mt-5">
              <Field
                label="STUDIO STREET ADDRESS *"
                placeholder="Architectural Studio, Level 4, 18 Great Sutton Street"
              />
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <Field
                label="CITY & COUNTRY *"
                placeholder="London, United Kingdom"
              />

              <Field
                label="STUDIO POSTAL CODE / ZIP *"
                placeholder="EC1V 0DN"
              />

              <Field
                label="PROFESSIONAL EMAIL FOR TRACKING *"
                placeholder="spec@vancestudio.com"
              />

              <Field
                label="DIRECT MOBILE / COURIER CONTACT *"
                placeholder="+44 (0)20 7946 0912"
              />
            </div>

            <div className="mt-5 flex flex-col justify-between gap-5 border border-[#dedbd2] bg-[#f6f3eb] p-6 md:flex-row md:items-center">
              <div className="flex items-center gap-5">
                <span className="text-3xl text-[#9a4e16]">▣</span>

                <div>
                  <h4 className="font-serif text-xl font-bold">
                    DHL EXPRESS PRIORITY AIR DISPATCH
                  </h4>

                  <p className="mt-1 text-sm text-[#55534e]">
                    Guaranteed delivery before 10:30 AM next working day across
                    Europe and North America.
                  </p>
                </div>
              </div>

              <span className="whitespace-nowrap bg-black px-4 py-3 text-[10px] font-bold tracking-[0.08em] text-white">
                COMPLIMENTARY TRADE SERVICE
              </span>
            </div>

            <button className="mt-4 w-full bg-black px-5 py-5 font-serif text-lg font-bold tracking-[0.04em] text-white transition hover:bg-[#9a4e16]">
              SUBMIT CREDENTIALS & DISPATCH CURATION BOX
            </button>
          </div>
        </div>
      </section>

      {/* GLOBAL STUDIOS */}
      <section className="border-t border-[#dedbd2] px-6 py-16 md:px-[7%] md:py-20">
        <div className="flex flex-col justify-between gap-5 border-b border-[#dedbd2] pb-5 md:flex-row md:items-end">
          <div>
            <SectionLabel>PHYSICAL MATERIAL LIBRARIES</SectionLabel>

            <h2 className="font-serif text-[40px] leading-tight md:text-[50px]">
              GLOBAL ATELIER STUDIOS & SPEC LABS
            </h2>
          </div>

          <p className="max-w-[510px] text-sm leading-6 text-[#55534e]">
            Visit our calibrated full-slab viewing rooms with controlled 5000K
            daylight simulation, custom water-testing troughs, and physical
            mortar joint calibrators.
          </p>
        </div>

        <div className="mt-10 grid gap-7 lg:grid-cols-3">
          {studios.map((studio) => (
            <article
              key={studio.city}
              className="border border-[#dedbd2] bg-white"
            >
              <div className="relative">
                <ImagePlaceholder
                  variant={studio.image}
                  className="h-[280px] w-full"
                />

                <span className="absolute left-3 top-3 bg-white px-3 py-2 text-[10px] font-bold tracking-[0.08em]">
                  {studio.city}
                </span>
              </div>

              <div className="p-7">
                <p className="text-[10px] font-bold tracking-[0.12em] text-[#9a4e16]">
                  {studio.eyebrow}
                </p>

                <h3 className="mt-3 font-serif text-2xl leading-tight">
                  {studio.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#55534e]">
                  {studio.description}
                </p>

                <div className="mt-5 border-t border-[#dedbd2] pt-4">
                  <div className="flex justify-between text-[10px] font-bold tracking-[0.08em]">
                    <span>MATERIALS ADVISOR</span>
                    <span>{studio.advisor}</span>
                  </div>

                  <div className="mt-3 flex justify-between text-[10px] font-bold tracking-[0.08em]">
                    <span>HOURS</span>
                    <span>{studio.hours}</span>
                  </div>
                </div>

                <button className="mt-5 w-full bg-[#efede7] px-4 py-3 text-[10px] font-bold tracking-[0.08em] transition hover:bg-black hover:text-white">
                  {studio.action}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONSULTATION STRIP */}
      <section className="flex flex-col justify-between gap-5 bg-[#e5e2da] px-6 py-8 md:flex-row md:items-center md:px-[7%]">
        <div>
          <h2 className="font-serif text-2xl font-bold">
            DIRECT STRUCTURAL & ENGINEERING CONSULTATION
          </h2>

          <p className="mt-1 text-sm text-[#55534e]">
            Require slip test certifications (DIN 51130 / ASTM C1028), bespoke
            CNC bevel blueprints, or seismic anchoring details?
          </p>
        </div>

        <button className="bg-black px-7 py-4 text-[10px] font-bold tracking-[0.12em] text-white">
          DIRECT SPECIFIER HOTLINE
        </button>
      </section>

      <Footer />
    </div>
  );
}