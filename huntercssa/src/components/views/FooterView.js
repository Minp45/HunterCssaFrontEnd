import wechat from "../../images/wechat-logo.png";
import ins from "../../images/ins-logo.png";
import '../style/FooterStyle.css';

const FooterView = () => {
    return (
        <>
            <footer>
                <div class="container">
                    <div class="footer-content">
                        <ul class="footer-1">
                            <li class="footer-1-child-1">Hunter CSSA</li>
                            <li class="footer-1-child-2">Feel free to reach out to us!</li>
                            <a href="mailto: HunterCSSA@Hunter.CUNY.edu" className="email-link">
                                <i className="fa-solid fa-envelope"> </i> &nbsp; HunterCSSA@Hunter.CUNY.edu
                            </a>
                        </ul>

                        <ul class="footer-1">
                            <li class="footer-1-child-1">Subscription</li>
                            <li class="footer-1-child-3"> Subscribe your email address for latest news and updates</li>
                            <l1><input type="email" placeholder="Enter Email Address"></input></l1>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <l1><button className="submit-email">Submit</button></l1>
                        </ul>


                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterView;