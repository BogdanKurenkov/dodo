import React, { FC, useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

import { Question } from "@/components/Faq/Question/Question";
import { Subtitle } from "@/components/Shared/Subtitle/Subtitle";
import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";

import {
    FaqWrapper,
    QuestionsCol,
    QuestionsWrapper,
    SectionWrapper,
    FaqContainer
} from "./styled";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";

interface FaqItem {
    question: string;
    answer: string;
}

interface IFaqProps {
    isQr: boolean;
}

export const Faq: FC<IFaqProps> = ({ isQr }) => {
    const { t } = useTranslation('common');
    const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedOpenQuestionId = sessionStorage.getItem('openQuestionId');
            if (savedOpenQuestionId) {
                setOpenQuestionId(savedOpenQuestionId);
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (openQuestionId === null) {
                sessionStorage.removeItem('openQuestionId');
            } else {
                sessionStorage.setItem('openQuestionId', openQuestionId);
            }
        }
    }, [openQuestionId]);

    const projectQuestions: FaqItem[] = [
        {
            question: t('faq.projects.qusetion1'),
            answer: t('faq.projects.answer1')
        },
        {
            question: t('faq.projects.qusetion2'),
            answer: t('faq.projects.answer2')
        },
        {
            question: t('faq.projects.qusetion3'),
            answer: t('faq.projects.answer3')
        },
        {
            question: t('faq.projects.qusetion4'),
            answer: t('faq.projects.answer4')
        }
    ];

    const sauceQuestions: FaqItem[] = [
        {
            question: t('faq.sauces.qusetion1'),
            answer: t('faq.sauces.answer1')
        },
        {
            question: t('faq.sauces.qusetion2'),
            answer: t('faq.sauces.answer2')
        },
        {
            question: t('faq.sauces.qusetion3'),
            answer: t('faq.sauces.answer3')
        }
    ];

    const handleQuestionClick = (questionKey: string) => {
        setOpenQuestionId(prevId => {
            if (prevId === questionKey) {
                return null;
            }
            return questionKey;
        });
    };

    return (
        <SectionWrapper id="faq" $isQr={isQr}>
            <FaqContainer>
                <SectionTitle isWhite={false}>
                    <TextWithLineBreaks text={t('faq.title')} />
                </SectionTitle>

                <FaqWrapper>
                    <QuestionsCol>
                        <Subtitle>{t('faq.subtitle1')}</Subtitle>
                        <QuestionsWrapper>
                            {projectQuestions.map((q, index) => (
                                <Question
                                    key={`project-${index}`}
                                    question={q.question}
                                    answer={q.answer}
                                    isOpen={openQuestionId === `project-${index}`}
                                    onClick={() => handleQuestionClick(`project-${index}`)}
                                />
                            ))}
                        </QuestionsWrapper>
                    </QuestionsCol>

                    <QuestionsCol>
                        <Subtitle>{t('faq.subtitle2')}</Subtitle>
                        <QuestionsWrapper>
                            {sauceQuestions.map((q, index) => (
                                <Question
                                    key={`sauce-${index}`}
                                    question={q.question}
                                    answer={q.answer}
                                    isOpen={openQuestionId === `sauce-${index}`}
                                    onClick={() => handleQuestionClick(`sauce-${index}`)}
                                />
                            ))}
                        </QuestionsWrapper>
                    </QuestionsCol>
                </FaqWrapper>
            </FaqContainer>
        </SectionWrapper>
    );
};