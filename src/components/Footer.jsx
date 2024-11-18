import { FaTwitter, FaReddit, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-light d-flex flex-column  container px-5 mt-5">
      <div className="container flex-grow-1 d-flex flex-column justify-content-center">
        <div className="row flex-grow-1 gy-4 mt-5">
          {/* Social Media Icons */}
          <div className="col-md-4 d-flex align-items-stretch p-5 py-1 px-2">
            <div
              className="p-5 rounded-5 w-100 d-flex align-items-end justify-content-center "
              style={{ backgroundColor: "#322e74",border:"5px solid #342a9b" }}
            >
              <div className="d-flex justify-content-center gap-2">
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center rounded-circle bg-white  p-2 hover-bg-opacity-20"
                  style={{ width: "40px", height: "40px",border:"3px solid #342a9b" }}
                >
                  <FaTwitter  size={20} style={{color:"#342a9b"}}/>
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center rounded-circle bg-white  p-2 hover-bg-opacity-20"
                  style={{ width: "40px", height: "40px", border:"3px solid #342a9b" }}
                >
                  <FaReddit  size={20}style={{color:"#342a9b"}} />
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center rounded-circle bg-white  p-2 hover-bg-opacity-20"
                  style={{ width: "40px", height: "40px",border:"3px solid #342a9b" }}
                >
                  <FaYoutube  size={20} style={{color:"#342a9b"}}/>
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center rounded-circle bg-white p-2 hover-bg-opacity-20"
                  style={{ width: "40px", height: "40px" ,border:"3px solid #342a9b"}}
                >
                  <FaTiktok style={{color:"#342a9b"}} size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Combined Links (Boxes + Quick Links) */}
          <div className="col-md-8 d-flex align-items-stretch py-1 px-0" >
            <div className="p-4 w-100 rounded-5" style={{ backgroundColor: "#322e74",border:"5px solid #352a9d" }}>
              <div className="row">
                {/* Boxes Links */}
                <div className="col-md-6 px-5">
                  <h2 
                  style={{
                    fontFamily: 'Luckiest Guy, sans-serif',
                    WebkitTextStroke: '1px #3f51b5',
                  }}className="h5 mb-3 mt-4 fs-2 fw-bold fst-italic">Boxes</h2>
                  <ul className="list-unstyled ">
                    {["POKEMON", "YU-GI-OH!", "MAGIC", "NBA", "NFL", "MLB"].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-light  fst-italic text-decoration-none d-block mb-2 hover-opacity-75" style={{
                          fontFamily: 'Luckiest Guy'
                        }}>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Quick Links */}
                <div className="col-md-6 px-4">
                  <h2
                  style={{
        
        fontFamily: 'Luckiest Guy, sans-serif',
        WebkitTextStroke: '1px #3f51b5',
      }} 
                  className="h5 mb-3 mt-4 fs-2 fw-bold fst-italic">Quick LINKS</h2>
                  <ul className="list-unstyled">
                    {["BLOGS", "FAQS", "CONTACT US"].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-light fw-bold fst-italic text-decoration-none d-block mb-2 hover-opacity-75">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-5 mb-5 mt-2 py-3 " style={{backgroundColor:"#322e74" ,border:"5px solid #352a9d"}}>
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center px-5">
          <p className="mb-2 mb-md-0 px-5   ">Digital Artisan © 2024. All rights reserved.</p>
          <div className="d-flex gap-5 px-5">
            <a href="#" className="text-light text-decoration-none hover-opacity-75 ">
              TERMS
            </a>
            <a href="#" className="text-light text-decoration-none hover-opacity-75">
              PRIVACY
            </a>
            <a href="#" className="text-light text-decoration-none hover-opacity-75">
              COOKIES
            </a>
          </div>
        </div>
      </div>
      </div>

      {/* Bottom Bar */}
     
    </footer>
  );
}
