import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Plus } from "@/components/Shared/Plus/Plus";

import { Answer, QuestionWrapper, StyledQuestion } from "./styled";


interface IQuestion {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

export const Question: FC<IQuestion> = ({ question, answer, isOpen, onClick }) => {
    return (
        <QuestionWrapper onClick={onClick}>
            <StyledQuestion>
                {question}
                <Plus isCross={isOpen} />
            </StyledQuestion>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                    >
                        <Answer>{answer}</Answer>
                    </motion.div>
                )}
            </AnimatePresence>
        </QuestionWrapper>
    );
};