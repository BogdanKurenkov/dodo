import React, { FC, useState, useRef, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import { useClient } from "@/hooks/useClient";

import { Container } from "@/components/Shared/Container/Container";
import { SectionTitle } from "../Shared/SectionTitle/SectionTitle";
import { SectionDescription } from "@/components/Shared/SectionDescription/SectionDescription";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";

import CardImg from "@/assets/images/results-slider_1.png";
import CardImg1 from "@/assets/images/results-slider_2.png";
import CardImg2 from "@/assets/images/results-slider_3.png";

import {
    CardDescription,
    CardImage,
    CardNumber,
    CardsWrapper,
    CardTitle,
    Info,
    NotAllWrapper,
    PaginationItem,
    PaginationLine,
    PaginationWrapper,
    StyledCard
} from "./styled";

const images = [CardImg, CardImg1, CardImg2];

export const NotAll: FC = () => {
    const { t } = useTranslation('common');
    const cardsData = t('results.not_all.ideas_cards', { returnObjects: true }) as Record<
        string,
        { title: string; description: string }
    >;

    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const client = useClient()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const splideRef = useRef<any>(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 1000);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const handlePaginationClick = (index: number) => {
        if (splideRef.current && isMobile) {
            splideRef.current.go(index);
            setActiveIndex(index);
        }
    };

    return client && (
        <NotAllWrapper>
            <Container>
                <Info>
                    <SectionTitle isWhite={false}>{t('results.not_all.title')}</SectionTitle>
                    <SectionDescription>{t('results.not_all.thanks')}</SectionDescription>
                    <SectionDescription>
                        <TextWithLineBreaks text={t('results.not_all.continue')} />
                    </SectionDescription>
                    <SectionDescription>{t('results.not_all.ideas')}</SectionDescription>
                </Info>

                <CardsWrapper>
                    <Splide
                        //@ts-ignore
                        ref={(splide) => (splideRef.current = splide)}
                        //@ts-ignore
                        onMoved={(splide) => {
                            setActiveIndex(splide.index);
                        }}
                        options={{
                            type: isMobile ? 'loop' : 'slide',
                            perPage: 3,
                            gap: '18px',
                            breakpoints: {
                                1024: {
                                    perPage: 2,
                                    gap: '16px',
                                },
                                500: {
                                    perPage: 1,
                                    padding: {
                                        right: '15%'
                                    }
                                },
                            },
                            pagination: false,
                            arrows: false,
                            drag: isMobile,
                            flickPower: isMobile ? 100 : 0,
                            flickMaxPages: isMobile ? 1 : 0,
                        }}
                        aria-label="Ideas cards"
                    >
                        {Object.entries(cardsData).map(([key, card], index) => (
                            <SplideSlide key={key}>
                                <Card
                                    index={index}
                                    number={`${t('results.not_all.idea')} ${index + 1}`}
                                    title={card.title}
                                    description={card.description}
                                />
                            </SplideSlide>
                        ))}
                    </Splide>

                    {isMobile && (
                        <PaginationWrapper>
                            {Object.entries(cardsData).map((_, index) => (
                                <PaginationItem
                                    key={index}
                                    className={`${activeIndex === index ? 'splide-pagination-bullet-active' : ''}`}
                                    onClick={() => handlePaginationClick(index)}
                                >
                                    <PaginationLine className="pagination-line left" />
                                    <span>№{index + 1}</span>
                                    <PaginationLine className="pagination-line right" />
                                </PaginationItem>
                            ))}
                        </PaginationWrapper>
                    )}
                </CardsWrapper>
            </Container>
        </NotAllWrapper>
    );
};

interface ICard {
    number: string;
    title: string;
    description: string;
    index: number;
}

export const Card: FC<ICard> = ({ number, title, description, index }) => {
    return (
        <StyledCard>
            <CardNumber>{number}</CardNumber>
            <CardTitle>
                <TextWithLineBreaks text={title} />
            </CardTitle>
            <CardImage alt="image" src={images[index]} />
            <CardDescription>
                <TextWithLineBreaks text={description} />
            </CardDescription>
        </StyledCard>
    );
};
