import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../images/CSSALogo.png";
import '../style/NavigationBarStyle.css';

function NavigationBarView() {
    const [nav, setNav] = useState(false);
  
    const openNav = () => {
      setNav(!nav);
    };
  
    return (
      <>
        <nav>
          {/* mobile
          <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
            <div onClick={openNav} className="mobile-navbar__close">
              <i className="fa-solid fa-xmark"></i>
            </div>
            <ul className="mobile-navbar__links">
              <li>
                <Link onClick={openNav} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={openNav} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link onClick={openNav} to="/models">
                  Models
                </Link>
              </li>
              <li>
                <Link onClick={openNav} to="/testimonials">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link onClick={openNav} to="/team">
                  Our Team
                </Link>
              </li>
              <li>
                <Link onClick={openNav} to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}

          {/* mobile
            <div className="mobile-hamb" onClick={openNav}>
              <i className="fa-solid fa-bars"></i>
            </div> */}
          
          <div class= "navbar">
            <div class = "logo"> <a href="/">Web Dev Creative</a> </div>
            <ul class="links">
                <li><a href="/hero">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/event">Event</a></li>
                <li><a href="/contectUs">Contect Us</a></li>
                <li><a href="/More">More</a></li>
            </ul>
            <a href="#" className="action_btn">Get Started</a>
            <div class = "toggle_btn">
                <i class="fa-solid fa-bars"></i>
            </div>
          </div>
        </nav>
      </>
    );
  }



export default NavigationBarView;