import React, { memo } from "react";

import { Routes, Route } from "react-router-dom";

import { Reset } from "styled-reset";
import MyGlobalStyles from "./components/MyGlobalStyles";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";

const App = memo(() => {
    return (
        <>
            <Reset />
            <MyGlobalStyles />

            <Header />
            <Routes>
                <Route path="/" exact={true} element={<Main />} />
            </Routes>
            <Footer />
        </>
    );
});

export default App;
