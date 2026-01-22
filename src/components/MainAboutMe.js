import React, { memo, useEffect } from "react";

import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";

import mq from "./MediaQuery";

import aboutMe from "../assets/img/about_me.jpg";

const MainAboutMeContainer = styled.div`
    max-width: 1100px;
    margin: auto;
    padding: 65px 40px;

    ${mq.maxWidth("md")`
        padding: 45px 20px;
    `}

    h2 {
        font-size: 42px;
        color: #444444;
        text-align: center;
        margin-bottom: 40px;

        ${mq.maxWidth("md")`
            font-size: 36px;
            margin-bottom: 20px;
        `}
    }

    h3 {
        font-size: 30px;
        color: #616161;
        text-align: center;
        font-style: italic;
        margin-bottom: 40px;

        ${mq.maxWidth("md")`
            font-size: 24px;
            margin-bottom: 30px;
        `}
    }

    p {
        font-size: 18px;
        line-height: 150%;
        font-weight: 300;
        margin-bottom: 20px;

        ${mq.maxWidth("md")`
            font-size: 16px;
            line-height: 135%;
            margin-bottom: 12px;
        `}
    }

    h4 {
        font-size: 22px;
        color: #616161;
        margin-top: 40px;
        margin-bottom: 20px;

        i {
            margin-right: 10px;
        }
    }

    .photo-box {
        display: flex;

        ${mq.maxWidth("md")`
            flex-direction: column;
        `}

        img {
            height: 300px;
            flex: 1 1 20%;
            margin-right: 25px;

            ${mq.maxWidth("md")`
                flex: 1 1 100%;
                margin-right: 0px;
                margin-bottom: 35px;
            `}
        }

        p {
            flex: 1 1 80%;

            ${mq.maxWidth("md")`
                flex: 1 1 100%;
            `}
        }

        margin-bottom: 90px;

        ${mq.maxWidth("md")`
            margin-bottom: 50px;
        `}
    }

    .skill-section {
        h4 {
            font-size: 22px;
            font-weight: 400;
            margin-bottom: 20px;

            ${mq.maxWidth("md")`
                font-size: 18px;
                margin-bottom: 10px;
            `}
        }

        .bar-container {
            width: 100%;
            background-color: #eeeeee;

            ${mq.maxWidth("md")`
                height: 30px;
            `}

            .bar {
                background-color: #616161;
                height: 100%;
                color: #fff;
                font-size: 14px;
                display: flex;
                justify-content: center;
                align-items: center;

                &.web-publishing {
                    width: 95%;
                }

                &.web-design {
                    width: 50%;
                }

                &.front-end {
                    width: 70%;
                }
            }
        }
    }
`;

const MainAboutMe = memo(() => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <MainAboutMeContainer>
            {/* ABOUT ME */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h2>ABOUT ME</h2>
                <h3>I love myself,</h3>
                <p>
                    친구들은 일 중독이라 할 정도로 하나에 빠지면 파고드는 성격으로 취미로 시작된 포토샵이나 일러스트 프로그램도 혼자서 독학하며 익히는 열의도 갖고 있습니다. 그래서 제 경력이 절대 부끄럽지 않고 지금까지 저를 만드는 중요한 일이라 생각합니다. 여러 프로젝트를 하면서 다양한 사람들과의 만남에서 지금의 업무에 더욱 매력을 느꼈습니다. 특히 퍼블리싱을 하다 보면 그 결과물을 보고 느끼는 뿌듯함과 짜릿함은 끊을 수 없는 중독과도 같습니다. 누군가는 돈을 벌기 위해 일을 하지만, 저는 자부합니다! 제 취미와 진짜 제가 하고 싶은 일을 하고 있기 때문에 100% 만족이라고는 할 수 없지만, 99%의 만족을
                    느끼며 퍼블리싱을 합니다.
                </p>

                <h4>
                    <i className="fa fa-solid fa-user"></i>
                    BAN SUN HONG
                </h4>
                <div className="photo-box">
                    <img src={aboutMe} />
                    <p>
                        제가 만든 디자인이 그 쓰임을 발휘할 때 제가 it 업무 자를 이용하여 또는 제 본질로써 살아 숨 쉬게 할 만큼 너무나 큰 행복을 느낀다는 걸 알게 되었습니다. 일을 다니다 보면 슬럼프도 있고 누구나 흔히 말하는 ‘지겹다. 쉬고 싶다’ 사실 저도 이런 단어를 쓰긴 합니다. 하지만 맡겨진 일에 행복할 줄 알고 즐길 줄 안다고 저를 말하고 싶습니다. 또 어떤 누군가에게 제 업무에 관해 자신감과 당당하게 일을 하고 있다고 말할 수 있어지고 싶습니다. 난 이 회사에 노동을 하는 게 아니라 즐기로, 발휘하러, 나를 빛내러 들어간 거라 말할 수 있는 저 자신을 만들기 위해 지원합니다. <br />웹 디자인 쪽 관련 업무의
                        경험과 웹 퍼블리셔와의 경험을 쌓아왔습니다. 전체적인 디자인을 보고 웹 퍼블리셔로서의 단계가 그 누군가에겐 어두운 인터넷 세상을 열어주는 빛과 같은 역할을 저에게 맡겨주신다면 미흡한 지식이지만 여러 사람에게 도움과 저 자신의 보람과 성취감을 느끼고 싶습니다. 부족함을 알고 있어 더욱 노력할 줄 안다고 생각합니다. 당당히 웹 퍼블리셔라고 말하기 조금 쑥스럽지만 더욱 노력하고 보람을 느낄 수 있는 웹 퍼블리셔가 되고 싶습니다!
                    </p>
                </div>
            </div>

            {/* I'm really good at: */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h3>I'm really good at:</h3>

                <div className="skill-section">
                    <h4>
                        <i className="fa fa-solid fa-pen"></i>
                        <span>Web Publishing</span>
                    </h4>
                    <div className="bar-container">
                        <div className="bar web-publishing">95%</div>
                    </div>
                </div>

                <div className="skill-section">
                    <h4>
                        <i className="fa fa-solid fa-laptop"></i>
                        <span>Web Design</span>
                    </h4>
                    <div className="bar-container">
                        <div className="bar web-design">50%</div>
                    </div>
                </div>

                <div className="skill-section">
                    <h4>
                        <i className="fa fa-solid fa-image"></i>
                        <span>Vue/React</span>
                    </h4>
                    <div className="bar-container">
                        <div className="bar front-end">70%</div>
                    </div>
                </div>
            </div>
        </MainAboutMeContainer>
    );
});

export default MainAboutMe;
