import React, { memo } from "react";

import styled from "styled-components";

const FooterContainer = styled.div`
    background-color: #000;
    text-align: center;
    padding: 50px 10px;

    .to-the-top {
        background-color: #eee;
        padding: 10px 25px;
        font-size: 18px;
        margin-bottom: 10px;

        display: inline-block;
        &:hover {
            background-color: #666;
            color: #000;
        }
    }

    .social-list {
        display: flex;
        justify-content: center;

        a {
            color: #f1f1f1;
            display: block;
            font-size: 35px;
            margin: 20px 10px 40px 10px;

            &:hover {
                color: #666;
            }
        }
    }

    address {
        color: #f1f1f1;
        font-size: 18px;
    }
`;

const Footer = memo(() => {
    return (
        <FooterContainer>
            <a href="#" className="to-the-top">
                <i className="fa fa-solid fa-arrow-up"></i>
            </a>

            <ul className="social-list">
                <li>
                    <a href="#">
                        <i className="fa fa-brands fa-square-faebook"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-brands fa-square-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-brands fa-square-snapchat"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-brands fa-square-pinterest"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-brands fa-square-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-brands fa-square-linkedin"></i>
                    </a>
                </li>
            </ul>

            <address>copyright&copy;ashbsh.kr</address>
        </FooterContainer>
    );
});

export default Footer;
