import { useSingResultGetHook } from "@/hooks/mypage/useSingResultGetHook";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledClipBox,
  StyledClipContainer,
  StyledImageBox,
  StyledImage,
  StyledContentContainer,
  StyledTtile,
  StyledClipButton,
  StyledScore,
} from "../myshadowing/MyShadowing.styled";
import { S3_ADDRESS } from "@/api/api";
import { useTranslation } from "react-i18next";
const MySing = () => {
  const { t } = useTranslation();
  const { result, getSingResult } = useSingResultGetHook();
  const navigate = useNavigate();
  useEffect(() => {
    getSingResult();
  }, []);
  useEffect(() => {
    console.log(result);
  }, [result]);
  return (
    <StyledClipContainer>
      {result?.map((clip: any) => {
        return (
          <StyledClipBox
            key={clip.id}
            onClick={() => navigate(`/sing/game/${clip.id}`)}
          >
            <StyledImageBox>
              <StyledImage src={S3_ADDRESS + clip.image}></StyledImage>
            </StyledImageBox>
            <StyledContentContainer>
              <StyledTtile>{clip.title}</StyledTtile>
              <StyledScore>{clip.score}점</StyledScore>
              <StyledClipButton>{t("mypage.learn")}</StyledClipButton>
            </StyledContentContainer>
          </StyledClipBox>
        );
      })}
    </StyledClipContainer>
  );
};

export default MySing;
