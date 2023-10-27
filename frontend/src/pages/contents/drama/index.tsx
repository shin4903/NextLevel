import { useTranslation } from "react-i18next";
import {
  StyledDrama,
  StyledDramaTopContainer,
  StyledDramaBodyContainer,
  StyledDramaPopular,
  StyledDramaTodayContainer,
  StyledDramaArtistTag,
  StyledDramaArtistContainer,
  StyledDramaCategory,
  StyledDramaTodayBox,
  StyledDramaTodayImg,
  StyledDramaTodayTitle,
  StyledDramaArtistClipBox,
  StyledDramaArtistClipImg,
  StyledDramaArtistClipTitle,
  StyledDramaArtistClipText,
} from "./Drama.styled";

const Drama = () => {
  const { t } = useTranslation();
  return (
    <StyledDrama>
      <StyledDramaTopContainer>K-DRAMA</StyledDramaTopContainer>

      {/* 인기드라마 */}
      <StyledDramaBodyContainer>
        <StyledDramaPopular>인기드라마 캐러셀</StyledDramaPopular>
      </StyledDramaBodyContainer>

      {/* 오늘의 드라마 */}
      <StyledDramaBodyContainer>
        <StyledDramaTodayContainer>
          <StyledDramaCategory>
            {t("contents.drama.category.today")}
          </StyledDramaCategory>
          <StyledDramaTodayBox>
            <StyledDramaTodayImg>썸네일</StyledDramaTodayImg>
            <StyledDramaTodayTitle>
              [사랑의불시착] 손예진의 능청스러운 연기🥰
            </StyledDramaTodayTitle>
          </StyledDramaTodayBox>
          <StyledDramaTodayBox>
            <StyledDramaTodayImg>썸네일</StyledDramaTodayImg>
            <StyledDramaTodayTitle>
              [사랑의불시착] 손예진의 능청스러운 연기🥰
            </StyledDramaTodayTitle>
          </StyledDramaTodayBox>
        </StyledDramaTodayContainer>
      </StyledDramaBodyContainer>

      {/* 아티스트 태그 */}
      <StyledDramaBodyContainer>
        <StyledDramaArtistTag>아티스트 태그</StyledDramaArtistTag>
      </StyledDramaBodyContainer>

      {/* 아티스트 클립 */}
      <StyledDramaBodyContainer>
        <StyledDramaCategory>
          {t("contents.drama.category.artist")}
        </StyledDramaCategory>

        {/* 아티스트 개별 클립 */}
        <StyledDramaArtistContainer>
          <StyledDramaArtistClipBox>
            <StyledDramaArtistClipImg></StyledDramaArtistClipImg>
            <StyledDramaArtistClipTitle>
              [사랑의 불시착] 다음부터 셋이 그냥 만나지마 😠
            </StyledDramaArtistClipTitle>
            <StyledDramaArtistClipText>
              “웃어? 나 안간다?”
            </StyledDramaArtistClipText>
          </StyledDramaArtistClipBox>
          <StyledDramaArtistClipBox>
            <StyledDramaArtistClipImg></StyledDramaArtistClipImg>
            <StyledDramaArtistClipTitle>
              [사랑의 불시착] 다음부터 셋이 그냥 만나지마 😠
            </StyledDramaArtistClipTitle>
            <StyledDramaArtistClipText>
              “웃어? 나 안간다?”
            </StyledDramaArtistClipText>
          </StyledDramaArtistClipBox>
          <StyledDramaArtistClipBox>
            <StyledDramaArtistClipImg></StyledDramaArtistClipImg>
            <StyledDramaArtistClipTitle>
              [사랑의 불시착] 다음부터 셋이 그냥 만나지마 😠
            </StyledDramaArtistClipTitle>
            <StyledDramaArtistClipText>
              “웃어? 나 안간다?”
            </StyledDramaArtistClipText>
          </StyledDramaArtistClipBox>
        </StyledDramaArtistContainer>
      </StyledDramaBodyContainer>
    </StyledDrama>
  );
};

export default Drama;