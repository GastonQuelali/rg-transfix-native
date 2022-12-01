import { LanguagePicker, T, UT, useLocale } from "@transifex/react";

import { FC } from "react";
import { useCurrentLanguage } from "../hooks/LanguageContext";

const First: FC = () => {
  const { currentLanguage } = useCurrentLanguage();

  return (
    <div className="App">
      <h1>First Page</h1>
      <p>Currently selected locale is {currentLanguage}</p>
      <header className="App-header">
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

export default First;
