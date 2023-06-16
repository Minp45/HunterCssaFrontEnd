import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../images/hunter CSSA.png";
import '../style/NavigationBarStyle.css';

function NavigationBarView() {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        setNav(!nav);
    };


    return (
        <>
            <nav>
                <div class="navbar">
                    <div className="__img">
                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                            <img src={Logo} alt="logo-img" />
                        </Link>
                    </div>
                    <ul class="links bold timeNew">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/event">Event</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/more">More</a></li>
                    </ul>
                    <a href="/loginIn" className="action_btn shadow">Login</a>
                    <div class="mobile-hamb">
                        <i class="fa-solid fa-bars" onClick={openNav}></i>
                    </div>
                </div>
                <div className={`sidenav ${nav ? "open-nav" : ""}`}>
                    <div onClick={openNav} className="sidenav__close">
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <ul class=".sidenav__link center">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/event">Event</a></li>
                        <li><a href="/contact">Contect Us</a></li>
                        <li><a href="/more">More</a></li>
                    </ul>
                </div>

            </nav>
        </>
    );
}



export default NavigationBarView;