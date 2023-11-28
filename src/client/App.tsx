import "./App.css";

import { useState } from "react";

import reactLogo from "./assets/react.svg";
import {ThemeModeProvider} from "./_metronic/partials/";
import {I18nProvider} from "./_metronic/i18n/i18nProvider";
import {LayoutProvider} from "./_metronic/layout/core";
import {Outlet} from "react-router-dom";
import {MasterInit} from "./_metronic/layout/MasterInit";

function App() {
  const [count, setCount] = useState(0);

  return (
      <I18nProvider>
          <LayoutProvider>
              <ThemeModeProvider>
                  <Outlet />
                  <MasterInit />
              </ThemeModeProvider>
          </LayoutProvider>
      </I18nProvider>
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 25)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
  );
}

export default App;
