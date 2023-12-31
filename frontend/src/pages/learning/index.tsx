import { useEffect, useRef, useState } from "react";
import {
  StyledLearnBody,
  StyledLearnNav,
  StyledLearnNavButton,
  StyledLearning,
} from "./Learning.styled";
import LearningLife from "./life";
import LearningResultList from "./result/list";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import ChatbotModal from "./chatbot/chatbotmodal";
import { useNavigate } from "react-router-dom";
import useNavState from "@/stores/nav/useNavState";
const Learning = () => {
  const navigate = useNavigate();

  const swiperRef = useRef<any>(null);
  const { t } = useTranslation();
  // 학습 네브바에서 학습/ai결과 컴포넌트 변경
  // const [selectlearn, setselectlearn] = useState("learning");
  const selectlearn = useNavState((state: any) => state.selectlearn);
  const setselectlearn = useNavState((state: any) => state.setselectlearn);
  const goLearn = (e: any) => {
    setselectlearn(e.target.id);
  };

  useEffect(() => {}, [selectlearn]);

  // Swiper
  const handleChange = (e: any) => {
    if (e.activeIndex === 0) {
      setselectlearn("learning");
    } else if (e.activeIndex === 1) {
      setselectlearn("learningresultlist");
    }
  };

  const handleGoLearn = (e: any, index: any) => {
    swiperRef.current.swiper.slideTo(index);
    setselectlearn(e.target.id);
  };

  useEffect(() => {
    if (selectlearn === "learning") {
      swiperRef.current.swiper.slideTo(0);
    } else if (selectlearn === "learningresultlist") {
      swiperRef.current.swiper.slideTo(1);
    }
  }, []);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const closeModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const openChat = () => {
    navigate("/learning/chatbot");
  };

  return (
    <>
      <StyledLearning initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {/* 상단 탭바 */}

        <StyledLearnNav>
          <StyledLearnNavButton
            id="learning"
            onClick={(e: any) => handleGoLearn(e, 0)}
            selectlearn={selectlearn}
          >
            {t("learning.tap.life")}
          </StyledLearnNavButton>
          <StyledLearnNavButton
            id="learningresultlist"
            onClick={(e: any) => handleGoLearn(e, 1)}
            selectlearn={selectlearn}
          >
            {t("learning.tap.ai")}
          </StyledLearnNavButton>
        </StyledLearnNav>
        <StyledLearnBody>
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            onSlideChange={handleChange}
          >
            <SwiperSlide>
              <LearningLife openModal={openModal} />
            </SwiperSlide>
            <SwiperSlide>
              <LearningResultList />
            </SwiperSlide>
          </Swiper>
        </StyledLearnBody>
      </StyledLearning>
      {isOpenModal && (
        <ChatbotModal
          isDetailOpen={isOpenModal}
          closeModal={closeModal}
          openPage={openChat}
          modalTitle={t("learning.direct.topic")}
          modalText={t("learning.direct.input")}
          imgsrc="/chat/aiprofile.png"
        />
      )}
    </>
  );
};

export default Learning;
