import { blog_recent } from "../pages/blog";
import Footer from "./Footer";
import RecentPosts from "../components/RecentPost";
import images from "../assets/images/Images.png";
import images12 from "../assets/images/Image12.png";
import images22 from "../assets/images/Image (22).png";
import images21 from "../assets/images/Image (21).png";
import Image from "next/image";
const BlogLight = () => {
  return (
    <div>
      <div className="flex w-5/6 mx-auto ">
        <div className="w-3/4">
          <Image alt="" className="w-full rounded-sm" src={images} />
          <div className="flex"></div>
          <p className="p-10">
            he Memphis Design movement is one of unlikeliest success stories in
            the history of design. Like so many artistic reactions, it began as
            an outlet for its creators, a way to rail against and confound elite
            sensibilities. The result was a style that was revolutionary in its
            time and whose spirit is a continual source of inspiration to this
            day.
          </p>
          <p className="p-10">
            As popular and influential as Memphis Design has been over the
            years, it can sometimes get a bad rap. It is a loud, colorful style
            that is hard to separate from its era. And when implemented without
            care, it can make some design projects feel antiquated. On the other
            hand, a good designer can turn these sins into virtues: obnoxious
            retro becoming lively nostalgia.
          </p>
          <p className="p-10">
            Memphis Design is a 1980s design aesthetic characterized by
            scattered, brightly colored shapes and lines. It typically combines
            circles and triangles with black-and-white graphic patterns such as
            polka dots and squiggly lines.
          </p>
          <Image alt="" className="p-10" src={images12} />
          <div className="p-10">
            <p>
              Imagine you’re at a party, and you’re bored. You’ve been bored for
              a while—years, it feels like. You wonder how a party, something
              that is supposed to be fun, can feel like it’s draining the life
              out of your very soul. As you look around the yawning faces of the
              guests, you realize it’s going to take drastic measures to salvage
              any excitement out of this long night. So you sneak a desperate
              gulp of your drink, slip on your tinted sunglasses and leap atop
              of the sofa. You’ve sacrificed yourself to karaoke.
            </p>
          </div>
          <div className="flex gap-5 p-10">
            <div>
              <Image alt="" src={images22} />
              <p>
                The birth of Memphis Design was a lot like this, starting with a
                gathering of architects and industrial designers in Milan, Italy
                in 1981. But it wasn’t the party that bored the guests. It was
                the general state of design—how creativity had stagnated to
                become corporate and uniform.
              </p>
            </div>
            <div>
              <Image alt="" src={images21} />
              <p>
                Long before all this, there had been a number of fine art and
                design movements that precipitated Memphis Design, and these
                were likely on the guests’ minds as they traced where it all had
                gone wrong. Kadinsky composition On White Kadinsky’s work also
                likely inspired the Memphis design movement.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          {blog_recent.map((itm) => (
            <RecentPosts img={itm.img} text={itm.title} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogLight;
