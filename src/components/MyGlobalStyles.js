/*
    모든 페이지에 적용되는 전역(공통) CSS를 정의하는 컴포넌트
    - 이 예제에 적합하게 신규 작성
*/
import { createGlobalStyle } from "styled-components";

const MyGlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    *:not(.fa) {
        // "publick/index.html" 파일에 구글 웹 폰트 적용이 필요함.
        font-family:"Noto Sans KR" ;
    }

    a {
        text-decoration: none;
        color:#000;

        &:hover {
            color:#06f;
        }

        &:active {
            color:#f00;
        }
    }
`;

export default MyGlobalStyles;
