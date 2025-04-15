import Image from "next/image";
import styled from "styled-components";

export const NotAllWrapper = styled.section`
    background-image: url('/images/results_bg.png');
    padding: 100px 0;
    background-repeat: no-repeat;
    background-position: right;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
`;

export const CardsWrapper = styled.div`
    display: flex;
    gap: 23px;
`;

export const StyledCard = styled.div`
    background: linear-gradient(153.34deg, rgba(255, 255, 255, 0.7) 33.29%, rgba(255, 255, 255, 0.4) 83.71%);
    width: calc(33.33% - (46px / 3));
    border-radius: 38px;
    padding: 48px 30px 53px;
    color: #1D1D1B;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 6.32px 18.96px -1.26px #0000001A;
    backdrop-filter: blur(10.33480453491211px);
    margin-top: 90px;
`;

export const CardNumber = styled.p`
    color: ${({ theme }) => theme.colors.orange};
    margin-bottom: 17px;
    font-size: 22px;
    font-weight: 500;
`;

export const CardTitle = styled.h4`
    font-size: 40px;
    font-weight: 500;
    text-transform: lowercase;
    height: 80px;
`;

export const CardImage = styled(Image)`
    width: 100%;
    margin: 35px 0;
`;

export const CardDescription = styled.p`
    font-weight: 400;
    font-size: 25px;
    line-height: 100%;
`;