import React, { memo } from "react";

import styled from "styled-components";

import mq from "./MediaQuery";

import p9 from "../assets/img/p9.png";

const MainContactContainer = styled.div`
    .title-wrapper {
        width: 100%;
        height: 40vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(${p9});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        margin-bottom: 64px;
        opacity: 0.9;

        ${mq.maxWidth("md")`
            height: 32vh;
            margin-bottom: 48px;
        `}

        .title-box {
            text-align: center;
            color: #ff2a2aff;
            text-transform: uppercase;

            h2 {
                font-size: 42px;
                font-weight: 600;
                margin-bottom: 15px;

                ${mq.maxWidth("md")`
                    font-size: 32px;
                `}
            }

            p {
                font-size: 20px;
                font-weight: 300;
            }
        }
    }

    .content {
        max-width: 1200px;
        margin: auto;
        margin-bottom: 60px;
        display: flex;
        flex-wrap: wrap;

        .map {
            flex: 1 1 50%;
            height: 40vh;

            ${mq.maxWidth("md")`
                flex: 1 1 100%;
                margin-bottom: 20px;
            `}
        }

        .contact-info {
            flex: 1 1 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            padding-left: 32px;

            ${mq.maxWidth("md")`
                flex: 1 1 100%;
                padding-left: 20px;
                padding-right: 20px;
            `}

            li {
                font-size: 20px;
                color: #616161;

                i {
                    margin-right: 10px;
                }

                ${mq.maxWidth("md")`
                    margin: 15px 0;
                `}
            }
        }
    }
`;

const MainContact = memo(() => {
    return (
        <MainContactContainer>
            <div className="title-wrapper">
                <div className="title-box">
                    <h2>Contact</h2>
                    <p>Address, Email, Phone</p>
                </div>
            </div>
            <div className="content">
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.229473338798!2d126.9258938!3d37.47891089999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9fc421ffc629%3A0xdcb8a06ca7481f5b!2z7ISc7Jq47Yq567OE7IucIOq0gOyVheq1rCDrrLjshLHroZwgMjAw!5e0!3m2!1sko!2skr!4v1767376345540!5m2!1sko!2skr" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <ul className="contact-info">
                    <li>
                        <i className="fa fa-solid fa-location-dot"></i>
                        address: 서울특별시 관악구 문성로 200
                    </li>
                    <li>
                        <i className="fa fa-solid fa-phone"></i>
                        <a href="tel:02-588-9991">Phone: 010-4021-1250</a>
                    </li>
                    <li>
                        <i className="fa fa-solid fa-envelope"></i>
                        <a href="mailto:mail@mail.com">Email: ashbsh@nate.com</a>
                    </li>
                </ul>
            </div>
        </MainContactContainer>
    );
});

export default MainContact;
