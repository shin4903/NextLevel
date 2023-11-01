package com.ddoya.show.tvshow.service;

import com.ddoya.show.tvshow.dto.EntireShowResultDto;
import com.ddoya.show.tvshow.dto.ShowClipsResultDto;
import com.ddoya.show.tvshow.dto.ShowProblemResultDto;

public interface TvShowService {
    EntireShowResultDto getEntireShowList();

    ShowClipsResultDto getShowClips(Integer showId);

    ShowProblemResultDto getClipInfo(int showProblemId);

    void playShowProblem(int showProblemId);
}
