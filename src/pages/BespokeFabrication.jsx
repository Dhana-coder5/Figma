import React from "react";
import Footer from "../components/Footer.jsx";

const capabilities = [
  {
    number: "01",
    eyebrow: "CAPABILITY 01 // HYDRO-SURGICAL",
    title: "5-AXIS WATERJET PRECISION CNC CUTTING",
    tag: "±0.3MM AXIS",
    text:
      "High-pressure abrasive waterjet streams operating at 60,000 PSI, equipped with dynamic tilt correction to eliminate natural taper angles. We sculpt intricate freeform radiuses, fluted surface reliefs, complex geometric inlays, and acoustic slab perforations with surgical edge integrity.",
    chips: [
      "Curvilinear Inlays",
      "Acoustic Slits",
      "Recessed Drainage Falls",
    ],
    image: "/images/capability-01.jpg",
  },

  {
    number: "02",
    eyebrow: "CAPABILITY 02 // CHROMATIC VEIN LOGIC",
    title: "BOOKMATCHED & CONTINUOUS VEIN MATCHING",
    tag: "ALGORITHMIC LAY",
    text:
      "Every porcelain slab is digitized in calibrated 16K optical scans. Our computational nesting engine matches directional crystallization and mineral veins across 90-degree floor-to-wall turns, custom door wraps, and ceiling-height feature installations before a single diamond blade touches raw matter.",
    chips: [
      "Endmatch Arrays",
      "Vein Wrap Corners",
      "Digital Dry-Lay Signoff",
    ],
    image: "/images/capability-02.jpg",
  },

  {
    number: "03",
    eyebrow: "CAPABILITY 03 // THERMAL MANAGMENT",
    title: "VENTILATED THERMAL BREAK",
    tag: "CLIMATE CONTROL",
    text:
      "Integrated ventilation channels within the slab structure to manage thermal expansion and contraction. This ensures dimensional stability and prevents cracking under varying temperature conditions.",
    chips: [
      "Endmatch Arrays",
      "Vein Wrap Corners",
      "Digital Dry-Lay Signoff",
    ],
    image: "/images/capability-03.jpg",
  },

  {
    number: "04",
    eyebrow: "CAPABILITY 04 // HYDRO-SURGICAL",
    title: "5-AXIS WATERJET PRECISION CNC CUTTING",
    tag: "±0.3MM AXIS",
    text:
      "High-pressure abrasive waterjet streams operating at 60,000 PSI, equipped with dynamic tilt correction to eliminate natural taper angles. We sculpt intricate freeform radiuses, fluted surface reliefs, complex geometric inlays, and acoustic slab perforations with surgical edge integrity.",
    chips: [
      "Endmatch Arrays",
      "Vein Wrap Corners",
      "Digital Dry-Lay Signoff",
    ],
    image: "/images/capability-04.jpg",
  },
];

const protocol = [
  {
    number: "01",
    title: "DIGITAL SCAN & DXF VERIFICATION",
    text:
      "High-resolution 3D laser point-cloud scanning of the existing job site substrate. Direct import and clash detection against provided BIM architectural schematics.",
    output: "AS-BUILT TOLERANCE MODEL",
    icon: "scan",
  },

  {
    number: "02",
    title: "DIGITAL DRY-LAY SIMULATION",
    text:
      "Every specific ceramic slab lot is photographed. Designers review interactive high-resolution vein orientation maps and sign off on exact joint positions virtually.",
    output: "INTERACTIVE VEIN DOSSIER",
    icon: "palette",
  },

  {
    number: "03",
    title: "CNC PRECISION CUTTING",
    text:
      "Automated multi-axis waterjet execution and edge profiling in climate-controlled fabrication chambers. Mechanical dry pre-assembly for miter accuracy sign-off.",
    output: "CALIBRATED COMPONENT KIT",
    icon: "machine",
  },

  {
    number: "04",
    title: "WHITE-GLOVE CRATED SHIPPING",
    text:
      "Shock-absorbing timber A-frame crates with integrated accelerometer impact tags. Packaged sequentially according to site installation order to optimize workflow.",
    output: "SEQUENCED PALLET LOGISTICS",
    icon: "crate",
  },

  {
    number: "05",
    title: "ON-SITE INSTALLATION OVERSIGHT",
    text:
      "Certified master technical director present at the job site. Vacuum suction hoist rigging support, subfloor moisture tests, and laser alignment certification.",
    output: "15-YEAR SYSTEM GUARANTEE",
    icon: "site",
  },
];

const substrateRows = [
  {
    condition: "UNDERFLOOR RADIANT HEATING (HYDRONIC / ELECTRIC)",
    note: "Thermal cycle delta ΔT ≤ 45°C",
    adhesive: "EN 12004 C2S2 High Flexibility",
    decoupling:
      "Uncoupling dimpled membrane with vapor equalizing cavities",
    joints: "Every 5.0m × 5.0m (25m² max bay)",
    status: "APPROVED STANDARD",
  },

  {
    condition: "WET-ROOM TANKING & SPA ENCLOSURES",
    note: "Direct steam & immersion exposure",
    adhesive: "ISO 13007 R2T Reaction Resin / Epoxy",
    decoupling:
      "Double-coat elastomeric waterproof tanking slurry + corner fleece tape",
    joints: "All internal angles & penetrations",
    status: "APPROVED STANDARD",
  },

  {
    condition: "POST-TENSIONED CONCRETE SUSPENDED DECKS",
    note: "Long-term deflection & camber movement",
    adhesive: "EN 12004 C2S2 + Polyurethane Liquid",
    decoupling:
      "Independent shear-strain isolation matting (free-floating)",
    joints: "Directly mirroring structural deflection joints",
    status: "SPECIFIER AUDIT REQ.",
  },

  {
    condition: "EXTERIOR VENTILATED FAÇADE FRAMING",
    note: "Wind loads ≥ 2.4 kN/m² dynamic",
    adhesive: "Structural MS Polymer + Keil Rear Anchors",
    decoupling:
      "Extruded aluminum bracket rail carrier grid (Alloy 6063 T6)",
    joints: "Open horizontal shadow gaps (6mm)",
    status: "APPROVED STANDARD",
  },
];

function SectionLabel({ children, dark = false }) {
  return (
    <div
      className={`inline-flex items-center gap-2 border px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] ${
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

function StageIcon({ type }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "text-[#4f4f4b]",
  };

  if (type === "palette") {
    return (
      <svg {...common}>
        <path d="M12 4.5c-4.7 0-8.5 3-8.5 7.1 0 3.5 2.7 6.1 6.1 6.1h1.2c.9 0 1.5-.8 1.3-1.6-.3-1.1.4-2.2 1.6-2.2h1.7c2.3 0 4.6-1.8 4.6-4.4 0-2.8-3.2-5-8-5Z" />
        <circle cx="7.2" cy="11" r=".8" />
        <circle cx="9.5" cy="7.8" r=".8" />
        <circle cx="13.4" cy="7" r=".8" />
        <circle cx="16.6" cy="8.7" r=".8" />
      </svg>
    );
  }

  if (type === "machine") {
    return (
      <svg {...common}>
        <path d="M4 18V9h9l2 4h5v5H4Z" />
        <path d="M7 9V5h5v4M15 13h5" />
        <path d="M6 18v2M12 18v2M19 18v2" />
        <path d="M17 7v3M14 8h6" />
      </svg>
    );
  }

  if (type === "crate") {
    return (
      <svg {...common}>
        <rect x="4" y="6" width="16" height="13" rx="1" />
        <path d="M4 10h16M8 6V4h8v2M8 13h8" />
      </svg>
    );
  }

  if (type === "site") {
    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="2.5" />
        <path d="M4.5 18c.5-3.4 2.2-5 4.5-5s4 1.6 4.5 5" />
        <circle cx="17.5" cy="9" r="2" />
        <path d="M15 18c.3-2.4 1.2-3.6 3-3.9M18.5 5v-2M21 5l1.2-1.2M22 8h2" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="m12 3 7 4v7l-7 4-7-4V7l7-4Z" />
      <circle cx="12" cy="10.5" r="2.2" />
      <path d="m7.2 16.2 1.8-2.8M16.8 16.2 15 13.4M12 19v-3" />
    </svg>
  );
}

export default function BespokeFabrication() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f2ea] text-[#22211e]">

      {/* =========================
          TOP TECHNICAL BAR
      ========================== */}
      <section className="mx-auto max-w-[1185px] border-b border-[#cfcac0] px-6 pb-4 pt-[36px] md:px-0">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <SectionLabel>
            ATELIER LAB // BESPOKE MANUFACTURE
          </SectionLabel>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.08em] text-[#555550]">
            <span>TOLERANCE ±0.3MM</span>
            <span>•</span>
            <span>ISO 17855 CERTIFIED</span>
            <span>•</span>
            <span>CNC 5-AXIS SLAB MILLING</span>
          </div>

        </div>
      </section>

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-[1185px] px-0 pb-[78px]">

        <div className="grid grid-cols-[1fr_465px] gap-[55px]">

          {/* ================= LEFT CONTENT ================= */}
          <div className="pt-[98px]">

            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#914b18]">
              TECHNICAL SYNTHESIS // MONOLITHS
            </p>

            <h1
              className="mt-[16px] max-w-[650px] text-[58px] leading-[1.02] tracking-[-0.035em] text-[#22211e]"
              style={{
                fontFamily: '"Libre Baskerville", Georgia, serif',
                fontWeight: 400,
              }}
            >
              BESPOKE
              <br />
              FABRICATION &
              <br />
              ARCHITECTURAL
              <br />
              ENGINEERING
            </h1>

            <p className="mt-[42px] max-w-[650px] text-[16px] leading-[1.8] text-[#4d4c49]">
              From monolithic bookmatched stone feature walls to custom
              45-degree mitered vanity basins and laser-cut stair treads. We
              transform ultra-compact porcelain slabs and natural minerals into
              structurally seamless architectural monoliths.
            </p>

            {/* BUTTONS */}
            <div className="mt-[34px] flex items-center gap-[16px]">

              <button
                type="button"
                className="flex h-[49px] items-center justify-center whitespace-nowrap bg-black px-[27px] text-[10px] font-semibold tracking-[0.07em] text-white"
              >
                SUBMIT ARCHITECTURAL DRAWINGS (.DWG/.PDF)
              </button>

              <button
                type="button"
                className="flex h-[49px] items-center justify-center whitespace-nowrap border border-[#cbc7bf] bg-[#eeece6] px-[28px] text-[10px] font-semibold tracking-[0.07em] text-[#383733]"
              >
                EXPLORE CAPABILITIES MATRIX
              </button>

            </div>

          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative mt-[48px] h-[520px]">

            <img
              src="/images/bespoke-fabrication.jpg"
              alt="Bespoke architectural fabrication"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* IMAGE GRADIENT */}
            <div className="absolute inset-x-0 bottom-0 h-[120px] bg-gradient-to-t from-black/45 to-transparent" />

            {/* IMAGE CAPTION */}
            <div className="absolute bottom-[36px] right-[25px] text-[10px] uppercase tracking-[0.08em] text-white">
              CALACATTA VENA — TRAVERTINO NAVONA HONED
            </div>

            {/* ================= TOLERANCE CARD ================= */}
            <div className="absolute bottom-[-16px] left-[-25px] z-20 w-[240px] bg-white px-[17px] py-[20px] shadow-[0_7px_25px_rgba(0,0,0,0.10)]">

              <p className="text-[9px] uppercase tracking-[0.10em] text-[#96501f]">
                TOLERANCE VALIDATION
              </p>

              <p
                className="mt-[10px] text-[28px] leading-none tracking-[-0.03em] text-[#292824]"
                style={{
                  fontFamily: '"Libre Baskerville", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                0.28 mm
              </p>

              <p className="mt-[7px] max-w-[190px] text-[11px] leading-[1.45] text-[#55534f]">
                Continuous bevel accuracy on thermo-formed 45° miters.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =========================
          PERFORMANCE STRIP
      ========================== */}
      <section className="border-y border-[#cbc7be] bg-[#e9e6de]">

        <div className="mx-auto grid max-w-[1185px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {[
            [
              "CNC CUT CAPACITY",
              "3600 × 1600 mm",
              "Continuous slab format envelope",
            ],
            [
              "MITER PRECISION",
              "45° Fold-Fold",
              "Zero-resin optical joints",
            ],
            [
              "VEIN MAPPING INDEX",
              "99.4% Match",
              "BIM photogrammetry alignment",
            ],
            [
              "TURNAROUND QUOTE",
              "< 24 Hours",
              "Direct senior stone estimator intake",
            ],
          ].map(([label, value, text]) => (

            <div
              key={label}
              className="border-l border-[#c8c4bb] px-4 py-[18px]"
            >

              <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#555550]">
                {label}
              </p>

              <p
                className="mt-3 text-[25px] leading-none tracking-[-0.025em]"
                style={{
                  fontFamily: '"Libre Baskerville", Georgia, serif',
                }}
              >
                {value}
              </p>

              <p className="mt-3 text-[10px] leading-[1.5] text-[#66645e]">
                {text}
              </p>

            </div>

          ))}

        </div>
      </section>

      {/* =====================================================
          FOUR CORE TECHNICAL CAPABILITIES
      ===================================================== */}
      <section className="mx-auto max-w-[1185px] px-0 pb-[80px] pt-[92px]">

        {/* SECTION HEADER */}
        <div className="flex items-end justify-between gap-[55px] border-b border-[#d0ccc3] pb-[32px]">

          <div className="flex-1">

            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#914b18]">
              ADVANCED MATERIAL PROCESSING
            </p>

            <h2
              className="mt-[12px] text-[38px] leading-[1.08] tracking-[-0.025em]"
              style={{
                fontFamily: '"Libre Baskerville", Georgia, serif',
                fontWeight: 400,
              }}
            >
              FOUR CORE TECHNICAL CAPABILITIES
            </h2>

          </div>

          <p className="w-[450px] pb-[2px] text-[14px] leading-[1.7] text-[#555550]">
            Executing what standard stone fabricators classify as
            unbuildable through calibrated multi-axis machinery,
            proprietary adhesives, and laser metrology.
          </p>

        </div>

        {/* CAPABILITY GRID */}
        <div className="mt-[48px] grid grid-cols-2 gap-[28px]">

          {/* CAPABILITY 01 */}
          <article className="border border-[#c9c5bc] bg-[#f8f6ef]">

            <div className="p-[28px]">

              <div className="flex items-center justify-between border-b border-[#d5d1c8] pb-[18px]">

                <span className="text-[10px] uppercase tracking-[0.10em] text-[#555550]">
                  CAPABILITY 01 // HYDRO-SURGICAL
                </span>

                <span className="border border-[#cbc7be] bg-[#e8e5dd] px-[7px] py-[7px] text-[8px] uppercase tracking-[0.06em] text-[#44433f]">
                  ±0.3MM AXIS
                </span>

              </div>

              <h3
                className="mt-[23px] text-[18px] leading-[1.25] text-[#292824]"
                style={{
                  fontFamily: '"Libre Baskerville", Georgia, serif',
                  fontWeight: 700,
                }}
              >
                5-AXIS WATERJET PRECISION CNC CUTTING
              </h3>

              <p className="mt-[18px] text-[14px] leading-[1.72] text-[#555550]">
                High-pressure abrasive waterjet streams operating at
                60,000 PSI, equipped with dynamic tilt correction to
                eliminate natural taper angles. We sculpt intricate
                freeform radiuses, fluted surface reliefs, complex
                geometric inlays, and acoustic slab perforations with
                surgical edge integrity.
              </p>

              <div className="mt-[25px] overflow-hidden border border-[#c9c5bc]">

                <img
                  src="/images/capability-01.jpg"
                  alt="Waterjet fabrication and architectural cutting"
                  className="block h-[292px] w-full object-cover"
                />

              </div>

              <div className="mt-[17px] border-t border-[#d5d1c8]" />

              <div className="mt-[15px] flex flex-wrap gap-[4px]">

                <span className="border border-[#c9c5bc] bg-[#f3f0e8] px-[6px] py-[6px] text-[9px] text-[#45433e]">
                  Curvilinear Inlays
                </span>

                <span className="border border-[#c9c5bc] bg-[#f3f0e8] px-[6px] py-[6px] text-[9px] text-[#45433e]">
                  Acoustic Slits
                </span>

                <span className="border border-[#c9c5bc] bg-[#f3f0e8] px-[6px] py-[6px] text-[9px] text-[#45433e]">
                  Recessed Drainage Falls
                </span>

              </div>

            </div>
          </article>

          {/* CAPABILITY 02 */}
          <article className="border border-[#c9c5bc] bg-[#f8f6ef]">

            <div className="p-[28px]">

              <div className="flex items-center justify-between border-b border-[#d5d1c8] pb-[18px]">

                <span className="text-[10px] uppercase tracking-[0.10em] text-[#555550]">
                  CAPABILITY 02 // CHROMATIC VEIN LOGIC
                </span>

                <span className="border border-[#cbc7be] bg-[#e8e5dd] px-[7px] py-[7px] text-[8px] uppercase tracking-[0.06em] text-[#44433f]">
                  ALGORITHMIC LAY
                </span>

              </div>

              <h3
                className="mt-[23px] text-[18px] leading-[1.25] text-[#292824]"
                style={{
                  fontFamily: '"Libre Baskerville", Georgia, serif',
                  fontWeight: 700,
                }}
              >
                BOOKMATCHED & CONTINUOUS VEIN MATCHING
              </h3>

              <p className="mt-[18px] text-[14px] leading-[1.72] text-[#555550]">
                Every porcelain slab is digitized in calibrated 16K
                optical scans. Our computational nesting engine matches
                directional crystallization and mineral veins across
                90-degree floor-to-wall turns, custom door wraps, and
                ceiling-height feature installations before a single
                diamond blade touches raw matter.
              </p>

              <div className="mt-[25px] overflow-hidden border border-[#c9c5bc]">

                <img
                  src="/images/capability-02.jpg"
                  alt="Bookmatched continuous vein installation"
                  className="block h-[292px] w-full object-cover"
                />

              </div>

              <div className="mt-[17px] border-t border-[#d5d1c8]" />

              <div className="mt-[15px] flex flex-wrap gap-[4px]">

                <span className="border border-[#c9c5bc] bg-[#f3f0e8] px-[6px] py-[6px] text-[9px] text-[#45433e]">
                  Endmatch Arrays
                </span>

                <span className="border border-[#c9c5bc] bg-[#f3f0e8] px-[6px] py-[6px] text-[9px] text-[#45433e]">
                  Vein Wrap Corners
                </span>

                <span className="border border-[#c9c5bc] bg-[#f3f0e8] px-[6px] py-[6px] text-[9px] text-[#45433e]">
                  Digital Dry-Lay Signoff
                </span>

              </div>

            </div>
          </article>

          {/* CAPABILITY 03 */}
          <article className="border border-[#c9c5bc] bg-[#f8f6ef]">

            <div className="p-[28px]">

              <div className="flex items-center justify-between border-b border-[#d5d1c8] pb-[18px]">

                <span className="text-[10px] uppercase tracking-[0.10em] text-[#555550]">
                  CAPABILITY 03 // SANITARY MONOLITHS
                </span>

                <span className="border border-[#cbc7be] bg-[#e8e5dd] px-[7px] py-[7px] text-[8px] uppercase tracking-[0.06em] text-[#44433f]">
                  ZERO GROUT WELL
                </span>

              </div>

              <h3
                className="mt-[23px] text-[18px] leading-[1.25] text-[#292824]"
                style={{
                  fontFamily: '"Libre Baskerville", Georgia, serif',
                  fontWeight: 700,
                }}
              >
                MONOLITHIC THERMO-MOLDED & MITERED SANITARYWARE
              </h3>

              <p className="mt-[18px] text-[14px] leading-[1.72] text-[#555550]">
                Constructed with hidden rigid structural sub-chassis,
                integrated slopes for zero water pooling, and seamlessly
                chamfered drain slots. Vanity basins, freestanding oval
                tubs, and suspended architectural sink troughs are wrapped
                uniformly in 6mm and 12mm sintered stone with 45-degree
                miter joints.
              </p>

              <div className="mt-[25px] overflow-hidden border border-[#c9c5bc]">

                <img
                  src="/images/Capability-03.jpg"
                  alt="Monolithic thermo-molded sanitaryware"
                  className="block h-[292px] w-full object-cover object-center"
                />

              </div>

              <div className="mt-[17px] border-t border-[#d5d1c8]" />

              <div className="mt-[15px] flex flex-wrap gap-[4px]">

                <span className="border border-[#c9c5bc] bg-[#f3f0e8] px-[6px] py-[6px] text-[9px] text-[#45433e]">
                  Concealed Removable Drains
                </span>

                <span className="border border-[#c9c5bc] bg-[#f3f0e8] px-[6px] py-[6px] text-[9px] text-[#45433e]">
                  Curved Ribbed Casework
                </span>

                <span className="border border-[#c9c5bc] bg-[#f3f0e8] px-[6px] py-[6px] text-[9px] text-[#45433e]">
                  Internal EPS Cores
                </span>

              </div>

            </div>
          </article>

          {/* CAPABILITY 04 */}
          <article className="border border-[#c9c5bc] bg-[#f8f6ef]">

            <div className="p-[28px]">

              <div className="flex items-center justify-between border-b border-[#d5d1c8] pb-[18px]">

                <span className="text-[10px] uppercase tracking-[0.10em] text-[#555550]">
                  CAPABILITY 04 // EXTERNAL CLADDING
                </span>

                <span className="border border-[#cbc7be] bg-[#e8e5dd] px-[7px] py-[7px] text-[8px] uppercase tracking-[0.06em] text-[#44433f]">
                  WIND-LOAD TESTED
                </span>

              </div>

              <h3
                className="mt-[23px] text-[18px] leading-[1.25] text-[#292824]"
                style={{
                  fontFamily: '"Libre Baskerville", Georgia, serif',
                  fontWeight: 700,
                }}
              >
                RAINSCREEN SUBSTRUCTURE & FACADE ENGINEERING
              </h3>

              <p className="mt-[18px] text-[14px] leading-[1.72] text-[#555550]">
                Turnkey architectural envelopes engineered with hidden
                undercut anchor brackets, extruded aluminum sub-frames,
                and acoustic thermal gaskets. Tested to resist extreme
                wind-load shear and thermal expansion while ensuring zero
                exterior fastening penetrations are visible.
              </p>

              <div className="mt-[25px] overflow-hidden border border-[#c9c5bc]">

                <img
                  src="/images/Capability-04.jpg"
                  alt="Rainscreen facade engineering"
                  className="block h-[292px] w-full object-cover object-top"
                />

              </div>

              <div className="mt-[17px] border-t border-[#d5d1c8]" />

              <div className="mt-[15px] flex flex-wrap gap-[4px]">

                <span className="border border-[#c9c5bc] bg-[#f3f0e8] px-[6px] py-[6px] text-[9px] text-[#45433e]">
                  Undercut Kail Anchors
                </span>

                <span className="border border-[#c9c5bc] bg-[#f3f0e8] px-[6px] py-[6px] text-[9px] text-[#45433e]">
                  Ventilated Thermal Break
                </span>

                <span className="border border-[#c9c5bc] bg-[#f3f0e8] px-[6px] py-[6px] text-[9px] text-[#45433e]">
                  Seismic Compliance
                </span>

              </div>

            </div>
          </article>

        </div>

      </section>

      {/* =====================================================
          JOINT CALIPER & EDGE PROFILE SIMULATOR
      ===================================================== */}
      <section className="mx-auto max-w-[1185px] px-0 pb-[80px]">

        <div className="border-t border-[#c9c5bc] pt-[28px]">

          {/* SIMULATOR HEADER */}
          <div className="flex items-end justify-between">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#914b18]">
                ARCHITECTURAL ENGINEERING VISUALIZER
              </p>

              <h2
                className="mt-[10px] text-[30px] leading-[1.05] tracking-[-0.025em] text-[#272622]"
                style={{
                  fontFamily: '"Libre Baskerville", Georgia, serif',
                  fontWeight: 300,
                }}
              >
                JOINT CALIPER & EDGE PROFILE SIMULATOR
              </h2>

            </div>

            <span className="pb-[6px] text-[9px] uppercase tracking-[0.10em] text-[#555550]">
              INTERACTIVE SPECIFICATION MODULE
            </span>

          </div>

          {/* ================= SIMULATOR GRID ================= */}
          <div
            className="mt-[42px] min-h-[505px] border border-[#c9c5bc] bg-white"
            style={{
              display: "grid",
              gridTemplateColumns: "390px 1fr",
            }}
          >

            {/* ================= LEFT PANEL ================= */}
            <div className="border-r border-[#c9c5bc] bg-white p-[28px]">

              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#252522]">
                EDGE FABRICATION TREATMENT
              </p>

              <div className="mt-[8px] grid grid-cols-2">

                <div className="flex h-[44px] items-center border border-white bg-black px-[8px] text-[10px] uppercase tracking-[0.07em] text-white">
                  45° MITERED BEVEL
                </div>

                <div className="flex h-[44px] items-center border border-white bg-[#e8e5dd] px-[8px] text-[10px] uppercase tracking-[0.06em] text-[#45433e]">
                  <span>
                    MICRO PENCIL RADIUS
                    <br />
                    (1MM)
                  </span>
                </div>

                <div className="flex h-[44px] items-center border border-white bg-[#e8e5dd] px-[8px] text-[10px] uppercase tracking-[0.07em] text-[#45433e]">
                  FLUTED REED PROFILE
                </div>

                <div className="flex h-[44px] items-center border border-white bg-[#e8e5dd] px-[8px] text-[10px] uppercase tracking-[0.06em] text-[#45433e]">
                  <span>
                    SHARK-NOSE
                    <br />
                    UNDERCUT
                  </span>
                </div>

              </div>

              {/* CALIBRATED JOINT GAP */}
              <div className="mt-[30px]">

                <div className="flex items-center justify-between">

                  <span className="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#292824]">
                    CALIBRATED JOINT GAP
                  </span>

                  <strong className="text-[11px] text-[#9a4e16]">
                    1.5 mm (Standard Dry-Stack)
                  </strong>

                </div>

                <div className="mt-[25px] flex justify-between text-[9px] text-[#555550]">
                  <span>1.0 mm (Hairline)</span>
                  <span>2.0 mm (Seismic)</span>
                  <span>4.0 mm (Exterior)</span>
                </div>

              </div>

              {/* MORTAR TONE TINT */}
              <div className="mt-[31px]">

                <p className="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#292824]">
                  MORTAR TONE TINT
                </p>

                <div className="mt-[8px] flex items-center gap-[8px]">

                  <span className="h-[29px] w-[29px] bg-[#24231f]" />

                  <span className="h-[29px] w-[29px] bg-[#a49f94]" />

                  <span className="h-[29px] w-[29px] border-2 border-[#9c9689] bg-[#ddd7ca]" />

                  <span className="h-[29px] w-[29px] bg-[#f0ece3]" />

                </div>

                <p className="mt-[9px] block text-[10px] leading-[1.4] text-[#555550]">
                  Active Tint: Travertine Bone
                </p>

                {/* ARCHITECTURAL ADVISORY */}
                <div className="mt-[27px] border border-[#c9c5bc] bg-[#f3f0e8] p-[13px]">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#914b18]">
                    ARCHITECTURAL ADVISORY
                  </p>

                  <p className="mt-[10px] text-[11px] leading-[1.55] text-[#555550]">
                    45° Miter joint requires structural backing with two-part
                    thixotropic epoxy paste and polyurethane expansion joints at
                    floor perimeter intersections.
                  </p>

                </div>

              </div>

            </div>

            {/* ================= RIGHT PANEL ================= */}
            <div className="min-w-0 bg-[#e9e6de] p-[28px]">

              {/* RIGHT PANEL HEADER */}
              <div className="flex items-center justify-between border-b border-[#c9c5bc] pb-[11px]">

                <span className="text-[9px] uppercase tracking-[0.07em] text-[#555550]">
                  CROSS SECTION VIEW // 10:1 MACRO SIMULATION
                </span>

                <span className="text-[9px] uppercase tracking-[0.07em] text-[#555550]">
                  SLAB THICKNESS: 12.0 MM SINTERED PORCELAIN
                </span>

              </div>

              {/* CROSS SECTION DRAWING */}
              <div className="relative mt-[45px] flex h-[270px] items-center justify-center">

                <div className="relative h-full w-[75%]">

                  {/* LEFT SLAB */}
                  <div className="absolute left-0 top-[28px] h-[140px] w-[48.5%] border-2 border-[#c4bbab] bg-[#e8e1d2]">

                    <div className="absolute left-[22px] right-[25px] top-[24px] border-t border-dashed border-[#d1c6b4]" />

                    <div className="absolute left-[42px] right-[35px] top-[83px] border-t border-dashed border-[#d1c6b4]" />

                  </div>

                  {/* RIGHT SLAB */}
                  <div className="absolute right-0 top-[28px] h-[140px] w-[48.5%] border-2 border-[#c4bbab] bg-[#e8e1d2]">

                    <div className="absolute left-[25px] right-[22px] top-[24px] border-t border-dashed border-[#d1c6b4]" />

                    <div className="absolute left-[35px] right-[42px] top-[83px] border-t border-dashed border-[#d1c6b4]" />

                  </div>

                  {/* CENTER JOINT */}
                  <div className="absolute left-1/2 top-[28px] h-[140px] w-[20px] -translate-x-1/2 bg-[#d8d0c1]">

                    <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[#c5bcac]" />

                  </div>

                  {/* 1.5 MM MEASUREMENT */}
                  <div className="absolute left-1/2 top-[0px] flex -translate-x-1/2 items-center">

                    <span className="h-[1px] w-[22px] bg-[#9e531a]" />

                    <span className="mx-[5px] whitespace-nowrap text-[8px] font-bold text-[#9e531a]">
                      1.5 MM
                    </span>

                    <span className="h-[1px] w-[22px] bg-[#9e531a]" />

                  </div>

                  {/* ADHESIVE BED */}
                  <div className="absolute bottom-[-2px] left-0 right-0 h-[13px] bg-[#aaa9a5]" />

                  <span className="absolute bottom-[0px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[6px] uppercase tracking-[0.16em] text-white">
                    FLEXIBLE ELASTIC ADHESIVE BED
                  </span>

                </div>

              </div>

              {/* TECHNICAL INFORMATION */}
              <div className="mt-[25px] border-t border-[#c9c5bc] pt-[13px]">

                <div className="flex items-start justify-between">

                  <div className="text-[9px] uppercase leading-[1.7] tracking-[0.07em] text-[#555550]">

                    <div>
                      ASTM C627 HEAVY COMMERCIAL RATED
                    </div>

                    <div>
                      EXPANSION COEFFICIENT: 6.5 × 10⁻⁶ K⁻¹
                    </div>

                  </div>

                  <div className="text-right text-[9px] uppercase tracking-[0.07em] text-[#555550]">
                    TENSILE BOND STRENGTH: ≥ 2.5 N/MM²
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================
          SPECIFICATION TO SITE
      ========================== */}
      <section className="mx-auto max-w-[1185px] px-6 pb-[80px] md:px-0">

        <div className="border-t border-[#c9c5bc] pt-8">

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#914b18]">
                PROJECT LIFECYCLE INTEGRITY
              </p>

              <h2
                className="mt-3 text-[38px] tracking-[-0.025em] md:text-[40px]"
                style={{
                  fontFamily: '"Libre Baskerville", Georgia, serif',
                }}
              >
                THE SPECIFICATION-TO-SITE PROTOCOL
              </h2>

            </div>

            <span className="text-[10px] uppercase tracking-[0.08em] text-[#555550]">
              5-STAGE SEQUENTIAL FABRICATION TIMELINE
            </span>

          </div>

          <div className="mt-12 grid gap-4 xl:grid-cols-5">

            {protocol.map((item) => (

              <article
                key={item.number}
                className="border border-[#c9c5bc] bg-[#f7f4ec] p-4 md:p-5"
              >

                <div className="flex items-center justify-between">

                  <span
                    className="text-[27px] font-bold leading-none text-[#99511d]"
                    style={{
                      fontFamily: '"Libre Baskerville", Georgia, serif',
                    }}
                  >
                    {item.number}
                  </span>

                  <StageIcon type={item.icon} />

                </div>

                <h3
                  className="mt-5 min-h-[58px] text-[16px] leading-tight"
                  style={{
                    fontFamily: '"Libre Baskerville", Georgia, serif',
                  }}
                >
                  {item.title}
                </h3>

                <p className="mt-4 text-[12px] leading-5 text-[#555550]">
                  {item.text}
                </p>

                <div className="mt-5 border-t border-[#c9c5bc] pt-4">

                  <p className="text-[8px] uppercase tracking-[0.1em]">
                    OUTPUT ASSET:
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

      {/* =========================
          SUBSTRATE MATRIX
      ========================== */}
      <section className="mx-auto max-w-[1185px] px-6 pb-[80px] md:px-0">

        <div className="border-t border-[#c9c5bc] pt-8">

          <div className="grid gap-8 lg:grid-cols-[1fr_430px] lg:items-end">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#914b18]">
                STRUCTURAL INTEGRATION
              </p>

              <h2
                className="mt-3 text-[38px] tracking-[-0.025em] md:text-[35px]"
                style={{
                  fontFamily: '"Libre Baskerville", Georgia, serif',
                }}
              >
                SUBSTRATE COMPATIBILITY MATRIX
              </h2>

            </div>

            <p className="text-[14px] leading-6 text-[#555550]">
              Assess recommended adhesive mortar classifications, decoupling
              membranes, and expansion joint frequencies across critical base
              conditions.
            </p>

          </div>

          <div className="mt-10 overflow-x-auto border border-[#c9c5bc]">

            <table className="w-full min-w-[1000px] border-collapse text-left">

              <colgroup>

                <col style={{ width: "27.5%" }} />
                <col style={{ width: "18.5%" }} />
                <col style={{ width: "25%" }} />
                <col style={{ width: "17%" }} />
                <col style={{ width: "12%" }} />

              </colgroup>

              <thead>

                <tr className="bg-[#e5e2da] text-[10px] uppercase tracking-[0.08em]">

                  <th className="p-7">
                    SUBSTRATE CONDITION
                  </th>

                  <th className="p-7">
                    ADHESIVE SPECIFICATION
                  </th>

                  <th className="p-7">
                    DECOUPLING REQUIREMENT
                  </th>

                  <th className="p-7">
                    EXPANSION JOINT FREQUENCY
                  </th>

                  <th className="p-7">
                    COMPLIANCE STATUS
                  </th>

                </tr>

              </thead>

              <tbody>

                {substrateRows.map((row) => (

                 <tr
  key={row.condition}
  className="border-t border-[#dedbd3] odd:bg-[#f8f6ef] even:bg-[#f2efe7]"
>
                    <td className="p-7">

                      <div
                        className="text-[18px] leading-[1.55]"
                        style={{
                          fontFamily: '"Libre Baskerville", Georgia, serif',
                        }}
                      >
                        {row.condition}
                      </div>

                      <div className="mt-2 text-[10px] text-[#66645e]">
                        {row.note}
                      </div>

                    </td>

                    <td className="p-7">

                      <span className="inline-block bg-[#e6e3db] px-3 py-2 text-[10px]">
                        {row.adhesive}
                      </span>

                    </td>

                    <td className="p-7 text-[12px] leading-6 text-[#555550]">
                      {row.decoupling}
                    </td>

                    <td className="p-7 text-[12px] leading-5 text-[#555550]">
                      {row.joints}
                    </td>

                    <td className="p-7">

                      <span className="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#914b18]">
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

      {/* =========================
          CONSULTATION
      ========================== */}
      <section className="bg-[#2c2d29] px-6 py-[36px] text-[#f4f0e7] md:px-0">

        <div className="mx-auto grid max-w-[1185px] gap-12 lg:grid-cols-[465px_670px]">

          {/* LEFT */}
          <div>

            <SectionLabel dark>
              SPECIFIER DIRECT INTAKE
            </SectionLabel>

            <h2
              className="mt-6 text-[40px] leading-[0.98] tracking-[-0.03em] md:text-[35px]"
              style={{
                fontFamily: '"Libre Baskerville", Georgia, serif',
              }}
            >
              BESPOKE FABRICATION
              <br />
              CONSULTATION
            </h2>

            <p className="mt-7 text-[15px] leading-6 text-[#d1d0c9]">
              Submit your project documentation, CAD floorplans, or detailed
              elevations (.DWG / .PDF / .RVT). Our stone engineering team
              provides a structural buildability review, slab nesting plan,
              and guaranteed fabrication estimate within 24 hours.
            </p>

            <div className="mt-8 border border-[#6d6d67] bg-[#1d1f1e] p-7">

              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#df9556]">
                FAST-TRACK HOTLINE
              </p>

              <h3
                className="mt-3 text-[19px] font-bold"
                style={{
                  fontFamily: '"Libre Baskerville", Georgia, serif',
                }}
              >
                Bespoke Technical Studio
              </h3>

              <p className="mt-3 text-[13px] text-[#c7c6c0]">
                +39 02 8941 7720 // Milan Head 
                <br />Atelier
              </p>

              <div className="mt-5 text-[26px] text-[#ef9d5b]">
                🎧
              </div>

            </div>

          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={(event) => event.preventDefault()}
            className="border border-[#696963] bg-[#1e201f] p-7"
          >

            <div className="grid gap-4 md:grid-cols-2">

              <label className="text-[9px] font-semibold uppercase tracking-[0.1em]">
                ARCHITECT / SPECIFIER NAME

                <input
                  className="mt-2 h-[38px] w-full border border-[#70716b] bg-[#30312e] px-4 text-[11px] font-normal normal-case tracking-normal text-white outline-none placeholder:text-[#aaa9a2]"
                  placeholder="Elena Rossi"
                />

              </label>

              <label className="text-[9px] font-semibold uppercase tracking-[0.1em]">
                ARCHITECTURAL PRACTICE / STUDIO

                <input
                  className="mt-2 h-[38px] w-full border border-[#70716b] bg-[#30312e] px-4 text-[11px] font-normal normal-case tracking-normal text-white outline-none placeholder:text-[#aaa9a2]"
                  placeholder="Studio Architettura Rossi"
                />

              </label>

              <label className="text-[9px] font-semibold uppercase tracking-[0.1em]">
                PROFESSIONAL EMAIL

                <input
                  type="email"
                  className="mt-2 h-[38px] w-full border border-[#70716b] bg-[#30312e] px-4 text-[11px] font-normal normal-case tracking-normal text-white outline-none placeholder:text-[#aaa9a2]"
                  placeholder="e.rossi@studio-rossi.it"
                />

              </label>

              <label className="text-[9px] font-semibold uppercase tracking-[0.1em]">
                TARGET DELIVERY / INSTALL DATE

                <input
                  type="date"
                  className="mt-2 h-[38px] w-full border border-[#70716b] bg-[#30312e] px-4 text-[11px] tracking-normal text-white outline-none"
                />

              </label>

            </div>

            <fieldset className="mt-5">

              <legend className="text-[9px] font-semibold uppercase tracking-[0.1em]">
                FABRICATION SCOPE OF WORKS
              </legend>

              <div className="mt-2 grid gap-1 md:grid-cols-3">

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
                    className="flex h-[29px] items-center gap-2 border border-[#666761] bg-[#30312e] px-2 text-[10px] text-[#d7d5ce]"
                  >

                    <input
                      type="checkbox"
                      defaultChecked={index === 0 || index === 1}
                      className="h-3 w-3"
                    />

                    {item}

                  </label>

                ))}

              </div>

            </fieldset>

            <label className="mt-5 block text-[9px] font-semibold uppercase tracking-[0.1em]">

              DRAWING / PLAN UPLOAD (.DWG, .PDF, .RVT ≤ 100MB)

              <div className="mt-2 flex h-[135px] flex-col items-center justify-center border border-dashed border-[#777871] bg-[#30312e] text-center">

                <span className="text-[30px] leading-none text-[#ef9d5b]">
                  ⌘
                </span>

                <span
                  className="mt-2 text-[15px]"
                  style={{
                    fontFamily: '"Libre Baskerville", Georgia, serif',
                  }}
                >
                  DRAG ARCHITECTURAL FILES OR BROWSE
                </span>

                <span className="mt-2 text-[11px] font-normal normal-case tracking-normal text-[#aaa9a2]">
                  Encrypted direct upload to secure studio fabrication vault
                </span>

              </div>

            </label>

            <label className="mt-5 block text-[9px] font-semibold uppercase tracking-[0.1em]">

              PROJECT NOTES / SPECIFIC TOLERANCES

              <textarea
                rows="3"
                className="mt-2 h-[82px] w-full resize-none border border-[#70716b] bg-[#30312e] px-4 py-3 text-[11px] font-normal normal-case tracking-normal text-white outline-none placeholder:text-[#aaa9a2]"
                placeholder="Specify nominal slab thickness preferences (6mm/12mm/20mm), required slip resistance (R10/R11), or specific vein matching criteria..."
              />

            </label>

            <button
              type="submit"
              className="mt-4 h-[44px] w-full bg-[#a85b20] px-6 text-[16px] font-bold tracking-[0.02em] text-white transition hover:bg-[#bd6a29]"
              style={{
                fontFamily: '"Libre Baskerville", Georgia, serif',
              }}
            >
              TRANSMIT FOR 24-HOUR FEASIBILITY AUDIT →
            </button>

          </form>

        </div>
      </section>

      {/* =========================
          COMMON FOOTER
      ========================== */}
      <Footer />

    </main>
  );
}