
import '../style/AboutPageStyle.css';
import main1 from "../../images/about/main1.png";
import main2 from "../../images/about/main2.png";
import main3 from "../../images/about/main3.png";
import main4 from "../../images/about/main4.png";

const AboutPageView = () => {
  return (
    <>
      <div class="container">
        <h1 class="section-title">Our Team</h1>
        <div class="grid-view">
          <div class="grid-item">
            <img src={main1} alt="a"></img>
            <p class="image-comment">Comment 1</p>
          </div>
          <div class="grid-item">
            <img src={main2} alt="b"></img>
            <p class="image-comment">Comment 2</p>
          </div>
          <div class="grid-item">
            <img src={main3} alt="c"></img>
            <p class="image-comment">Comment 3</p>
          </div>
          <div class="grid-item">
            <img src={main4} alt="d"></img>
            <p class="image-comment">Comment 4</p>
          </div>
        </div>
        <div class="section-container">

        </div>
      </div>
    </>
  );
}




export default AboutPageView;