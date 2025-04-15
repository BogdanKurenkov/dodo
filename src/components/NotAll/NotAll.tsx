import { FC } from "react";
import { CardDescription, CardImage, CardNumber, CardsWrapper, CardTitle, Info, NotAllWrapper, StyledCard } from "./styled";
import { Container } from "../Shared/Container/Container";
import { useTranslation } from "next-i18next";
import { SectionTitle } from "../Shared/SectionTitle/SectionTitle";
import { SectionDescription } from "../Shared/SectionDescription/SectionDescription";
import { TextWithLineBreaks } from "../Shared/TextWithLineBreaks/TextWithLineBreaks";
import CardImg from "@/assets/images/card-image.png"

export const NotAll: FC = () => {
    const { t } = useTranslation('common');
    const cardsData = t('results.not_all.ideas_cards', { returnObjects: true }) as Record<
        string,
        { title: string; description: string }
    >;

    return (
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
                    {Object.entries(cardsData).map(([key, card], index) => (
                        <Card
                            key={key}
                            number={`${t('results.not_all.idea')} ${index}`}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </CardsWrapper>
            </Container>
        </NotAllWrapper>
    );
};

interface ICard {
    number: string;
    title: string;
    description: string;
}

export const Card: FC<ICard> = ({ number, title, description }) => {
    return (
        <StyledCard>
            <CardNumber>{number}</CardNumber>
            <CardTitle>
                <TextWithLineBreaks text={title} />
            </CardTitle>
            <CardImage alt="image" src={CardImg} />
            <CardDescription>
                <TextWithLineBreaks text={description} />
            </CardDescription>
        </StyledCard>
    );
};