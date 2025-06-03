import { useTranslation } from "next-i18next";
import { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, EffectFade } from "swiper/modules";
import type { Swiper as SwiperCore } from "swiper/types";
import { StaticImageData } from "next/image";

import { useDeviceDetect } from "@/hooks/useDeviceDetect";

import { Container } from "@/components/Shared/Container/Container";
import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";

import Sauce1 from "@/assets/images/zoom_on_sauce_demiglace0009.png";
import Sauce2 from "@/assets/images/zoom_on_sauce_hot0009.png";
import Sauce3 from "@/assets/images/zoom_on_sauce_smoked0009.png";
import SauceImageBackground1 from "../../../public/images/slide-background-1.webp";
import SauceImageBackground2 from "../../../public/images/voteResult-background.webp";
import SauceImageBackground3 from "../../../public/images/slide-background-3.webp";

import {
  SliderWrapper,
  SauceBackground,
  SwiperWrapper,
  Swiper,
  SwiperSlide,
  Sauce,
  BackgroundImages,
  SauceZoomMob,
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
  PaginationWrapper,
} from "./styled";
import dynamic from "next/dynamic";

interface Sauce {
  image: StaticImageData;
  type: string;
  description: string;
  taste: string;
  aroma: string;
  texture: string;
}

const LottieSauceZoom = dynamic(
  () =>
    import("@/components/LottieSauceZoom/LottieSauceZoom").then(
      (mod) => mod.LottieSauceZoom,
    ),
  { ssr: false },
);

const animations_zoom = [
  {
    path: "/lottie/main/zoom_on_sauce_demiglace/data.json",
    key: 1,
  },
  {
    path: "/lottie/main/zoom_on_sauce_hot/data.json",
    key: 2,
  },
  {
    path: "/lottie/main/zoom_on_sauce_smoked/data.json",
    key: 3,
  },
];

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
    description: "sauces.sauce3.description",
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

const getMobileImage = (index: number, deviceType: string): StaticImageData => {
  if (deviceType !== "mobile") return sauces[index].image;

  if (index === 0) return sauces[2].image;
  if (index === 2) return sauces[0].image;

  return sauces[index].image;
};

export const Slider: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);
  const [direction, setDirection] = useState<"bottom" | "top" | null>(null);

  const deviceType = useDeviceDetect();
  const isMobile = deviceType === "mobile";

  const router = useRouter();
  const { source } = router.query;

  const { t } = useTranslation("common");

  useEffect(() => {
    const savedOpenAccordionId = sessionStorage.getItem(
      "sliderOpenAccordionId",
    );
    if (savedOpenAccordionId) {
      setOpenAccordionId(savedOpenAccordionId);
    }
  }, [isMobile]);

  useEffect(() => {
    if (openAccordionId === null) {
      sessionStorage.removeItem("sliderOpenAccordionId");
    } else {
      sessionStorage.setItem("sliderOpenAccordionId", openAccordionId);
    }
  }, [openAccordionId]);

  const handleAccordionClick = (accordionKey: string) => {
    setOpenAccordionId((prevId) =>
      prevId === accordionKey ? null : accordionKey,
    );
  };

  const handleSlideChange = (swiper: SwiperCore) => {
    const previousIndex = activeIndex;
    const newIndex = swiper.activeIndex;

    if (newIndex > previousIndex) {
      setDirection("top");
    } else if (newIndex < previousIndex) {
      setDirection("bottom");
    }

    setActiveIndex(newIndex);

    if (isMobile) {
      setOpenAccordionId(null);
    }
  };

  const sauceImages = [Sauce1, Sauce2, Sauce3];

  return (
    <SliderWrapper
      style={{
        marginBottom:
          source === "qr" ? "0" : deviceType === "desktop" ? "40px" : "0",
      }}
    >
      <Container>
        <SectionTitle isWhite={true}>
          <TextWithLineBreaks text={t("slider_title")} />
        </SectionTitle>
      </Container>
      <Swiper
        key={isMobile ? "mobile" : "desktop"}
        modules={[Pagination, ...(isMobile ? [] : [EffectFade])]}
        spaceBetween={isMobile ? 18 : 0}
        slidesPerView={isMobile ? 1.2 : 1}
        centeredSlides={isMobile}
        speed={1000}
        pagination={{
          clickable: true,
          renderBullet,
          el: ".custom-pagination",
        }}
        allowTouchMove={isMobile}
        onSlideChange={handleSlideChange}
      >
        {sauces.map((sauce, index) => (
          <SwiperSlide key={index}>
            {!isMobile && (
              <SauceBackground
                alt="Sauce Background"
                src={getMobileImage(index, deviceType)}
                $index={index}
                $isActive={index === activeIndex}
                $isMobile={true}
                $direction={direction}
              />
            )}
            <SwiperWrapper>
              <BackgroundImages>
                {isMobile && (
                  <SauceBackground
                    alt="Sauce Background"
                    src={getMobileImage(index, deviceType)}
                    $index={index}
                    $isActive={index === activeIndex}
                    $isMobile={true}
                    $direction={direction}
                  />
                )}
                {isMobile ? (
                  <SauceZoomMob $isPlaying={openAccordionId === `sauce-${index}`}>
                    <LottieSauceZoom
                      key={animations_zoom[index].key}
                      path={animations_zoom[index].path}
                      isPlaying={openAccordionId === `sauce-${index}`}
                      speed={4}
                    />
                  </SauceZoomMob>
                ) : (
                  <Sauce alt="Sauce" src={sauceImages[index]} />
                )}
              </BackgroundImages>
              <Accordion
                title={
                  <>
                    <SauceSummary>
                      <SauceSample>
                        {t("results.sample")} №{index + 1}
                      </SauceSample>
                      <SauceTitle>{t(sauce.type)}</SauceTitle>
                    </SauceSummary>
                    <Plus
                      isCross={
                        isMobile ? openAccordionId === `sauce-${index}` : false
                      }
                    />
                  </>
                }
                content={
                  <>
                    <SauceDescription>{t(sauce.description)}</SauceDescription>
                    <SauceList>
                      <SauceItem>
                        <SauceHighlight>{t("sauces.taste")}</SauceHighlight>
                        <SauceDetail>{t(sauce.taste)}</SauceDetail>
                      </SauceItem>
                      <SauceItem>
                        <SauceHighlight>{t("sauces.aroma")}</SauceHighlight>
                        <SauceDetail>{t(sauce.aroma)}</SauceDetail>
                      </SauceItem>
                      <SauceItem>
                        <SauceHighlight>{t("sauces.texture")}</SauceHighlight>
                        <SauceDetail>{t(sauce.texture)}</SauceDetail>
                      </SauceItem>
                    </SauceList>
                  </>
                }
                isOpen={isMobile ? openAccordionId === `sauce-${index}` : true}
                onClick={
                  isMobile
                    ? () => handleAccordionClick(`sauce-${index}`)
                    : () => {}
                }
                skipInitialAnimation={!isMobile}
              />
            </SwiperWrapper>
          </SwiperSlide>
        ))}
        <PaginationWrapper>
          <div className="custom-pagination"></div>
        </PaginationWrapper>
      </Swiper>
    </SliderWrapper>
  );
};
