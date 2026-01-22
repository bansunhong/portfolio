import React, { memo } from "react";

import styled from "styled-components";

import MainSlider from "../components/MainSlider";
import MainAboutMe from "../components/MainAboutMe";
import MainPointer from "../components/MainPointer";
import MainPortfolio from "../components/MainPortfolio";
import MainContact from "../components/MainContact";

const MainContainer = styled.div``;

const Main = memo(() => {
    return (
        <MainContainer>
            <MainPortfolio />
            <MainSlider />
            <MainAboutMe />
            <MainPointer />
            <MainContact />
        </MainContainer>
    );
});

export default Main;
