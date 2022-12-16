import React from "react";
import "./App.css";
import { createNativeInstance, tx } from "@transifex/native";
// import config from "./config";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { LanguagePicker, TXProvider, useTX } from "@transifex/react";
import First from "./pages/First";
import Home from "./pages/Home";
import Second from "./pages/Second";
import { LanguageProvider } from "./context/LanguageContext";

tx.init({
  // token: process.env.PUBLIC_TRANSIFEX_TOKEN,
  token: "1/8a18fc39d446295c94e2e72b975bc44f16cc7c7f",
});

/* const myOtherTXInstance = createNativeInstance();
myOtherTXInstance.init({ token: config.PUBLIC_TRANSIFEX_TOKEN, })
myOtherTXInstance.setCurrentLocale('en'); */
tx.setCurrentLocale("en");

function App() {
  const tx = useTX();
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button onClick={() => navigate("/first", { replace: false })}>First</button>
        <button onClick={() => navigate("/second", { replace: false })}>Second</button>
      </div>
      <LanguageProvider>
        <TXProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/first" element={<First />} />
              <Route path="/second" element={<Second />} />
            </Routes>
          </BrowserRouter>
        </TXProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
