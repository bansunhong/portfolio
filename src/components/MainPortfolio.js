import React, { memo, useState, useCallback } from "react";

import styled from "styled-components";

import mq from "./MediaQuery";

import FsLightbox from "fslightbox-react";

import parallax2 from "../assets/img/parallax2.jpg";

import p1 from "../assets/img/p1.jpg";
import p2 from "../assets/img/p2.jpg";
import p3 from "../assets/img/p3.jpg";
import p4 from "../assets/img/p4.jpg";
import p5 from "../assets/img/p5.jpg";
import p6 from "../assets/img/p6.jpg";
import p7 from "../assets/img/p7.jpg";
import p8 from "../assets/img/p8.jpg";

const MainPortfolioContainer = styled.div`
    /* background-color: #2d23b655; */

    .title-wrapper {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(${parallax2});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        margin-bottom: 64px;

        ${mq.maxWidth("md")`
            height: 32vh;
            margin-bottom: 48px;
        `}

        .title-box {
            text-align: center;
            color: #f1f1f1;
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

        h3 {
            text-align: center;
            font-size: 36px;
            font-weight: 600;
            margin-bottom: 32px;
            color: #424242;

            ${mq.maxWidth("md")`
                font-size: 28px;
            `}
        }

        p {
            text-align: center;
            margin-bottom: 24px;
            font-size: 20px;
            color: #616161;
            font-weight: 300;
            font-style: italic;

            ${mq.maxWidth("md")`
                font-size: 16px;
                margin-bottom: 16px;
            `}
        }

        .gallery {
            margin-top: 45px;
            display: flex;
            flex-wrap: wrap;

            ${mq.maxWidth("md")`
                margin-top: 28px;
            `}

            li {
                flex: 1 1 25%;

                ${mq.maxWidth("md")`
                    flex: 1 1 50%;
                `}

                a {
                    display: block;
                    margin: 10px;
                    overflow: hidden;

                    ${mq.maxWidth("md")`
                        margin: 5px;
                    `}

                    img {
                        width: 100%;
                        object-fit: cover;
                        transition: all 0.3s ease-in-out;

                        &:hover {
                            transform: scale(1.2, 1.2);
                        }
                    }
                }
            }
        }
    }
`;

const MainPortfolio = memo(() => {
    const pimgs = [p1, p2, p3, p4, p5, p6, p7, p8];

    const [multiToggler, setMultiToggler] = useState({
        open: false,
        index: 1,
    });

    const onGalleryItemClick = useCallback(
        (e) => {
            e.preventDefault();

            const currentIndex = e.currentTarget.dataset.index;

            setMultiToggler({ open: !multiToggler.open, index: currentIndex });
        },
        [multiToggler]
    );

    return (
        <MainPortfolioContainer>
            <div className="title-wrapper">
                <div className="title-box">
                    <h2>Portfolio</h2>
                    <p>This is my work</p>
                </div>
            </div>
            <div className="content">
                <h3>My Work</h3>
                <p>Here are some of my latest lorem work ipsum tipsum.</p>
                <p>Click on the images to make them bigger</p>

                <FsLightbox sources={pimgs} toggler={multiToggler.open} slide={multiToggler.index} />

                <ul className="gallery">
                    {pimgs.map((v, i) => {
                        return (
                            <li key={i}>
                                <a href="#" onClick={onGalleryItemClick} data-index={i + 1}>
                                    <img src={v} />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </MainPortfolioContainer>
    );
});

export default MainPortfolio;
