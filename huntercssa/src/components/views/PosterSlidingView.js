import alise from "../../images/poster/1.png";
import findcp from "../../images/poster/2.png";
import newyear from "../../images/poster/Chinese New Year Festival (1).png";
import game from "../../images/poster/Game.png";
import dumpling from "../../images/poster/Hunter CSSA Dumpling.png";
import '../style/PosterSlidingStyle.css';

const PosterSliding = () => {
  return (
    <>
      <h1 class = "poster-title">Retrospect</h1>
      <div class = "poster-slide scroll-container">
        <img src={alise} alt="alise" />
        <img src={findcp} alt="findcp" />
        <img src={newyear} alt="newyear" />
        <img src={game} alt="game" />
        <img src={dumpling} alt="dumpling" />
        <img src={alise} alt="alise" />
        <img src={findcp} alt="findcp" />
        <img src={newyear} alt="newyear" />
        <img src={game} alt="game" />
        <img src={dumpling} alt="dumpling" />
      </div>
    </>
  );
}




export default PosterSliding;