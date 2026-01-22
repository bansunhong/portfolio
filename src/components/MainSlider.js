import React, { memo } from "react";

import styled from "styled-components";

import ImageSlider from "react-simple-image-slider";
import mq from "./MediaQuery";

import parallax1 from "../assets/img/parallax1.jpg";
import parallax2 from "../assets/img/parallax2.jpg";
import parallax3 from "../assets/img/parallax3.jpg";

const MainSliderContainer = styled.div`
    height: 100vh;
    position: relative;

    .hello-container {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .hello {
            background-color: #616161;
            color: #f1f1f1;
            text-align: center;
            text-transform: uppercase;
            padding: 30px 50px;

            ${mq.maxWidth("md")`
                padding: 20px 30px;
            `}

            h1 {
                font-size: 42px;
                font-weight: 600;
                white-space: nowrap;
                margin-bottom: 25px;

                ${mq.maxWidth("md")`
                    font-size: 26px;
                `}
            }

            p {
                font-size: 20px;
                font-weight: 300;

                ${mq.maxWidth("md")`
                    font-size: 16px;
                `}
            }
        }
    }
`;

const MainSlider = memo(() => {
    const myImages = [{ url: parallax1 }, { url: parallax2 }, { url: parallax3 }];

    return (
        <MainSliderContainer>
            <ImageSlider width="100%" height="100%" images={myImages} showBullets={true} showNavs={true} autoPlay={true} autoPlayDelay={3.0} slideDuration={1} loop={true} />

            <div className="hello-container">
                <div className="hello">
                    <h1>안녕하세요.</h1>
                    <p>This is my website</p>
                </div>
            </div>
        </MainSliderContainer>
    );
});

export default MainSlider;
