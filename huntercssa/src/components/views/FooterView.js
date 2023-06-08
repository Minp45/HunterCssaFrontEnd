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

                        <ul>
                            <li class="footer-1-child-1">Subscription</li>
                            <l1 class="footer-1-child-2">Subscribe your email address for latest news and updates</l1>
                            <li>
                                <input type="email" placeholder="Enter Email Address"></input>
                            </li>
                            <li>
                                <button className="submit-email">Submit</button>
                            </li>
                        </ul>


                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterView;