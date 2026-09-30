export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-columns">

          {/* GLOBAL STUDIOS */}
          <div className="footer-column">
            <h2>GLOBAL STUDIOS</h2>

            <p>
              Architectural physical inspection
              <br />
              libraries and technical consultation
              <br />
              suites.
            </p>

            <div className="footer-addresses">
              <div>
                <strong>MILAN ATELIER</strong>
                <span>Via Solferino 18, Brera</span>
              </div>

              <div>
                <strong>LONDON SPEC LAB</strong>
                <span>Clerkenwell Road 92, EC1</span>
              </div>

              <div>
                <strong>NEW YORK GALLERY</strong>
                <span>Greene Street, SoHo</span>
              </div>
            </div>
          </div>

          {/* SUSTAINABILITY */}
          <div className="footer-column">
            <h2>SUSTAINABILITY &amp; EPD</h2>

            <p>
              Full lifecycle declarations and green
              <br />
              building qualification standards.
            </p>

            <div className="footer-table">
              <div>
                <span>EPD Certified Life-Cycle</span>
                <span>ISO 14025</span>
              </div>

              <div>
                <span>LEED v4.1 Credits</span>
                <span>EQ / MR</span>
              </div>

              <div>
                <span>Recycled Content Matrix</span>
                <span>Min. 42%</span>
              </div>

              <div>
                <span>Zero VOC Emissions</span>
                <span>A+ Rating</span>
              </div>
            </div>
          </div>

          {/* BIM / CAD */}
          <div className="footer-column">
            <h2>DIGITAL BIM / CAD</h2>

            <p>
              High-definition continuous surface
              <br />
              texture maps, seamless normals, and
              <br />
              technical assets.
            </p>

            <div className="footer-buttons">
              <button>
                <span>REVIT PARAMETRIC<br />ASSETS</span>
                <span>↓</span>
              </button>

              <button>
                <span>ARCHICAD MATERIAL<br />PACK</span>
                <span>↓</span>
              </button>

              <button className="muted">
                <span>8K SEAMLESS<br />TEXTURES</span>
                <span>▧</span>
              </button>
            </div>
          </div>

          {/* SPECIFIER */}
          <div className="footer-column">
            <h2>SPECIFIER DISPATCH</h2>

            <p>
              Curated quarterly architectural
              <br />
              dispatches on mineral extraction,
              <br />
              ceramic technology, and large-format
              <br />
              engineering.
            </p>

            <label>ARCHITECTURAL PRACTICE EMAIL</label>

            <input
              type="email"
              placeholder="name@architects-studio.com"
            />

            <button className="subscribe">
              SUBSCRIBE SPECIFIER
              <br />
              DISPATCH
            </button>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <div>
            © 2025 ATELIER SURFACES S.P.A.
            ARCHITECTURAL PORCELAIN &amp; STONE SLABS. ALL RIGHTS RESERVED.
          </div>

          <div className="footer-links">
            <a href="#">MATERIAL SAFETY (MSDS)</a>
            <a href="#">TERMS OF SPECIFICATION</a>
            <a href="#">PRIVACY MATRIX</a>
          </div>

        </div>

      </div>
    </footer>
  );
}               