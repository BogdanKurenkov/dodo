import { FC, useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, EffectFade } from "swiper/modules";
import { useTranslation } from "next-i18next";

import { useDeviceDetect } from "@/hooks/useDeviceDetect";

import { Container } from "@/components/Shared/Container/Container";
import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";

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
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";

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
    type: "sauces.sauce1.name",
    description: "sauces.sauce1.description",
    taste: "sauces.sauce1.taste_description",
    aroma: "sauces.sauce1.aroma_description",
    texture: "sauces.sauce1.texture_description",
  },
  {
    image: SauceImageBackground2,
    type: "sauces.sauce2.name",
    description: "sauces.sauce2.description",
    taste: "sauces.sauce2.taste_description",
    aroma: "sauces.sauce2.aroma_description",
    texture: "sauces.sauce2.texture_description",
  },
  {
    image: SauceImageBackground3,
    type: "sauces.sauce3.name",
    description: "sauces.sauce1.description",
    taste: "sauces.sauce3.taste_description",
    aroma: "sauces.sauce3.aroma_description",
    texture: "sauces.sauce3.texture_description",
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

  const { t } = useTranslation('common');

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
          <TextWithLineBreaks text={t("slider_title")} />
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
                      <SauceSample>{t('results.sample')} №{index + 1}</SauceSample>
                      <SauceTitle>{t(sauce.type)}</SauceTitle>
                    </SauceSummary>
                    <Plus isCross={openAccordionId === `sauce-${index}`} />
                  </>
                }
                content={
                  <>
                    <SauceDescription>{t(sauce.description)}</SauceDescription>
                    <SauceList>
                      <SauceItem>
                        <SauceHighlight>{t('sauces.taste')}</SauceHighlight>
                        <SauceDetail>{t(sauce.taste)}</SauceDetail>
                      </SauceItem>
                      <SauceItem>
                        <SauceHighlight>{t('sauces.aroma')}</SauceHighlight>
                        <SauceDetail>{t(sauce.aroma)}</SauceDetail>
                      </SauceItem>
                      <SauceItem>
                        <SauceHighlight>{t('sauces.texture')}</SauceHighlight>
                        <SauceDetail>{t(sauce.texture)}</SauceDetail>
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
