import React, { memo } from "react";

import styled from "styled-components";
import mq from "./MediaQuery";

import CountUp from "react-countup";

const MainPointerContainer = styled.div`
    background-color: #424242;

    .point-container {
        max-width: 1200px;
        margin: auto;
        padding: 60px 10px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        ${mq.maxWidth("md")`
            padding: 20px 10px;
        `}

        .point-item {
            flex: 1 1 25%;
            color: #f1f1f1;
            text-align: center;

            ${mq.maxWidth("md")`
                flex: 1 1 50%;
                margin: 20px auto;
            `}

            .point-value {
                font-size: 45px;
                font-weight: 500;
                margin-bottom: 25px;
            }

            .point-text {
                font-size: 24px;
                font-weight: 300;
            }
        }
    }
`;

const MainPointer = memo(() => {
    return (
        <MainPointerContainer>
            <div className="point-container">
                <div className="point-item">
                    <div className="point-value">
                        <CountUp start={1} end={140} duration={3} enableScrollSpy scrollSpyDelay={700} className="my-counter" />+
                    </div>
                    <div className="point-text">Count example</div>
                </div>
                <div className="point-item">
                    <div className="point-value">
                        <CountUp start={1} end={55} duration={4} enableScrollSpy scrollSpyDelay={500} className="my-counter" />+
                    </div>
                    <div className="point-text">Count example</div>
                </div>
                <div className="point-item">
                    <div className="point-value">
                        <CountUp start={1} end={89} duration={3} enableScrollSpy scrollSpyDelay={700} className="my-counter" />+
                    </div>
                    <div className="point-text">Count example</div>
                </div>
                <div className="point-item">
                    <div className="point-value">
                        <CountUp start={1} end={150} duration={2} enableScrollSpy scrollSpyDelay={700} className="my-counter" />+
                    </div>
                    <div className="point-text">Count example</div>
                </div>
            </div>
        </MainPointerContainer>
    );
});

export default MainPointer;
