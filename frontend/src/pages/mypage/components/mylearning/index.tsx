import React, { useEffect, useRef, useState } from "react";
import {
  StyledMyLearningComponent,
  StyledMyLearningTitle,
  StyledMyLearningButton,
} from "./MyLearning.styled";
import MyShadowing from "../myshadowing";
import MySing from "../mysing";
import MySituation from "../mysituation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import useNavState from "@/stores/nav/useNavState";
const Mylearning = () => {
  // const [myPageState, setMyPageState] = useState("shadowing");
  const myPageState = useNavState((state: any) => state.myPageState);
  const setMyPageState = useNavState((state: any) => state.setMyPageState);
  const swiperRef = useRef<any>(null);
  const handleChange = (e: any) => {
    if (e.activeIndex === 0) {
      setMyPageState("shadowing");
    } else if (e.activeIndex === 1) {
      setMyPageState("sing");
    } else if (e.activeIndex === 2) {
      setMyPageState("ai");
    }
  };
  const handleState = (e: any, index: any) => {
    swiperRef.current.swiper.slideTo(index);
    setMyPageState(e.target.id);
  };
  useEffect(() => {
    if (myPageState === "shadowing") {
      swiperRef.current.swiper.slideTo(0);
    } else if (myPageState === "sing") {
      swiperRef.current.swiper.slideTo(1);
    } else if (myPageState === "ai") {
      swiperRef.current.swiper.slideTo(2);
    }
  }, []);
  return (
    <StyledMyLearningComponent>
      <StyledMyLearningTitle>
        <StyledMyLearningButton
          id="shadowing"
          onClick={(e: any) => handleState(e, 0)}
          state={myPageState}
        >
          내 쉐도잉
        </StyledMyLearningButton>
        <StyledMyLearningButton
          id="sing"
          onClick={(e: any) => handleState(e, 1)}
          state={myPageState}
        >
          내 노래
        </StyledMyLearningButton>
        <StyledMyLearningButton
          id="ai"
          onClick={(e: any) => handleState(e, 2)}
          state={myPageState}
        >
          AI 분석
        </StyledMyLearningButton>
      </StyledMyLearningTitle>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        onSlideChange={handleChange}
      >
        <SwiperSlide>
          <MyShadowing />
        </SwiperSlide>
        <SwiperSlide>
          <MySing />
        </SwiperSlide>
        <SwiperSlide>
          <MySituation />
        </SwiperSlide>
      </Swiper>
      {/* {state === "shadowing" && <MyShadowing></MyShadowing>}
      {state === "sing" && <MySing></MySing>}
      {state === "ai" && <MySituation></MySituation>} */}
    </StyledMyLearningComponent>
  );
};

export default Mylearning;
