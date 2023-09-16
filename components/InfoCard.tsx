/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

interface InfoCardProps {
  title: string;
}

const InfoCard = ({ children, title }: PropsWithChildren<InfoCardProps>) => {
  const InfoBox = styled.div`
    background-color: lightcoral;
    border-radius: 1rem;
    padding: 30px;
    text-align: left;
    margin: 10px;
    width: 50%;
    min-width: 180px;
    @media (max-width: 500px) {
      width: 100%;
    }
  `;

  return (
    <InfoBox>
      <h3
        css={css`
          text-align: center;
        `}
      >
        {title}
      </h3>
      {children}
    </InfoBox>
  );
};

export default InfoCard;
