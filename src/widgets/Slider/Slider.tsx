import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { FC, useState } from "react";
import { Pagination, EffectFade } from "swiper/modules";

import { Container } from "@/components/Shared/Container/Container";
import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";

import SauceImage from "@/assets/images/sauce.png";
import SauceImageBackground1 from "../../../public/images/slide-background-1.png";
import SauceImageBackground2 from "../../../public/images/voteResult-background.png";
import SauceImageBackground3 from "../../../public/images/slide-background-3.png";

import {
  SliderWrapper,
  SauceBackground,
  Swiper,
  SwiperSlide,
  Sauce,
  CardSauce,
  SauceSample,
  SauceTitle,
  SauceDescription,
  SauceList,
  SauceItem,
  SauceHighlight,
  SauceDetail,
} from "./styled";

const sauces = [
  {
    image: SauceImageBackground1,
    type: "томленый",
    description:
      "Нежный и насыщенный. Медленно томился под крышкой, вобрал в себя аромат мяса, специй и получился особенно домашним",
    taste: "Насыщенный, с оттенками спелых томатов",
    aroma: "Тёплый, домашний",
    texture: "Гладкая, мягкая, обволакивающая",
  },
  {
    image: SauceImageBackground2,
    type: "жаркий",
    description:
      "Собрал в себе жар солнца и остроту специй. Бодрящий вкус с легким огненным характером для любителей ярких акцентов",
    taste: "Насыщенный, с перчинкой",
    aroma: "Пряный, пикантный",
    texture: "Плотная, тягучая",
  },
  {
    image: SauceImageBackground3,
    type: "копченый",
    description:
      "Лёгкий дымный аромат, густая текстура и пряный вкус. Для тех, кто ценит глубокие вкусы с лёгким огоньком",
    taste: "дымный, пряный",
    aroma: "копченый, со специями",
    texture: "густая, бархатистая",
  },
];

const renderBullet = (index: number, className: string) => {
  return `
    <div class="${className}">
      <span class="pagination-line top"></span>
      <span>№${index + 1}</span>
      <span class="pagination-line bottom"></span>
    </div>
  `;
};

const BackgroundWithSwiper: FC<{
  sauces: typeof sauces;
  activeIndex: number;
}> = ({ sauces, activeIndex }) => {
  return (
    <>
      {sauces.map((sauce, index) => (
        <SauceBackground
          key={index}
          alt="sauceBackground"
          src={sauce.image.src}
          $index={index}
          $isActive={index === activeIndex}
        />
      ))}
    </>
  );
};

export const Slider: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SliderWrapper>
      <Container>
        <SectionTitle isWhite={true}>
          Три соуса — <br /> один в меню
        </SectionTitle>
      </Container>
      <BackgroundWithSwiper sauces={sauces} activeIndex={activeIndex} />
      <Container>
        <Swiper
          modules={[Pagination, EffectFade]}
          spaceBetween={18}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{
            clickable: true,
            renderBullet,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          allowTouchMove={false}
        >
          {sauces.map((sauce, index) => (
            <SwiperSlide key={index}>
              <Sauce alt="sauce" src={SauceImage} />
              <CardSauce>
                <SauceSample>образец №{index + 1}</SauceSample>
                <SauceTitle>{sauce.type}</SauceTitle>
                <SauceDescription>{sauce.description}</SauceDescription>
                <SauceList>
                  <SauceItem>
                    <SauceHighlight>основной вкус</SauceHighlight>
                    <SauceDetail>{sauce.taste}</SauceDetail>
                  </SauceItem>
                  <SauceItem>
                    <SauceHighlight>аромат</SauceHighlight>
                    <SauceDetail>{sauce.aroma}</SauceDetail>
                  </SauceItem>
                  <SauceItem>
                    <SauceHighlight>текстура</SauceHighlight>
                    <SauceDetail>{sauce.texture}</SauceDetail>
                  </SauceItem>
                </SauceList>
              </CardSauce>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </SliderWrapper>
  );
};
