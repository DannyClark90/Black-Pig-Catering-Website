"use client";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid, Pagination, Autoplay} from "swiper/modules";
import styles from "@/css/gallery.module.css";
import Image from "next/image";
import image1 from "@/public/Assets/Food_Gallery/1.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Gallery() {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  useEffect(() => {
    if (nextButtonRef.current && prevButtonRef.current) {
      const nextButton = nextButtonRef.current;
      const prevButton = prevButtonRef.current;
      const swiperInstance = document.querySelector(`.${styles.swiper}`).swiper;

      swiperInstance.params.navigation.nextEl = nextButton;
      swiperInstance.params.navigation.prevEl = prevButton;

      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <>
      <div className={styles["swiper__container"]}>
        <div ref={prevButtonRef} className={styles["swiper-button-prev"]}>
          <p>{"<"}</p>
        </div>
        <Swiper
          modules={[Navigation, Grid, Pagination, Autoplay]}
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true
          }}
          loop={true}
          breakpoints={{
            // when window width is >= 640px
            344: {
              slidesPerView: 1,
              grid: {
                rows: 1,
                fill: 'row'
                }
            },
            // when window width is >= 768px
            766: {
                slidesPerView: 2,
                grid: {
                  rows: 2,
                  fill: 'row'
                  }
              },
            855: {
              slidesPerView: 3,
              grid: {
                rows: 2,
                fill: 'row'
                }
            },
          }}
          navigation={{
            nextEl: nextButtonRef.current,
            prevEl: prevButtonRef.current,
          }}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className={styles.swiper}
        >
          <SwiperSlide>
            <div className={styles["swiper__slide"]}>
              <Image alt="picture 1" src={image1} fill objectFit="cover" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles["swiper__slide"]}>
              <Image alt="picture 1" src={image1} fill objectFit="cover" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles["swiper__slide"]}>
              <Image alt="picture 1" src={image1} fill objectFit="cover" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles["swiper__slide"]}>
              <Image alt="picture 1" src={image1} fill objectFit="cover" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles["swiper__slide"]}>
              <Image alt="picture 1" src={image1} fill objectFit="cover" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles["swiper__slide"]}>
              <Image alt="picture 1" src={image1} fill objectFit="cover" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles["swiper__slide"]}>
              <Image alt="picture 1" src={image1} fill objectFit="cover" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles["swiper__slide"]}>
              <Image alt="picture 1" src={image1} fill objectFit="cover" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles["swiper__slide"]}>
              <Image alt="picture 1" src={image1} fill objectFit="cover" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles["swiper__slide"]}>
              <Image alt="picture 1" src={image1} fill objectFit="cover" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles["swiper__slide"]}>
              <Image alt="picture 1" src={image1} fill objectFit="cover" />
            </div>
          </SwiperSlide>
        </Swiper>

        <div ref={nextButtonRef} className={styles["swiper-button-next"]}>
          <p>{">"}</p>
        </div>
      </div>
    </>
  );
}
