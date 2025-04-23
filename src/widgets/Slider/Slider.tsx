import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { FC, useState, useEffect } from "react";
import { Pagination, EffectFade } from "swiper/modules";

import { Container } from "@/components/Shared/Container/Container";
import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";

import { useDeviceDetect } from "@/hooks/useDeviceDetect";

import SauceImage from "@/assets/images/sauce.png";
import SauceImageBackground1 from "../../../public/images/slide-background-1.png";
import SauceImageBackground2 from "../../../public/images/voteResult-background.png";
import SauceImageBackground3 from "../../../public/images/slide-background-3.png";

import {
  SliderWrapper,
  SauceBackground,
  SwiperWrapper,
  Swiper,
  SwiperSlide,
  BackgroundImages,
  Sauce,
  Accordion,
  SauceSummary,
  SauceSample,
  SauceTitle,
  Plus,
  SauceDescription,
  SauceList,
  SauceItem,
  SauceHighlight,
  SauceDetail,
} from "./styled";

interface Sauce {
  image: { src: string };
  type: string;
  description: string;
  taste: string;
  aroma: string;
  texture: string;
}

const sauces: Sauce[] = [
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

const renderBullet = (index: number, className: string): string => {
  return `
    <div class="${className}">
      <span class="pagination-line top"></span>
      <span>№${index + 1}</span>
      <span class="pagination-line bottom"></span>
    </div>
  `;
};

const getMobileImage = (index: number, deviceType: string): string => {
  if (deviceType !== "mobile") return sauces[index].image.src;

  if (index === 0) return sauces[2].image.src;
  if (index === 2) return sauces[0].image.src;

  return sauces[index].image.src;
};

export const Slider: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);
  const deviceType = useDeviceDetect();
  const isMobile = deviceType === "mobile";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedOpenAccordionId = sessionStorage.getItem(
        "sliderOpenAccordionId",
      );
      if (savedOpenAccordionId) {
        setOpenAccordionId(savedOpenAccordionId);
      }
    }
  }, []);

  useEffect(() => {
    if (isMobile && typeof window !== "undefined") {
      if (openAccordionId === null) {
        sessionStorage.removeItem("sliderOpenAccordionId");
      } else {
        sessionStorage.setItem("sliderOpenAccordionId", openAccordionId);
      }
    }
  }, [openAccordionId, isMobile]);

  const handleAccordionClick = (accordionKey: string) => {
    setOpenAccordionId((prevId) =>
      prevId === accordionKey ? null : accordionKey,
    );
  };

  return (
    <SliderWrapper>
      <Container>
        <SectionTitle isWhite={true}>
          Три соуса — <br /> один в меню
        </SectionTitle>
      </Container>
      {!isMobile &&
        sauces.map((sauce, index) => (
          <SauceBackground
            key={index}
            alt="Sauce Background"
            src={sauce.image.src}
            $index={index}
            $isActive={index === activeIndex}
            $isMobile={false}
          />
        ))}
      <SwiperWrapper>
        <Swiper
          key={isMobile ? "mobile" : "desktop"}
          modules={[Pagination, ...(isMobile ? [] : [EffectFade])]}
          spaceBetween={isMobile ? 18 : 0}
          slidesPerView={isMobile ? 1.2 : 1}
          centeredSlides={isMobile}
          effect={!isMobile ? "fade" : undefined}
          fadeEffect={!isMobile ? { crossFade: true } : undefined}
          pagination={{
            clickable: true,
            renderBullet,
          }}
          allowTouchMove={isMobile}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {sauces.map((sauce, index) => (
            <SwiperSlide key={index}>
              <BackgroundImages>
                {isMobile && (
                  <SauceBackground
                    alt="Sauce Background"
                    src={getMobileImage(index, deviceType)}
                    $index={index}
                    $isActive={index === activeIndex}
                    $isMobile={true}
                  />
                )}
                <Sauce alt="Sauce" src={SauceImage} />
              </BackgroundImages>
              <Accordion
                title={
                  <>
                    <SauceSummary>
                      <SauceSample>образец №{index + 1}</SauceSample>
                      <SauceTitle>{sauce.type}</SauceTitle>
                    </SauceSummary>
                    <Plus isCross={openAccordionId === `sauce-${index}`} />
                  </>
                }
                content={
                  <>
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
                  </>
                }
                isOpen={openAccordionId === `sauce-${index}`}
                onClick={() => handleAccordionClick(`sauce-${index}`)}
                forceOpen={!isMobile}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </SliderWrapper>
  );
};
