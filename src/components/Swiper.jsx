import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

import bakpia from "../assets/images/bakpia.jpg";
import keraton from "../assets/images/keraton.jpg";
import tggu from "../assets/images/tggu.jpg";
import prmbanan from "../assets/images/prmbanan.jpg";


const Swiper = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      coverflowEffect: {
        rotate: 0,
        depth: 100,
        modifier: 1,
        scale: 1,
       

      },
      breakpoints: {
        1024: {
          slidesPerView: 5,
        },
      },
    };

    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container
      ref={swiperRef}
      slides-per-view="6"
      loop="true"
      navigation="false"
      pagination="false"
      autoplay="true"
      effect="coverflow"
      infinite = "true"
      speed = {1500}
      arrows = "false"
      >
      <swiper-slide>
        <div className="relative group">
          <img
            src={prmbanan}
            alt="prambanan"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
            Prambanan dianggap dianggap sebagai pusat spiritual umat Buddha.
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
            Borubudur, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={keraton}
            alt="keraton"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
          Kraton Ngayogyakarta Hadiningrat merupakan istana resmi Kesultanan Ngayogyakarta Hadiningrat yang kini berloka
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
            Keraton, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={tggu}
            alt="travel"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
          Sebuah tugu atau monumen yang sering dipakai sebagai simbol atau lambang dari Kota Yogyakarta
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
          Perempatan Jalan Jenderal Sudirman, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={bakpia}
            alt="bakpia"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
            Bakpia khas Jogjakarta.
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
            Bakpia 25, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={prmbanan}
            alt="travel"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
            Borobudur dianggap dianggap sebagai pusat spiritual umat Buddha.
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
            Borubudur, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={keraton}
            alt="travel"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
          Keraton Ngayogyakarta merupakan istana resmi Kesultanan Ngayogyakarta Hadiningrat yang kini berlokasi di Kota Yogyakarta.
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
            Keraton, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={tggu}
            alt="travel"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
          Sebuah tugu atau monumen yang sering dipakai sebagai simbol atau lambang dari Kota Yogyakarta
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
          Perempatan Jalan Jenderal Sudirman, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={bakpia}
            alt="travel"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
            Bakpia Khas Jogjakarta
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
            Bakpia 25, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={prmbanan}
            alt="travel"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
            Borobudur dianggap dianggap sebagai pusat spiritual umat Buddha.
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
            Borubudur, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={keraton}
            alt="travel"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
            Borobudur dianggap dianggap sebagai pusat spiritual umat Buddha.
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
            Borubudur, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={tggu}
            alt="travel"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
           sebuah tugu atau monumen yang sering dipakai sebagai simbol atau lambang dari Kota Yogyakarta
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
          Perempatan Jalan Jenderal Sudirman, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={bakpia}
            alt="travel"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
            Bakpia khas Jogjakarta.
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
            Bakpia 25, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
    </swiper-container>
  );
};

export default Swiper;
