import styled from "styled-components";

const Disclaimer = styled.p`
  font-weight: 400;
  font-size: 18px;
  opacity: 40%;
  line-height: 110%;
`;

export const DisclaimerDesktop = styled(Disclaimer)`
  @media (max-width: 500px) {
    display: none;
  }
`;

export const DisclaimerMobile = styled(Disclaimer)`
  display: none;

  @media (max-width: 500px) {
    display: block;
    margin-top: 30px;
  }
`;

export const DisclaimerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
  margin-top: 66px;

  @media (max-width: 500px) {
    margin-top: 0;
  }
`;

const Asterisk = styled.span`
  font-weight: 400;
  font-size: 18px;
  opacity: 40%;
  line-height: 110%;
`;

export const AsteriskDesktop = styled(Asterisk)`
  @media (max-width: 500px) {
    display: none;
  }
`;

export const AsteriskMobile = styled(Asterisk)`
  display: none;

  @media (max-width: 500px) {
    display: block;
    margin-top: 30px;
  }
`;
