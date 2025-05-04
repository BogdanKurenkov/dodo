import { FC } from "react";
import { useTranslation } from "next-i18next";

import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";

import {
    AsteriskDesktop,
    AsteriskMobile,
    DisclaimerDesktop,
    DisclaimerMobile,
    DisclaimerWrapper
} from "./styled";

interface Idesclaimer {
    variant: "mobile" | "descktop";
}

export const Disclaimer: FC<Idesclaimer> = ({ variant }) => {
    const { t } = useTranslation();

    return <DisclaimerWrapper>
        {variant === "descktop" ?
            <AsteriskDesktop>*</AsteriskDesktop> :
            <AsteriskMobile>*</AsteriskMobile>
        }
        {variant === "descktop" ?
            <DisclaimerDesktop>
                <TextWithLineBreaks text={t('results.disclaimer')} />
            </DisclaimerDesktop> :
            <DisclaimerMobile>
                <TextWithLineBreaks text={t('results.disclaimer')} />
            </DisclaimerMobile>
        }
    </DisclaimerWrapper>
}