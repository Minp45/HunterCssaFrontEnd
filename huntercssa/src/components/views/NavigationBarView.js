import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../images/hunter CSSA.png";
import '../style/NavigationBarStyle.css';

function NavigationBarView() {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        document.getElementById("mySidenav").style.width = "100%";
    };

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
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
                        <li><a href="/contectUs">Contect Us</a></li>
                        <li><a href="/More">More</a></li>
                    </ul>
                    <a href="/loginIn" className="action_btn shadow">Login</a>
                    <div class="toggle_btn">
                        <i class="fa-solid fa-bars" onClick={openNav}></i>
                    </div>
                </div>
                <div id="mySidenav" className="sidenav">
                    <ul class="links">
                        <li><a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a><a href="#">About</a></li>
                        <li><a href="/hero">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/event">Event</a></li>
                        <li><a href="/contectUs">Contect Us</a></li>
                        <li><a href="/More">More</a></li>
                        <li><a href="/loginIn" className="action_btn">Login</a></li>
                    </ul>
                </div>

            </nav>
        </>
    );
}



export default NavigationBarView;