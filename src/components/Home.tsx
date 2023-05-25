import AboutApp from "./AboutApp";
import AppFuture from "./AppFuture";
import AppScreensort from "./AppScreensort";
import DowLoadApp from "./DowLoadApp";
import UseApp from "./UseApp";
import OurTeam from "./OurTeam";
import OurRecentBlog from "./OurRecentBlog";
import Footer from "./Footer";
import PrApp from "./PrApp";
const Home = () => {
  return (
    <div className="">
      <PrApp />
      <AboutApp />
      <AppFuture />
      <AppScreensort />
      <DowLoadApp />
      <UseApp />
      <OurTeam />
      <OurRecentBlog />
      <Footer />
    </div>
  );
};

export default Home;
