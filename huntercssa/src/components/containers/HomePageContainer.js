import HomePage from '../views/HomePageView';
import Footer from '../views/FooterView';
import FindMate from '../views/FindMateView';
import PosterSliding from '../views/PosterSlidingView';


const HomePageContainer = () => {
  return (
    <>
      <HomePage />
      <FindMate />
      <PosterSliding />
      <Footer />
    </>
  );
};

export default HomePageContainer;