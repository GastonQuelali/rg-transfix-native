import { LanguagePicker, T, useLocale, useTX, UT } from "@transifex/react";
import { FC } from "react";
import { useCurrentLanguage } from "../hooks/LanguageContext";

const Home: FC = () => {
  const tx = useTX();
  const locale = useLocale();
  const { setCurrentLanguage } = useCurrentLanguage();

  //setCurrentLanguage(`${locale}`);

  const changeLanguage = (lng: string) => {
    tx.setCurrentLocale(lng);
    setCurrentLanguage(lng);
  };


  return (
    <div className="App">
      <header className="App-header">
        <div style={{ margin: 20 }}>
          <LanguagePicker />
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("de_DE")}>German</button>
          <button onClick={() => changeLanguage("fr_FR")}>French</button>
          <button onClick={() => changeLanguage("it_IT")}>Italian</button>
        </div>
        <div style={{ margin: 20 }}>
          <T _str="Hello world" /><br />
        </div>
        <div style={{ margin: 20 }}>
          <UT _key="cashback-can-take-up-to-3-days-to-appear-on-your-s" _str="Cashback can take up to <strong>3 days</strong> to appear on your statement as pending but, most often, it only takes a couple of hours. If nothing has appeared after 3 days, there’s no need to panic – we have a team who can investigate this for you. They also investigate Cashback which you believe has been incorrectly rejected or is wrong. Cashback amounts will become available once your order has passed that retailers refund/exchange period. Travel retailers will process your Cashback after you’ve completed your stay." />
        </div>
      </header>
    </div>
  )
};

export default Home;
