import React, { memo } from "react";

import styled from "styled-components";
import mq from "../components/MediaQuery";

const HeaderContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9999;

    .gnb {
        max-width: 1800px;
        margin: auto;
        display: flex;

        li {
            text-align: center;

            ${mq.maxWidth("md")`
                flex: 0 0 20%;
            `}

            &:last-child {
                margin-left: auto;

                span {
                    display: none;

                    ${mq.maxWidth("md")`
                        display: block;
                    `}
                }
            }

            a {
                display: block;
                font-size: 18px;
                font-weight: 500;
                padding: 20px;

                &:hover {
                    background-color: #00000011;
                }

                span {
                    margin-left: 10px;
                    font-size: 17px;

                    ${mq.maxWidth("md")`
                        dispaly: block;
                        margin-top:5px;
                        margin-left:0;
                        font-size:12px;
                        font-weight: 400;
                    `}
                }
            }
        }
    }
`;

const Header = memo(() => {
    return (
        <HeaderContainer>
            <ul className="gnb">
                <li>
                    <a href="#">
                        <i className="fa fa-home"></i>
                        <span>HOME</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-user"></i>
                        <span>ABOUT</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-th"></i>
                        <span>PORTFOLIO</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-envelope"></i>
                        <span>CONTACT</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-search"></i>
                        <span>SEARCH</span>
                    </a>
                </li>
            </ul>
        </HeaderContainer>
    );
});

export default Header;
