import React from "react";
import { T, LanguagePicker, UT } from "@transifex/react";
import logo from "./logo.svg";
import "./App.css";
import { tx } from "@transifex/native";

const user = "MAURICIO MONTERO";

tx.init({
  token: process.env.REACT_APP_TRANSIFEX_TOKEN,
});

tx.setCurrentLocale('en');

function App() {
  return (
    <div className="App">

      <header className="App-header">

        <div style={{ margin: 20 }}>
          <LanguagePicker />
        </div>
        <div style={{ margin: 20 }}>
        <T _str="This is a test" key={'This_is_a_test'} /><br />
        </div>
        <div style={{ margin: 20 }}>
        <T _str="Hello world" /><br />
        </div>  
        <div style={{ margin: 20 }}>
          <T _key="cashback-can-take-up-to-3-days-to-appear-on-your-s" />
        </div>
        <div style={{ margin: 20 }}>
          <UT _key="cashback-can-take-up-to-3-days-to-appear-on-your-s" _str="Cashback can take up to <strong>3 days</strong> to appear on your statement as pending but, most often, it only takes a couple of hours. If nothing has appeared after 3 days, there’s no need to panic – we have a team who can investigate this for you. They also investigate Cashback which you believe has been incorrectly rejected or is wrong. Cashback amounts will become available once your order has passed that retailers refund/exchange period. Travel retailers will process your Cashback after you’ve completed your stay." />
        </div>
      </header>
    </div>
  );
}

export default App;
// npx txjs-cli push src/ --token=1/0065d81ed52c38b77e09b3d978f36fe4d3ced7d9 --secret=1/e969cdca6bcc028541ae3ce25417c511064b3cb8
// npx txjs-cli invalidate --token=1/0065d81ed52c38b77e09b3d978f36fe4d3ced7d9 --secret=1/e969cdca6bcc028541ae3ce25417c511064b3cb8