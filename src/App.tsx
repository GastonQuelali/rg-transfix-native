import React from "react";
import { T, LanguagePicker } from "@transifex/react";
import logo from "./logo.svg";
import "./App.css";
import { tx, SourceErrorPolicy, ThrowErrorPolicy } from "@transifex/native";
import { TransifexI18next } from '@transifex/i18next';
import i18next from "i18next";

const user = "MAURICIO MONTERO";

tx.init({
  token: '1/0065d81ed52c38b77e09b3d978f36fe4d3ced7d9',
  errorPolicy: new ThrowErrorPolicy(),
});

tx.setCurrentLocale('en');

const txBackend = new TransifexI18next({
  token: 'public token',
  // other options from @transifex/native init function
});
/*
  {
    react: {
        useSuspense: false,
        wait: true,
    },
    resources,
    fallbackLng: 'en_GB',
    lng: 'en_GB',
    keySeparator: '.',
    ns: ['onfido'],
    defaultNS: 'onfido',
}
*/
// add plugin to i18next
i18next.use(txBackend).init({
  lng: 
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <T _str="This is a test" key={'This_is_a_test'} /><br />
          <T _str="Hello world" /><br />
          <T _str="Hello {username}" username={user} />
        </div>
        <LanguagePicker />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
// npx txjs-cli push src/ --token=1/0065d81ed52c38b77e09b3d978f36fe4d3ced7d9 --secret=1/e969cdca6bcc028541ae3ce25417c511064b3cb8
// npx txjs-cli invalidate --token=1/0065d81ed52c38b77e09b3d978f36fe4d3ced7d9 --secret=1/e969cdca6bcc028541ae3ce25417c511064b3cb8