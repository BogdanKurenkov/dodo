import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { AccordionContent, AccordionWrapper, AccordionHeader } from "./styled";

interface IAccordion {
  title: React.ReactNode;
  content: React.ReactNode;
  isOpen: boolean;
  className?: string;
  onClick: () => void;
  forceOpen?: boolean;
  skipInitialAnimation?: boolean;
}

export const Accordion: FC<IAccordion> = ({
  title,
  content,
  isOpen,
  className,
  onClick,
  forceOpen = false,
  skipInitialAnimation = false,
}) => {
  const shouldRenderContent = forceOpen || isOpen;

  return (
    <AccordionWrapper onClick={onClick} className={className}>
      <AccordionHeader>{title}</AccordionHeader>

      <AnimatePresence>
        {shouldRenderContent && (
          <motion.div
            initial={
              skipInitialAnimation
                ? { opacity: 1, height: "auto" }
                : { opacity: 0, height: 0 }
            }
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <AccordionContent>{content}</AccordionContent>
          </motion.div>
        )}
      </AnimatePresence>
    </AccordionWrapper>
  );
};
