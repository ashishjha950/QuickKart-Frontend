import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import menBanner from "../assets/banners/mens-banner.png";
import womenBanner from "../assets/banners/womens-banner.png";
import beautyBanner from "../assets/banners/beauty-banner.png";
import accessoriesBanner from "../assets/banners/accessories-banner.png";
import electronicsBanner from "../assets/banners/electronics-banner.png";

const HomeCarousel = () => {
  const categoryData = [
    { title: "Mens", image: menBanner, link: "/mens" },
    { title: "Womens", image: womenBanner, link: "/womens" },
    { title: "Beauty", image: beautyBanner, link: "/beauty" },
    { title: "Accessories", image: accessoriesBanner, link: "/accessories" },
    { title: "Electronics", image: electronicsBanner, link: "/electronics" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {categoryData.map((item, index) => (
          <Link to={item.link} key={index}>
            <div className="relative">
              <img
                src={item.image}
                alt={`${item.title}`}
                className="w-full h-56 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gray-500/40  flex items-center justify-center">
                <h2 className="text-white text-2xl sm:text-4xl font-bold">
                  Explore {item.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
