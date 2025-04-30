import Image from "next/image";
import styled from "styled-components";

export const NotAllWrapper = styled.section`
    background-image: url('/images/results_bg.png');
    padding: 100px 0;
    background-repeat: no-repeat;
    background-position: right;
    background-color: ${({ theme }) => theme.colors.white};

    @media(max-width:500px){
        background-image: none;
        padding: 50px 0;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;

    @media(max-width:768px){
        gap: 28px;
    }
`;

export const CardsWrapper = styled.div`
    margin-top: 90px;
    .splide {

        &__slide {
            height: auto;
            display: flex;
        }
    }

    .splide__list{
        margin: 10px 2px !important;
    }

    @media(max-width:768px){
        margin-top: 30px;
    }
`;


export const StyledCard = styled.div`
    background: linear-gradient(153.34deg, rgba(255, 255, 255, 0.7) 33.29%, rgba(255, 255, 255, 0.4) 83.71%);
    border-radius: 38px;
    padding: 48px 30px 53px;
    color: #1D1D1B;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 12px -1px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    height: 100%;

    @media(max-width:768px){
        padding: 38px 22px;
    }
`;

export const CardNumber = styled.p`
    color: ${({ theme }) => theme.colors.orange};
    margin-bottom: 17px;
    font-size: 22px;
    font-weight: 500;

    @media(max-width:500px){
        font-size: 18px;
        margin-bottom: 14px;
    }
`;

export const CardTitle = styled.h4`
    font-size: 40px;
    font-weight: 500;
    text-transform: lowercase;
    min-height: 80px;

    @media(max-width:1024px){
        font-size: 32px;
        min-height: 64px;
    }
`;

export const CardImage = styled(Image)`
    width: 100%;
    margin: 35px 0;
    border-radius: 22px;

    @media(max-width: 500px){
        margin: 15px 0;
        height: 250px;
        object-fit: cover;
    }
`;

export const CardDescription = styled.p`
    font-weight: 400;
    font-size: 25px;
    line-height: 100%;
    flex-grow: 1;
    opacity: 80%;

    @media(max-width:1024px){
        font-size: 20px;
    }

    @media(max-width:500px){
        & br{
            display: none;
        }
    }
`;

export const PaginationWrapper = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 20px;
    gap: 40px;
    width: 100%;

    @media(max-width: 500px) {
        display: flex;
    }
`;

export const PaginationItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: ${({ theme }) => theme.colors.black};
    opacity: 0.4;
    position: relative;
    height: 100%;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
        flex-direction: row;
        font-size: 22px;
        width: auto;
        height: 100%;
    }

    &:first-child {
        justify-content: flex-start;
        .pagination-line.left {
            display: none;
        }
    }
    &:last-child {
        justify-content: flex-end;
        .pagination-line.right {
            display: none;
        }
    }

    &.splide-pagination-bullet-active {
        opacity: 1;
        position: relative;
        flex: 1;
        gap: 40px;
        @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
            gap: 20px;
        }

        .pagination-line {
            flex-grow: 1;
            @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
                width: 100%;
            }
        }
    }
`;

export const PaginationLine = styled.span`
    margin: 0 auto;
    flex-grow: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.black};
    opacity: 0.4;
    transition: all 0.3s ease-in-out;

    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
        width: 0;
        height: 2px;
        margin: 0;
    }
`;
