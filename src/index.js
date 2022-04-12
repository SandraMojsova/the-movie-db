import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "contexts";
import App from "App";
import Movie from "components/Movie";
import "assets/styles/styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Context>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/movie/:id" element={<Movie />} />
            </Routes>
        </BrowserRouter>
    </Context>
);
