import purpleBg from "../../images/purpleBg.png";
import '../style/HomePageStyle.css';

const HomePageView = () => {
  return (
    <>
      <div class = "container">
        <img class="bg-shape" src={purpleBg} alt="bg-shape" />
      </div>
      <div class="home-content hero-content__text">
        <h4> The Hunter College of New York </h4>
        <h1> <span>Chinese Students</span> & Scholars Association </h1>
        <h2>纽约市立学院中国学生会</h2>
        <ul class = "slogan-home">
          <li><p>弘扬中国传统文化</p></li>
          <li><p class = "second-line-style">融入全新校园生活</p></li>
        </ul>
      </div>
    </>
  );    
}




export default HomePageView;