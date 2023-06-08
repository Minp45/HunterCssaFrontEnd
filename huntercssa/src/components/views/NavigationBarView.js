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
                    <ul class="links">
                        <li><a href="/hero">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/event">Event</a></li>
                        <li><a href="/contectUs">Contect Us</a></li>
                        <li><a href="/More">More</a></li>
                    </ul>
                    <a href="/getStarted" className="action_btn">Get Started</a>
                    <div class="toggle_btn">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </div>
                <div>
                    <ul class="links">
                        <li><a href="/hero">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/event">Event</a></li>
                        <li><a href="/contectUs">Contect Us</a></li>
                        <li><a href="/More">More</a></li>
                    </ul>
                </div>

            </nav>
        </>
    );
}



export default NavigationBarView;