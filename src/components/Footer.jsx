export default function Footer() {
  return (
    <footer className="bg-[#f5f2ea]">

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-[1185px] px-6 pb-12 pt-12 lg:px-0">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* =====================================================
              GLOBAL STUDIOS
          ===================================================== */}

          <div>

            <h2 className="font-serif text-[20px] font-semibold leading-none tracking-[-0.025em] text-[#292822]">
              GLOBAL STUDIOS
            </h2>

            <p className="mt-4 max-w-[245px] text-[12px] leading-[1.65] text-[#56524b]">
              Architectural physical inspection libraries
              <br />
              and technical consultation suites.
            </p>

            <div className="mt-4 border-l border-[#d2cdc2] pl-2">

              <div className="font-serif text-[10px] tracking-[0.08em] text-[#45423c]">
                MILAN ATELIER
              </div>

              <div className="mt-[2px] text-[11px] leading-5 text-[#5f5b54]">
                Via Solferino 18, Brera
              </div>


              <div className="mt-2 font-serif text-[10px] tracking-[0.08em] text-[#45423c]">
                LONDON SPEC
              </div>

              <div className="mt-[2px] text-[11px] leading-5 text-[#5f5b54]">
                Clerkenwell Road 92, EC1
              </div>


              <div className="mt-2 font-serif text-[10px] tracking-[0.08em] text-[#45423c]">
                NEW YORK GALLERY
              </div>

              <div className="mt-[2px] text-[11px] leading-5 text-[#5f5b54]">
                Greene Street, SoHo
              </div>

            </div>

          </div>


          {/* =====================================================
              SUSTAINABILITY & EPD
          ===================================================== */}

          <div>

            <h2 className="font-serif text-[20px] font-semibold leading-none tracking-[-0.025em] text-[#292822]">
              SUSTAINABILITY & EPD
            </h2>

            <p className="mt-4 max-w-[245px] text-[12px] leading-[1.65] text-[#56524b]">
              Full lifecycle declarations and green
              <br />
              building qualification standards.
            </p>


            <div className="mt-4">

              <div className="flex items-center justify-between border-b border-[#ddd8ce] py-[7px]">

                <span className="text-[10px] text-[#5f5b54]">
                  EPD Certified Life-Cycle
                </span>

                <span className="font-serif text-[10px] text-[#4c4942]">
                  ISO 14025
                </span>

              </div>


              <div className="flex items-center justify-between border-b border-[#ddd8ce] py-[7px]">

                <span className="text-[10px] text-[#5f5b54]">
                  LEED v4.1 Credits
                </span>

                <span className="font-serif text-[10px] text-[#4c4942]">
                  EQ / MR
                </span>

              </div>


              <div className="flex items-center justify-between border-b border-[#ddd8ce] py-[7px]">

                <span className="text-[10px] text-[#5f5b54]">
                  Recycled Content Matrix
                </span>

                <span className="font-serif text-[10px] text-[#4c4942]">
                  Min. 42%
                </span>

              </div>


              <div className="flex items-center justify-between py-[7px]">

                <span className="text-[10px] text-[#5f5b54]">
                  Zero VOC Emissions
                </span>

                <span className="font-serif text-[10px] text-[#4c4942]">
                  A+ Rating
                </span>

              </div>

            </div>

          </div>


          {/* =====================================================
              DIGITAL BIM / CAD
          ===================================================== */}

          <div>

            <h2 className="font-serif text-[20px] font-semibold leading-none tracking-[-0.025em] text-[#292822]">
              DIGITAL BIM / CAD
            </h2>

            <p className="mt-4 max-w-[250px] text-[12px] leading-[1.65] text-[#56524b]">
              High-definition continuous surface texture
              maps, seamless normals, and technical
              assets.
            </p>


            <div className="mt-4 flex flex-col gap-1">

              <button
                type="button"
                className="flex h-[35px] w-full items-center justify-between border border-[#ddd8ce] bg-[#faf8f3] px-3 transition-colors hover:bg-[#ebe7de]"
              >

                <span className="font-serif text-[9px] font-semibold tracking-[0.12em]">
                  REVIT PARAMETRIC ASSETS
                </span>

                <span className="text-[14px]">
                  ↓
                </span>

              </button>


              <button
                type="button"
                className="flex h-[35px] w-full items-center justify-between border border-[#ddd8ce] bg-[#faf8f3] px-3 transition-colors hover:bg-[#ebe7de]"
              >

                <span className="font-serif text-[9px] font-semibold tracking-[0.12em]">
                  ARCHICAD MATERIAL PACK
                </span>

                <span className="text-[14px]">
                  ↓
                </span>

              </button>


              <button
                type="button"
                className="flex h-[35px] w-full items-center justify-between border border-[#ddd8ce] bg-[#faf8f3] px-3 transition-colors hover:bg-[#ebe7de]"
              >

                <span className="font-serif text-[9px] font-semibold tracking-[0.12em]">
                  8K SEAMLESS TEXTURES
                </span>

                <span className="text-[14px]">
                  ▣
                </span>

              </button>

            </div>

          </div>


          {/* =====================================================
              SPECIFIER DISPATCH
          ===================================================== */}

          <div>

            <h2 className="font-serif text-[20px] font-semibold leading-none tracking-[-0.025em] text-[#292822]">
              SPECIFIER DISPATCH
            </h2>

            <p className="mt-4 max-w-[250px] text-[12px] leading-[1.65] text-[#56524b]">
              Curated quarterly architectural dispatches
              on mineral extraction, ceramic technology,
              and large-format engineering.
            </p>


            <div className="mt-4">

              <label className="font-serif text-[9px] font-semibold tracking-[0.14em] text-[#4b4841]">
                ARCHITECTURAL PRACTICE EMAIL
              </label>

              <input
                type="email"
                placeholder="name@architects-studio.com"
                className="mt-2 h-[38px] w-full border border-[#c9c4ba] bg-[#fffefa] px-3 text-[10px] text-[#3f3c36] outline-none placeholder:text-[#aaa59b] focus:border-[#995021]"
              />

            <button
  type="button"
  className="mt-1 h-[34px] w-full bg-[#050505] font-serif text-[8px] font-semibold tracking-[0.09em] text-white transition-colors hover:bg-[#995021]"
>
  SUBSCRIBE SPECIFIER DISPATCH
</button>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div className="border-t border-[#d8d3c8]">

        <div className="mx-auto flex max-w-[1185px] flex-col justify-between gap-3 px-6 py-5 text-[7px] uppercase tracking-[0.13em] text-[#77736b] md:flex-row lg:px-0">

          <span>
            © 2025/26 ATELIER SURFACES
          </span>

          <div className="flex gap-5">

            <span>
              MATERIAL SAFETY (MSDS)
            </span>

            <span>
              PRIVACY
            </span>

            <span>
              TERMS
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}