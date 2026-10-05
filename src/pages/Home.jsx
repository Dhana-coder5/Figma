import { Link } from "react-router-dom";
import { useState } from "react";

const materials = [
  {
    category: "SEDIMENTARY BRECCIA",
    badge: "12MM RECTIFIED",
    location: "LOMBARDY SPECIMEN",
    code: "CPG-901",
    name: "CEPPO DI GRÉ BRECCIA",
    description:
      "Signature sedimentary rock with characteristic rounded dolomitic aggregate and mineral depth.",
    finish: "HONED MATTE • INDOOR & FACADE",
    image: "/images/lineage-01.jpg",
    badgeStyle: "black",
  },
  {
    category: "APUAN MARBLE MATERIAL",
    badge: "BOOKMATCH A+B",
    location: "CARRARA BASIN",
    code: "CVO-410",
    name: "CALACATTA VAGLI ORO",
    description:
      "Continuous bookmatched veining with subtle amber-gold crystallization across the slab.",
    finish: "HONED SATIN • 6MM & 12MM",
    image: "/images/lineage-02.jpg",
    badgeStyle: "copper",
  },
  {
    category: "3D ARCHITECTURAL RELIEF",
    badge: "WALL MONOLITHIC",
    location: "FRIULI CALCAREOUS",
    code: "PPF-208",
    name: "PIETRA PIASENTINA FLUTED",
    description:
      "Linear 12mm fluted tactile relief with crystalline calcite inclusions. Designed for architectural walls.",
    finish: "FLUTED CANE • ACOUSTIC MATTE",
    image: "/images/lineage-03.jpg",
    badgeStyle: "black",
  },
  {
    category: "EXTRUSIVE VOLCANIC",
    badge: "20MM STRUCTURAL",
    location: "VITERBO BASALT",
    code: "BLS-064",
    name: "BASALTINA LAVA STONE",
    description:
      "Bush-hammered volcanic stone engineered for high-traffic wet areas and demanding exterior use.",
    finish: "BUSH-HAMMERED • R11 FRICTION",
    image: "/images/lineage-04.jpg",
    badgeStyle: "black",
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

const performanceItems = [
  {
    label: "DIMENSION SCALE",
    value: "1600×3200",
    title: "Monolithic Slab Envelope",
    text:
      "Zero-joint continuity for unbroken vertical facades, expansive kitchen monolithic islands, and floor-to-ceiling bath cladding.",
  },
  {
    label: "HYDROPHOBIC PERFORMANCE",
    value: "< 0.05%",
    title: "Porous Absorption Barrier",
    text:
      "Fully vitrified dense porcelain matrix impervious to citrus acids, wine tannins, pooling water, and cryogenic thermal shock.",
  },
  {
    label: "TRACTION STANDARD",
    value: "R11 / 45+",
    title: "PTV Pendulum Coefficient",
    text:
      "Engineered surface roughness imparting supreme anti-slip friction while maintaining smooth, velvety barefoot tactile comfort.",
  },
  {
    label: "ECOLOGICAL LIFECYCLE",
    value: "100%",
    title: "Circular Recycled Minerals",
    text:
      "Manufactured in closed-loop water recirculation kilns with zero post-industrial waste and full EPD verification per ISO 14025.",
  },
];

function ImagePlaceholder({
  src,
  alt = "",
  label = "",
  className = "",
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 bg-[#d8d4cb]" />
      )}

      {label && (
        <div className="absolute bottom-4 left-4 border border-[#24231f]/20 bg-[#f5f2ea]/90 px-3 py-2">
          <span className="text-[8px] font-semibold tracking-[0.16em] text-[#45423c]">
            {label}
          </span>
        </div>
      )}
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

function MaterialCard({ material }) {
  return (
    <article className="group overflow-hidden bg-[#faf8f3]">
      <div className="relative aspect-[0.8/1] overflow-hidden bg-[#ddd8ce]">
        <img
          src={material.image}
          alt={material.name}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
        />

        <div className="absolute left-3 top-3 bg-[#f7f4ed]/95 px-2 py-[8px]">
          <span className="font-serif text-[9px] tracking-[0.08em] text-[#3c3933]">
            {material.category}
          </span>
        </div>

        <div
          className={`absolute right-3 top-3 px-3 py-[9px] ${
            material.badgeStyle === "copper"
              ? "bg-[#995021]"
              : "bg-[#11110f]"
          }`}
        >
          <span className="font-serif text-[9px] font-semibold tracking-[0.11em] text-white">
            {material.badge}
          </span>
        </div>
      </div>

      <div className="px-4 pb-4 pt-4">
        <div className="flex items-center justify-between gap-3">
          <span className="font-serif text-[9px] uppercase tracking-[0.11em] text-[#56524a]">
            {material.location}
          </span>

          <span className="whitespace-nowrap font-serif text-[8px] font-semibold uppercase tracking-[0.12em] text-[#96501f]">
            REF: {material.code}
          </span>
        </div>

        <h3 className="mt-2 font-serif text-[19px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#26251f]">
          {material.name}
        </h3>

        <p className="mt-2 min-h-[45px] text-[10px] leading-[1.7] text-[#5f5b54]">
          {material.description}
        </p>

        <div className="mt-4 flex items-end justify-between border-t border-[#e0dcd3] pt-3">
          <span className="max-w-[185px] font-serif text-[8px] font-semibold uppercase leading-[1.6] tracking-[0.13em] text-[#4b4841]">
            {material.finish}
          </span>

          <button
            type="button"
            aria-label={`View ${material.name}`}
            className="flex h-[32px] w-[32px] shrink-0 items-center justify-center bg-[#ebe7de] text-[21px] font-light leading-none text-[#302e29] transition-colors hover:bg-[#995021] hover:text-white"
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}

function SpatialApplicationMatrix() {
  const [activeProgram, setActiveProgram] = useState(0);
  const [jointWidth, setJointWidth] = useState(1.5);

  const programs = [
    {
      title: "MASTER BATHROOM SUITE",
      material:"Travertine & Fluted",
      program:"PRIVATE WELLNESS SUITE",
      surface:"NAVONA ROMAN TRAVERTINE &",
      secondLine:"RIBBED FLUTING",
      gauge:(
        <>
        12MM WALL / 20MM
        <br />
        VANITY
        </>

      ),
      image:"/images/home-hero.jpg",

    },
    {
      title:"HOTEL LOBBY MONOLITH",
      material:"Ceppo di Gre Breccia",
      program:"HOSPITALITY LOBBY",
      surface:"CEPPO DI GRÉ BRECCIA",
      secondLine:"MONOLITHIC WALL SYSTEM",
      gauge:(
        <>
        12MM WALL /
        <br />
        20MM FLOOR
        </>
      ),
      image:"/images/home-hero.jpg",
    },
    {
      title:"MINIMMALIST KITCHEN ISLAND",
      material:"Calacatta Ora Slab",
      program :"PRIVATE RESIDENCE",
      surface:"CALACATTA ORO",
      secondLine:"MONOLITHIC ISLAND",
      gauge:(
        <>
        12MM TOP /
        <br />
        20MM EDGE
        </>
      ),
      image:"/images/home-hero.jpg",

    },

  ];
  const active = programs[activeProgram];
  const jointPositions =[
    {
      value:1,
      label:"1.0mm Minimal Dry-Stack",
    },
     {
      value: 2.5,
      label: "2.5mm Standard",
    },
    {
      value: 5,
      label: "5.0mm Heritage Joint",
    },

  ]
  return(
    <div className="grid gap-6 lg:grid-cols-[464px_1fr]">
      <div className="flex flex-col">

        {/* HEADER */}
        <div>

          <SectionLabel>
            INTERACTIVE SPEC VISUALIZER
          </SectionLabel>

          <h2 className="max-w-[440px] font-serif text-[38px] leading-[1.02] tracking-[-0.035em] sm:text-[40px]">
            SPATIAL APPLICATION
            <br />
            MATRIX
          </h2>

          <p className="mt-5 max-w-[455px] text-[13px] leading-[1.8] text-[#4e4b45]">
            Preview monolithic porcelain and fluted stoneware transitions
            across signature architectural programs with calculated grout
            margins.
          </p>

        </div>


        {/* PROGRAM SELECTOR */}
        <div className="mt-5 flex flex-col gap-[4px]">

          {programs.map((program, index) => {
            const selected = activeProgram === index;

            return (
              <button
                key={program.title}
                type="button"
                onClick={() => setActiveProgram(index)}
                className={`flex min-h-[35px] w-full items-center justify-between px-[9px] text-left transition-colors ${
                  selected
                    ? "bg-black text-white"
                    : "bg-[#e9e6df] text-[#3a3833] hover:bg-[#dedad1]"
                }`}
              >

                <span className="flex items-center gap-3">

                  <span className="text-[12px] leading-none">
                    {index === 0 && "♨"}
                    {index === 1 && "▦"}
                    {index === 2 && "⌑"}
                  </span>

                  <span className="font-serif text-[9px] font-semibold tracking-[0.13em]">
                    {program.title}
                  </span>

                </span>

                <span
                  className={`font-serif text-[8px] tracking-[0.06em] ${
                    selected
                      ? "text-white/80"
                      : "text-[#5d5952]"
                  }`}
                >
                  {program.material}
                </span>

              </button>
            );
          })}

        </div>


        {/* JOINT WIDTH CONTROL */}
        <div className="mt-7 bg-[#f1eee6] px-4 py-5">

          <div className="flex items-center justify-between">

            <span className="font-serif text-[9px] font-semibold tracking-[0.13em]">
              ARCHITECTURAL JOINT WIDTH
            </span>

            <span className="font-serif text-[10px] font-semibold tracking-[0.04em] text-[#995021]">
              {jointWidth.toFixed(1)} MM{" "}
              {jointWidth === 1.5 ? "(Rectified)" : ""}
            </span>

          </div>


          {/* SLIDER */}
          <div className="relative mt-5">

            <div className="h-[4px] w-full bg-[#dfdcd4]" />

            <input
              type="range"
              min="1"
              max="5"
              step="0.5"
              value={jointWidth}
              onChange={(event) =>
                setJointWidth(Number(event.target.value))
              }
              className="absolute inset-0 h-[4px] w-full cursor-pointer appearance-none bg-transparent"
              aria-label="Architectural joint width"
            />

            <div
              className="pointer-events-none absolute left-0 top-0 h-[4px] bg-[#24231f]"
              style={{
                width: `${((jointWidth - 1) / 4) * 100}%`,
              }}
            />

            <div
              className="pointer-events-none absolute top-1/2 h-[12px] w-[12px] -translate-y-1/2 rounded-full border-2 border-[#24231f] bg-[#f5f2ea]"
              style={{
                left: `calc(${((jointWidth - 1) / 4) * 100}% - 6px)`,
              }}
            />

          </div>


          {/* SLIDER LABELS */}
          <div className="mt-4 grid grid-cols-3 text-[8px] text-[#625f58]">

            {jointPositions.map((position, index) => (
              <button
                key={position.label}
                type="button"
                onClick={() => setJointWidth(position.value)}
                className={`text-left transition-colors ${
                  index === 1
                    ? "text-center"
                    : index === 2
                    ? "text-right"
                    : ""
                } ${
                  jointWidth === position.value
                    ? "font-semibold text-[#24231f]"
                    : ""
                }`}
              >
                {position.label}
              </button>
            ))}

          </div>

        </div>


        {/* BOTTOM ACTIONS */}
        <div className="mt-7 flex items-center justify-between gap-4">

          <button
            type="button"
            className="group text-left"
          >
            <span className="font-serif text-[9px] font-semibold tracking-[0.16em] text-[#995021]">
              ENGINEERING CONSULTATION &
            </span>

            <br />

            <span className="font-serif text-[9px] font-semibold tracking-[0.16em] text-[#995021]">
              FABRICATION
            </span>

            <span className="ml-2 inline-block text-[16px] text-[#995021] transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </button>


          <button
            type="button"
            className="flex h-[47px] min-w-[151px] items-center justify-center gap-3 bg-[#ebe7de] px-4 font-serif text-[9px] font-semibold tracking-[0.12em] transition-colors hover:bg-[#dedad1]"
          >
            <span className="text-[14px]">
              ↓
            </span>

            <span>
              BIM SPECS
              <br />
              (.RFA)
            </span>
          </button>

        </div>

      </div>


      {/* =================================================
          RIGHT IMAGE
      ================================================= */}

      <div className="relative min-h-[500px] overflow-hidden bg-[#d8d2c7]">

        <img
          src={active.image}
          alt={active.surface}
          className="absolute inset-0 h-full w-full object-cover object-center"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />


        {/* IMAGE OVERLAY */}
        <div className="absolute bottom-4 left-4 right-4 bg-[#f5f2ea] px-4 py-4 sm:px-5">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            {/* PROGRAM / MATERIAL */}
            <div>

              <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#995021]">
                PROGRAM: {active.program}
              </div>

              <h3 className="mt-2 max-w-[360px] font-serif text-[18px] font-semibold leading-[1.15] tracking-[-0.015em] text-[#25241f]">
                {active.surface}
                <br />
                {active.secondLine}
              </h3>

            </div>


            {/* GAUGE + DOSSIER */}
            <div className="flex shrink-0 items-center gap-4">

              <div className="text-right">

                <div className="text-[8px] font-semibold uppercase tracking-[0.13em] text-[#736f67]">
                  NOMINAL GAUGE
                </div>

                <div className="mt-1 font-serif text-[9px] font-semibold uppercase leading-[1.35] tracking-[0.1em] text-[#25241f]">
                  {active.gauge}
                </div>

              </div>


              <button
                type="button"
                className="flex h-[40px] w-[90px] items-center justify-center bg-black px-3 text-left text-white transition-colors hover:bg-[#995021]"
              >
                <span className="font-serif text-[8px] font-semibold leading-[1.4] tracking-[0.14em]">
                  FULL
                  <br />
                  DOSSIER
                </span>
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
export default function Home() {

  return (
    <main className="bg-[#f5f2ea]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="mx-auto max-w-[1185px] px-6 pb-14 pt-16 sm:px-8 lg:px-0 lg:pt-20">

        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT */}
          <div>

            <SectionLabel>
              ARCHITECTURAL MINERAL ARCHIVE • EDITION 25/26
            </SectionLabel>

            <h1 className="max-w-[560px] font-serif text-[48px] leading-[0.96] tracking-[-0.045em] sm:text-[56px] lg:text-[62px]">
              SURFACES AS
              <br />
              PURE
              <br />
              ARCHITECTURE
            </h1>

            <p className="mt-8 max-w-[600px] text-base leading-[1.8] tracking-[0.01em] text-text-secondary lg:text-[17px]">
              Ultra-large format porcelain stoneware, bookmatched Italian
              marbles, and handcrafted colcanic ceramics engineered for
              monnumental residential and hospitality interiors..
            </p>

            <div className="mt-7 flex flex-nowrap items-center gap-3 overflow-visible">

              <button
                type="button"
                className="flex h-[48px] w-[245px] flex-none items-center justify-center whitespace-nowrap bg-black px-5 text-[10px] font-semibold tracking-[0.08em] text-white transition-all duration-300 hover:bg-[#96501f]"
              >
                <span>
                  EXPLORE 2025/2026 ARCHIVE
                </span>

                <span className="ml-4 text-[17px]">
                  →
                </span>
              </button>

              <button
                type="button"
                className="flex h-[50px] flex-none items-center justify-center whitespace-nowrap bg-material px-7 text-[11px] tracking-[0.06em] text-text-primary transition-all duration-300 hover:bg-secondary"
              >
                <span className="mr-2">
                  ▣
                </span>

                REQUEST PHYSICAL SWITCH BOX
              </button>

            </div>

            <div className="mt-8 bg-[#f1eee6] px-4 py-4 sm:px-5">

              <div className="grid grid-cols-2">

                <div className="border-r border-[#d7d2c8] pr-4">
                  <div className="font-serif text-[9px] uppercase tracking-[0.12em] text-[#55514a]">
                    CONTINUOUS FORMAT
                  </div>

                  <div className="mt-2 font-serif text-[18px] font-semibold tracking-[-0.02em]">
                    3200 × 1600 MM
                  </div>
                </div>

                <div className="pl-4">
                  <div className="font-serif text-[9px] uppercase tracking-[0.12em] text-[#55514a]">
                    CALIBRATED GAUGE
                  </div>

                  <div className="mt-2 font-serif text-[18px] font-semibold tracking-[-0.02em]">
                    6MM / 12MM / 20MM
                  </div>
                </div>

              </div>

              <div className="mt-4 border-t border-[#d7d2c8] pt-4">

                <div className="font-serif text-[9px] uppercase tracking-[0.12em] text-[#55514a]">
                  LEED QUALIFICATION
                </div>

                <div className="mt-1 font-serif text-[18px] font-semibold text-[#96501f]">
                  MR + EQ ELIGIBLE
                </div>

              </div>

            </div>

          </div>


          {/* RIGHT HERO IMAGE */}
          <div className="relative">

            <ImagePlaceholder
              src="/images/home-hero.jpg"
              alt="Architectural mineral surface interior"
              className="aspect-[1.08/1.15] w-full"
            />

            <div className="absolute bottom-4 left-4 right-4 bg-[#f5f2ea] px-5 py-4 shadow-sm">

              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

                <div>

                  <div className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#8e4c21]">
                    SPEC REFERENCE: ATH-8820
                  </div>

                  <div className="mt-2 font-sans text-[16px] font-medium leading-snug text-black">
                    Honed Roman Navona Travertine &
                    <br />
                    Fluted Ribbing
                  </div>

                </div>

                <div className="flex gap-2">

                  <span className="bg-[#ebe8df] px-3 py-2 text-[8px] font-bold tracking-[0.15em]">
                    BOOKMATCHED
                  </span>

                  <span className="bg-[#ebe8df] px-3 py-2 text-[8px] font-bold tracking-[0.15em]">
                    V2 VEIN
                    <br />
                    CONTROL
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PERFORMANCE STRIP
      ===================================================== */}

      <section className="bg-[#292923] text-[#f5f2ea]">

        <div className="mx-auto grid max-w-[1450px] grid-cols-1 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">

          {performanceItems.map((item, index) => (
            <div
              key={item.label}
              className={`border-white/20 px-5 py-8 lg:px-7 ${
                index < 3
                  ? "border-b sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >

              <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#c6bfb2]">
                {item.label}
              </div>

              <div className="mt-4 font-serif text-[48px] leading-none">
                {item.value}
              </div>

              <h3 className="mt-5 font-sans text-[16px] font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-[12px] leading-6 text-[#bbb7ae]">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* =====================================================
          MATERIAL LINEAGE ARCHIVE
      ===================================================== */}

      <section className="mx-auto max-w-[1185px] px-6 pb-20 pt-16 lg:px-0">

        {/* SECTION HEADER */}
        <div className="grid items-end gap-8 border-b border-[#d5d0c5] pb-7 lg:grid-cols-[1.15fr_0.85fr]">

          <div>

            <SectionLabel>
              CURATED SPECIMEN SERIES
            </SectionLabel>

            <h2 className="font-serif text-[42px] leading-[0.98] tracking-[-0.035em] sm:text-[48px] lg:text-[52px]">
              MATERIAL LINEAGE ARCHIVE
            </h2>

          </div>

          <p className="max-w-[445px] justify-self-end text-[14px] leading-[1.65] tracking-[0.005em] text-[#4f4c46]">
            Geologically faithful stone extractions and rectified large-format
            porcelain slabs categorized by mineral composition and architectural
            relief.
          </p>

        </div>


        {/* MATERIAL CARDS */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {materials.map((material) => (
            <MaterialCard
              key={material.code}
              material={material}
            />
          ))}

        </div>

      </section>


      {/* =====================================================
          SPATIAL APPLICATION MATRIX
      ===================================================== */}

      <section className="bg-[#f5f2ea] py-0">

        <div className="mx-auto max-w-[1185px] bg-[#fffefa] px-7 py-6 sm:px-8 lg:px-7 lg:py-6">

         {  /*   <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

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

              {applications.map((item, index) => (
                <div
                  key={item.number}
                  className={`border-r border-[#d1ccc1] p-7 ${
                    index < 2 ? "border-b" : ""
                  }`}
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

            </div   

          </div>
        */}
        <SpatialApplicationMatrix />

        </div>

      </section>


      {/* =====================================================
          PORCELAIN VS QUARRIED BLOCK  -- session 3 on home 
      ===================================================== */}

      <section className="bg-[#f5f2ea] ">
        <div className ="mx-auto max-w-[1185px] px-6 py-16 lg:px-0">

        <div className="grid gap-8 lg:grid-cols-[480px_1fr]">

          {/*   Left allignment */}

          <div>
        
            <SectionLabel>
              ENGINEERING COMPARISON
            </SectionLabel>

           <h2 className="max-w-[470px] font-serif text-[40px] leading-[1.03] tracking-[-0.04em] sm:text-[44px]">
              MINERAL PORCELIAN VS.
              <br />
               QUARRIED BLOCK
            </h2>

            <p className="mt-6 max-w-[465px] text-[13px] leading-[1.75] text-[#4f4c46]">
                While natural unsealed quarry stone remains prone to iron
          oxidation, deep organic staining, and fracture cleavage,
          Atelier engineered porcelain combines authentic geological
          aesthetics with zero chemical sensitivity and calibrated
          0.2mm precision tolerances.
            </p>

      <div className="mt-5 overflow-hidden">
          <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-[#e8e4dc]">

      

              <div className="px-2 py-3 font-serif text-[9px] font-semibold tracking-[0.14em] text-[#59564f]">
                  PARAMETER
                  </div>

                <div className="px-2 py-3 text-center font-serif text-[9px] font-semibold tracking-[0.12em] text-[#995021]">
                  ATELIER SLABS
                </div>

                <div className="px-2 py-3 text-center font-serif text-[9px] font-semibold tracking-[0.1em] text-[#59564f]">
                  
                  RAW QUARRY STONE
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

              <button
                type="button"
                className="border border-[#aaa59a] px-7 py-4 text-[9px] font-semibold tracking-[0.12em] transition hover:bg-[#f5f2ea] hover:text-[#20201c]"
              >
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

              <div>
                Technical Assets
              </div>

              <div>
                Sample Box
              </div>

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