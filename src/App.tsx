import React from "react";
import "./App.css";
import { createNativeInstance, tx } from "@transifex/native";
import config from "./config";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguagePicker, TXProvider, useTX } from "@transifex/react";
import First from "./pages/First";
import Home from "./pages/Home";
import Second from "./pages/Second";
import { LanguageProvider } from "./hooks/LanguageContext";

tx.init({
  token: config.PUBLIC_TRANSIFEX_TOKEN,
});

/* const myOtherTXInstance = createNativeInstance();
myOtherTXInstance.init({ token: config.PUBLIC_TRANSIFEX_TOKEN, })
myOtherTXInstance.setCurrentLocale('en'); */
tx.setCurrentLocale('en');

function App() {
  const tx = useTX();
  return (
    <>
      <LanguageProvider>
        <TXProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/first' element={<First />} />
              <Route path='/second' element={<Second />} />
            </Routes>
          </BrowserRouter>
        </TXProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
