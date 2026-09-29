import React from "react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    number: "01",
    eyebrow: "CAPABILITY 01 // HYDRO-SURGICAL",
    title: "5-AXIS WATERJET PRECISION CNC CUTTING",
    tag: "±0.3MM AXIS",
    text:
      "High-pressure abrasive waterjet streams operating at 60,000 PSI, equipped with dynamic tilt correction to eliminate natural taper angles. We sculpt intricate freeform radiuses, fluted surface reliefs, complex geometric inlays, and acoustic slab perforations with surgical edge integrity.",
    chips: ["Curvilinear Inlays", "Acoustic Slits", "Recessed Drainage Falls"],
  },
  {
    number: "02",
    eyebrow: "CAPABILITY 02 // CHROMATIC VEIN LOGIC",
    title: "BOOKMATCHED & CONTINUOUS VEIN MATCHING",
    tag: "ALGORITHMIC LAY",
    text:
      "Every porcelain slab is digitized in calibrated 16K optical scans. Our computational nesting engine matches directional crystallization and mineral veins across 90-degree floor-to-wall turns, custom door wraps, and ceiling-height feature installations before a single diamond blade touches raw matter.",
    chips: ["Endmatch Arrays", "Vein Wrap Corners", "Digital Dry-Lay Signoff"],
  },
  {
    number: "03",
    eyebrow: "CAPABILITY 03 // SANITARY MONOLITHS",
    title: "MONOLITHIC THERMO-MOLDED & MITERED SANITARYWARE",
    tag: "ZERO GROUT WELL",
    text:
      "Constructed with hidden rigid structural sub-chassis, integrated slopes for zero water pooling, and seamlessly chamfered drain slots. Vanity basins, freestanding oval tubs, and suspended architectural sink troughs are wrapped uniformly in 6mm and 12mm sintered stone with 45-degree miter joints.",
    imageType: "bathroom",
  },
  {
    number: "04",
    eyebrow: "CAPABILITY 04 // EXTERNAL CLADDING",
    title: "RAINSCREEN SUBSTRUCTURE & FACADE ENGINEERING",
    tag: "WIND-LOAD TESTED",
    text:
      "Turnkey architectural envelopes engineered with hidden undercut anchor brackets, extruded aluminum sub-frames, and acoustic thermal gaskets. Tested to resist extreme wind-load shear and thermal expansion while ensuring zero exterior fastening penetrations are visible.",
    imageType: "facade",
  },
];

const protocol = [
  {
    number: "01",
    title: "DIGITAL SCAN & DXF VERIFICATION",
    text:
      "High-resolution 3D laser point-cloud scanning of the existing job site substrate. Direct import and clash detection against provided BIM architectural schematics.",
    output: "AS-BUILT TOLERANCE MODEL",
  },
  {
    number: "02",
    title: "DIGITAL DRY-LAY SIMULATION",
    text:
      "Every specific ceramic slab lot is photographed. Designers review interactive high-resolution vein orientation maps and sign off on exact joint positions virtually.",
    output: "INTERACTIVE VEIN DOSSIER",
  },
  {
    number: "03",
    title: "CNC PRECISION CUTTING",
    text:
      "Automated multi-axis waterjet execution and edge profiling in climate-controlled fabrication chambers. Mechanical dry pre-assembly for miter accuracy sign-off.",
    output: "CALIBRATED COMPONENT KIT",
  },
  {
    number: "04",
    title: "WHITE-GLOVE CRATED SHIPPING",
    text:
      "Shock-absorbing timber A-frame crates with integrated accelerometer impact tags. Packaged sequentially according to site installation order to optimize workflow.",
    output: "SEQUENCED PALLET LOGISTICS",
  },
  {
    number: "05",
    title: "ON-SITE INSTALLATION OVERSIGHT",
    text:
      "Certified master technical director present at the job site. Vacuum suction hoist rigging support, subfloor moisture tests, and laser alignment certification.",
    output: "15-YEAR SYSTEM GUARANTEE",
  },
];

const substrateRows = [
  {
    condition: "UNDERFLOOR RADIANT HEATING (HYDRONIC / ELECTRIC)",
    note: "Thermal cycle delta ΔT ≤ 45°C",
    adhesive: "EN 12004 C2S2 High Flexibility",
    decoupling: "Uncoupling dimpled membrane with vapor equalizing cavities",
    joints: "Every 5.0m × 5.0m (25m² max bay)",
    status: "APPROVED STANDARD",
  },
  {
    condition: "WET-ROOM TANKING & SPA ENCLOSURES",
    note: "Direct steam & immersion exposure",
    adhesive: "ISO 13007 R2T Reaction Resin / Epoxy",
    decoupling: "Double-coat elastomeric waterproof tanking slurry + corner fleece tape",
    joints: "All internal angles & penetrations",
    status: "APPROVED STANDARD",
  },
  {
    condition: "POST-TENSIONED CONCRETE",
    note: "Active structural movement",
    adhesive: "EN 12004 C2S2 + deformable system",
    decoupling: "Independent shear-strain isolation layer",
    joints: "Directly mirroring structural movement grid",
    status: "SPECIFIER REVIEW",
  },
];

function SectionLabel({ children, dark = false }) {
  return (
    <div
      className={`inline-flex items-center gap-2 border px-3 py-2 text-[10px] font-semibold tracking-[0.16em] ${
        dark
          ? "border-white/20 bg-white/5 text-[#e5a16a]"
          : "border-[#c8c4ba] bg-[#e8e5dd] text-[#934c17]"
      }`}
    >
      <span className="h-1.5 w-1.5 bg-[#a35a20]" />
      {children}
    </div>
  );
}

function ImagePlaceholder({ type = "stone", className = "" }) {
  const backgrounds = {
    stone:
      "radial-gradient(circle at 25% 35%, rgba(255,255,255,.65), transparent 18%), radial-gradient(circle at 70% 65%, rgba(95,80,60,.35), transparent 22%), linear-gradient(135deg,#d7cfc1,#b5aa9a 48%,#ded8cc)",
    bathroom:
      "radial-gradient(circle at 70% 30%, rgba(255,255,255,.9), transparent 25%), linear-gradient(135deg,#ded6c7,#c3b29b 48%,#eee9df)",
    facade:
      "linear-gradient(145deg,#b8c7ce 0%,#dfe7e8 45%,#879ba4 46%,#d5dcdd 70%,#91a3a9 100%)",
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: backgrounds[type] || backgrounds.stone }}
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[12%] top-[15%] h-[2px] w-[70%] rotate-[18deg] bg-white" />
        <div className="absolute left-[28%] top-[52%] h-[3px] w-[62%] -rotate-[11deg] bg-[#756958]" />
        <div className="absolute left-[5%] top-[75%] h-[1px] w-[80%] rotate-[7deg] bg-white" />
      </div>

      <div className="absolute bottom-4 left-4 border border-white/40 bg-black/20 px-3 py-2 text-[9px] tracking-[0.15em] text-white">
        ATELIER SURFACES / VISUAL PLACEHOLDER
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#f4f1e9] px-6 py-14 text-[#282824] md:px-12 lg:px-[7%]">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-serif text-xl font-bold">GLOBAL STUDIOS</h3>
          <p className="mt-4 text-sm leading-6 text-[#555550]">
            Architectural physical inspection libraries and technical
            consultation suites.
          </p>

          <div className="mt-4 space-y-2 border-l border-[#c8c4ba] pl-3 text-xs uppercase tracking-[0.08em] text-[#555550]">
            <p>Milan Atelier</p>
            <p>Via Solferino 18, Brera</p>
            <p>London Spec</p>
            <p>Clerkenwell Road 92, EC1</p>
            <p>New York Gallery</p>
            <p>Greene Street, SoHo</p>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl font-bold">SUSTAINABILITY & EPD</h3>
          <p className="mt-4 text-sm leading-6 text-[#555550]">
            Full lifecycle declarations and green building qualification
            standards.
          </p>

          <div className="mt-4 divide-y divide-[#dedbd3] text-xs">
            <div className="flex justify-between py-2">
              <span>EPD Certified Life-Cycle</span>
              <span>ISO 14025</span>
            </div>
            <div className="flex justify-between py-2">
              <span>LEED v4.1 Credits</span>
              <span>EQ / MR</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Recycled Content Matrix</span>
              <span>Min. 42%</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Zero VOC Emissions</span>
              <span>A+ Rating</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl font-bold">DIGITAL BIM / CAD</h3>
          <p className="mt-4 text-sm leading-6 text-[#555550]">
            High-definition continuous surface texture maps, seamless normals,
            and technical assets.
          </p>

          <div className="mt-4 space-y-2">
            {["REVIT PARAMETRIC ASSETS", "ARCHICAD MATERIAL PACK", "8K SEAMLESS TEXTURES"].map(
              (item) => (
                <button
                  key={item}
                  className="flex w-full items-center justify-between border border-[#dedbd3] bg-[#faf8f2] px-4 py-3 text-left text-[10px] font-semibold tracking-[0.12em]"
                >
                  {item}
                  <span>↓</span>
                </button>
              )
            )}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl font-bold">SPECIFIER DISPATCH</h3>
          <p className="mt-4 text-sm leading-6 text-[#555550]">
            Curated quarterly architectural dispatches on mineral extraction,
            ceramic technology, and large-format engineering.
          </p>

          <label className="mt-4 block text-[9px] font-semibold tracking-[0.16em]">
            ARCHITECTURAL PRACTICE EMAIL
          </label>

          <input
            type="email"
            placeholder="name@architects-studio.com"
            className="mt-2 w-full border border-[#c9c5bc] bg-white px-4 py-3 text-sm outline-none"
          />

          <button className="mt-1 w-full bg-black px-4 py-3 text-[10px] font-semibold tracking-[0.14em] text-white">
            SUBSCRIBE SPECIFIER DISPATCH
          </button>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-[#d8d4cb] pt-5 text-[10px] uppercase tracking-[0.08em] text-[#555550] md:flex-row md:items-center md:justify-between">
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

export default function BespokeFabrication() {
  return (
    <main className="min-h-screen bg-[#f7f4ec] text-[#292925]">
      {/* TOP TECHNICAL BAR */}
      <section className="border-b border-[#cfcac0] px-6 py-4 md:px-12 lg:px-[7%]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <SectionLabel>ATELIER LAB // BESPOKE MANUFACTURE</SectionLabel>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.08em] text-[#555550]">
            <span>TOLERANCE ±0.3MM</span>
            <span>•</span>
            <span>ISO 17855 CERTIFIED</span>
            <span>•</span>
            <span>CNC 5-AXIS SLAB MILLING</span>
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="px-6 pb-16 pt-20 md:px-12 md:pt-28 lg:px-[7%]">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#914b18]">
              Technical Synthesis // Monoliths
            </p>

            <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.035em] md:text-6xl lg:text-[76px]">
              BESPOKE
              <br />
              FABRICATION &
              <br />
              ARCHITECTURAL
              <br />
              ENGINEERING
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-[#555550]">
              From monolithic bookmatched stone feature walls to custom
              45-degree mitered vanity basins and laser-cut stair treads. We
              transform ultra-compact porcelain into engineered architectural
              components.
            </p>
          </div>

          <ImagePlaceholder
            type="bathroom"
            className="min-h-[440px] w-full lg:min-h-[520px]"
          />
        </div>
      </section>

      {/* PERFORMANCE STRIP */}
      <section className="border-y border-[#cbc7be] bg-[#e9e6de] px-6 py-8 md:px-12 lg:px-[7%]">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            ["CNC CUT CAPACITY", "3600 × 1600 mm", "Continuous slab format envelope"],
            ["MITER PRECISION", "45° Fold-Fold", "Zero-resin optical joints"],
            ["VEIN MAPPING INDEX", "99.4% Match", "BIM photogrammetry alignment"],
            ["TURNAROUND QUOTE", "< 24 Hours", "Direct senior stone estimator intake"],
          ].map(([label, value, text]) => (
            <div
              key={label}
              className="border-l border-[#c5c1b8] pl-4"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.12em]">
                {label}
              </p>
              <p className="mt-2 font-serif text-2xl">{value}</p>
              <p className="mt-2 text-xs text-[#66645e]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOUR CAPABILITIES */}
      <section className="px-6 py-20 md:px-12 lg:px-[7%]">
        <div className="flex flex-col gap-6 border-b border-[#d0ccc3] pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#914b18]">
              Advanced Material Processing
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.025em] md:text-5xl">
              FOUR CORE TECHNICAL CAPABILITIES
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-[#555550]">
            Executing what standard stone fabricators classify as unbuildable
            through calibrated multi-axis machinery, proprietary adhesives,
            and laser metrology.
          </p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {capabilities.map((item) => (
            <article
              key={item.number}
              className="border border-[#c9c5bc] bg-[#f8f6ef]"
            >
              <div className="p-7 md:p-8">
                <div className="flex items-center justify-between gap-4 border-b border-[#d5d1c8] pb-5">
                  <span className="text-[10px] uppercase tracking-[0.11em] text-[#555550]">
                    {item.eyebrow}
                  </span>

                  <span className="border border-[#cbc7be] bg-[#e8e5dd] px-2 py-2 text-[8px] uppercase tracking-[0.08em]">
                    {item.tag}
                  </span>
                </div>

                <h3 className="mt-6 max-w-xl font-serif text-2xl leading-tight font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-6 text-[#555550]">
                  {item.text}
                </p>

                {item.chips && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.chips.map((chip) => (
                      <span
                        key={chip}
                        className="border border-[#c9c5bc] bg-[#eeece5] px-3 py-2 text-[9px] uppercase tracking-[0.08em]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                )}

                {item.imageType && (
                  <ImagePlaceholder
                    type={item.imageType}
                    className="mt-7 h-[300px] w-full"
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EDGE SIMULATOR */}
      <section className="px-6 pb-20 md:px-12 lg:px-[7%]">
        <div className="border-t border-[#c9c5bc] pt-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#914b18]">
                Architectural Engineering Visualizer
              </p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                JOINT CALIPER & EDGE PROFILE SIMULATOR
              </h2>
            </div>

            <span className="text-[10px] uppercase tracking-[0.1em] text-[#555550]">
              Interactive Specification Module
            </span>
          </div>

          <div className="mt-8 grid border border-[#c9c5bc] bg-white lg:grid-cols-[390px_1fr]">
            <div className="border-b border-[#c9c5bc] p-7 lg:border-b-0 lg:border-r">
              <p className="text-[10px] font-semibold uppercase tracking-[0.1em]">
                EDGE FABRICATION TREATMENT
              </p>

              <div className="mt-3 grid grid-cols-2">
                {[
                  "45° MITERED BEVEL",
                  "MICRO PENCIL RADIUS (1MM)",
                  "FLUTED REED PROFILE",
                  "SHARK-NOSE UNDERCUT",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`border border-white px-3 py-3 text-[10px] uppercase tracking-[0.08em] ${
                      index === 0
                        ? "bg-black text-white"
                        : "bg-[#e8e5dd] text-[#45433e]"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase">
                    CALIBRATED JOINT GAP
                  </span>
                  <strong className="text-xs text-[#9a4e16]">
                    1.5 mm (Standard Dry-Stack)
                  </strong>
                </div>

                <div className="mt-6 flex justify-between text-[9px] text-[#555550]">
                  <span>1.0 mm (Hairline)</span>
                  <span>2.0 mm (Seismic)</span>
                  <span>4.0 mm (Exterior)</span>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[10px] font-semibold uppercase">
                  MORTAR TONE TINT
                </p>

                <div className="mt-3 flex gap-2">
                  <span className="h-7 w-7 bg-[#24231f]" />
                  <span className="h-7 w-7 bg-[#a49f94]" />
                  <span className="h-7 w-7 border-2 border-[#9c9689] bg-[#ddd7ca]" />
                  <span className="h-7 w-7 bg-[#f0ece3]" />
                </div>

                <p className="mt-2 text-[10px] text-[#555550]">
                  Active Tint: Travertine Bone
                </p>
              </div>

              <div className="mt-8 border border-[#c9c5bc] bg-[#f3f0e8] p-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#914b18]">
                  Architectural Advisory
                </p>

                <p className="mt-3 text-xs leading-5 text-[#555550]">
                  45° Miter joint requires structural backing with two-part
                  thixotropic epoxy paste and polyurethane expansion joints at
                  floor perimeter intersections.
                </p>
              </div>
            </div>

            <div className="bg-[#e9e6de] p-7">
              <div className="flex justify-between border-b border-[#c9c5bc] pb-4 text-[9px] uppercase tracking-[0.08em] text-[#555550]">
                <span>CROSS SECTION VIEW // 10:1 MACRO SIMULATION</span>
                <span>SLAB THICKNESS: 12.0 MM SINTERED PORCELAIN</span>
              </div>

              <div className="relative mt-16 flex justify-center">
                <div className="relative flex w-[78%] gap-5">
                  <div className="h-36 flex-1 border-2 border-[#c3bbaa] bg-[#e8e1d2]">
                    <div className="mt-6 h-px w-full rotate-[3deg] bg-[#d1c6b3]" />
                    <div className="mt-12 h-px w-full -rotate-[5deg] bg-[#d1c6b3]" />
                  </div>

                  <div className="h-36 flex-1 border-2 border-[#c3bbaa] bg-[#e8e1d2]">
                    <div className="mt-6 h-px w-full -rotate-[2deg] bg-[#d1c6b3]" />
                    <div className="mt-12 h-px w-full rotate-[5deg] bg-[#d1c6b3]" />
                  </div>

                  <div className="absolute left-1/2 top-[-24px] -translate-x-1/2 text-[9px] font-bold text-[#a1581e]">
                    1.5 MM
                  </div>

                  <div className="absolute bottom-[-15px] left-0 right-0 h-3 bg-[#aaa9a5]" />
                </div>
              </div>

              <div className="mt-20 flex flex-col justify-between gap-3 border-t border-[#c9c5bc] pt-5 text-[9px] uppercase tracking-[0.08em] text-[#555550] md:flex-row">
                <span>ASTM C627 HEAVY COMMERCIAL RATED</span>
                <span>TENSILE BOND STRENGTH: ≥ 2.5 N/MM²</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIFICATION TO SITE */}
      <section className="px-6 pb-20 md:px-12 lg:px-[7%]">
        <div className="border-t border-[#c9c5bc] pt-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#914b18]">
                Project Lifecycle Integrity
              </p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                THE SPECIFICATION-TO-SITE PROTOCOL
              </h2>
            </div>

            <span className="text-[10px] uppercase tracking-[0.08em]">
              5-Stage Sequential Fabrication Timeline
            </span>
          </div>

          <div className="mt-12 grid gap-4 xl:grid-cols-5">
            {protocol.map((item) => (
              <article
                key={item.number}
                className="border border-[#c9c5bc] bg-[#f7f4ec] p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-[#99511d]">
                    {item.number}
                  </span>
                  <span className="text-lg text-[#555550]">◈</span>
                </div>

                <h3 className="mt-5 min-h-[58px] font-serif text-lg leading-tight">
                  {item.title}
                </h3>

                <p className="mt-4 text-xs leading-5 text-[#555550]">
                  {item.text}
                </p>

                <div className="mt-5 border-t border-[#c9c5bc] pt-4">
                  <p className="text-[8px] uppercase tracking-[0.1em]">
                    Output Asset:
                  </p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.07em] text-[#555550]">
                    {item.output}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSTRATE MATRIX */}
      <section className="px-6 pb-20 md:px-12 lg:px-[7%]">
        <div className="border-t border-[#c9c5bc] pt-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_430px] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#914b18]">
                Structural Integration
              </p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                SUBSTRATE COMPATIBILITY MATRIX
              </h2>
            </div>

            <p className="text-sm leading-6 text-[#555550]">
              Assess recommended adhesive mortar classifications, decoupling
              membranes, and expansion joint frequencies across critical base
              conditions.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto border border-[#c9c5bc]">
            <table className="min-w-[1000px] w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#e5e2da] text-[10px] uppercase tracking-[0.08em]">
                  <th className="p-7">Substrate Condition</th>
                  <th className="p-7">Adhesive Specification</th>
                  <th className="p-7">Decoupling Requirement</th>
                  <th className="p-7">Expansion Joint Frequency</th>
                  <th className="p-7">Compliance Status</th>
                </tr>
              </thead>

              <tbody>
                {substrateRows.map((row) => (
                  <tr key={row.condition} className="border-t border-[#dedbd3]">
                    <td className="p-7">
                      <div className="font-serif text-lg">{row.condition}</div>
                      <div className="mt-2 text-[10px] text-[#66645e]">
                        {row.note}
                      </div>
                    </td>

                    <td className="p-7">
                      <span className="inline-block bg-[#e6e3db] px-3 py-2 text-[10px]">
                        {row.adhesive}
                      </span>
                    </td>

                    <td className="max-w-xs p-7 text-sm leading-6 text-[#555550]">
                      {row.decoupling}
                    </td>

                    <td className="p-7 text-sm leading-5 text-[#555550]">
                      {row.joints}
                    </td>

                    <td className="p-7">
                      <span className="font-semibold text-[10px] uppercase tracking-[0.06em] text-[#914b18]">
                        ◉ {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DARK CONSULTATION SECTION */}
      <section className="bg-[#2c2d29] px-6 py-20 text-[#f4f0e7] md:px-12 lg:px-[7%]">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel dark>SPECIFIER DIRECT INTAKE</SectionLabel>

            <h2 className="mt-6 max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.03em] md:text-6xl">
              BESPOKE FABRICATION
              <br />
              CONSULTATION
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#d1d0c9]">
              Submit your project documentation, CAD floorplans, or detailed
              elevations (.DWG / .PDF / .RVT). Our stone engineering team
              provides a structural buildability review, slab nesting plan,
              and guaranteed fabrication estimate within 24 hours.
            </p>

            <div className="mt-8 border border-[#6d6d67] bg-[#1d1f1e] p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#df9556]">
                Fast-Track Hotline
              </p>

              <h3 className="mt-3 font-serif text-xl font-bold">
                Bespoke Technical Studio
              </h3>

              <p className="mt-3 text-sm text-[#c7c6c0]">
                +39 02 8941 7720 // Milan Head Atelier
              </p>

              <div className="mt-5 text-3xl text-[#ef9d5b]">♧</div>
            </div>
          </div>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="border border-[#696963] bg-[#1e201f] p-7 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-[9px] font-semibold uppercase tracking-[0.1em]">
                Architect / Specifier Name
                <input
                  className="mt-2 w-full border border-[#70716b] bg-[#30312e] px-4 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none placeholder:text-[#aaa9a2]"
                  placeholder="Elena Rossi"
                />
              </label>

              <label className="text-[9px] font-semibold uppercase tracking-[0.1em]">
                Architectural Practice / Studio
                <input
                  className="mt-2 w-full border border-[#70716b] bg-[#30312e] px-4 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none placeholder:text-[#aaa9a2]"
                  placeholder="Studio Architettura Rossi"
                />
              </label>

              <label className="text-[9px] font-semibold uppercase tracking-[0.1em]">
                Professional Email
                <input
                  type="email"
                  className="mt-2 w-full border border-[#70716b] bg-[#30312e] px-4 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none placeholder:text-[#aaa9a2]"
                  placeholder="e.rossi@studio-rossi.it"
                />
              </label>

              <label className="text-[9px] font-semibold uppercase tracking-[0.1em]">
                Target Delivery / Install Date
                <input
                  type="date"
                  className="mt-2 w-full border border-[#70716b] bg-[#30312e] px-4 py-3 text-sm font-normal tracking-normal text-white outline-none"
                />
              </label>
            </div>

            <fieldset className="mt-6">
              <legend className="text-[9px] font-semibold uppercase tracking-[0.1em]">
                Fabrication Scope of Works
              </legend>

              <div className="mt-2 grid gap-1 md:grid-cols-2">
                {[
                  "Mitered Vanity Basin",
                  "Continuous Vein Wall",
                  "Rainscreen Facade",
                  "Custom Stair Treads",
                  "Integrated Tub Shell",
                  "Acoustic Perforations",
                ].map((item, index) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-center gap-2 border border-[#666761] bg-[#30312e] px-3 py-2 text-xs text-[#d7d5ce]"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={index === 0 || index === 1}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="mt-6 block text-[9px] font-semibold uppercase tracking-[0.1em]">
              Drawing / Plan Upload (.DWG, .PDF, .RVT ≤ 100MB)
              <div className="mt-2 flex min-h-[135px] cursor-pointer flex-col items-center justify-center border border-dashed border-[#777871] bg-[#30312e] text-center">
                <span className="text-3xl text-[#ef9d5b]">♧</span>
                <span className="mt-2 text-base font-serif">
                  DRAG ARCHITECTURAL FILES OR BROWSE
                </span>
                <span className="mt-2 text-xs font-normal normal-case tracking-normal text-[#aaa9a2]">
                  Encrypted direct upload to secure studio fabrication vault
                </span>
              </div>
            </label>

            <label className="mt-6 block text-[9px] font-semibold uppercase tracking-[0.1em]">
              Project Notes / Specific Tolerances
              <textarea
                rows="3"
                className="mt-2 w-full resize-none border border-[#70716b] bg-[#30312e] px-4 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none placeholder:text-[#aaa9a2]"
                placeholder="Specify nominal slab thickness preferences (6mm/12mm/20mm), required slip resistance (R10/R11), or specific vein matching criteria..."
              />
            </label>

            <button
              type="submit"
              className="mt-4 w-full bg-[#a85b20] px-6 py-4 font-serif text-lg font-bold tracking-[0.02em] text-white transition hover:bg-[#bd6a29]"
            >
              TRANSMIT FOR 24-HOUR FEASIBILITY AUDIT →
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}