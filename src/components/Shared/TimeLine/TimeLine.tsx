import { FC } from "react";
import { useTranslation } from "next-i18next";
import { Date, Line, TimeLineWrapper } from "./styled";

interface ITimeLine {
    isWhite: boolean;
}

export const TimeLine: FC<ITimeLine> = ({ isWhite }) => {
    const { t } = useTranslation('common');

    return <TimeLineWrapper>
        <Date $isWhite={isWhite}>{t('event_dates.event_start')}</Date>
        <Line $isWhite={isWhite} />
        <Date $isWhite={isWhite}>{t('event_dates.event_end')}</Date>
    </TimeLineWrapper>
}