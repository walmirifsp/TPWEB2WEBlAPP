import { useState, useEffect } from "react";

import Routes from "./routes";

import GlobalStyle from "./globalStyle";

const App = () => {
  const [signed, setSigned] = useState(false);

  const verifyIfIsLogged = async () => {
    const isLogged = await localStorage.getItem("signed");
    if (isLogged) setSigned(true);
  };

  useEffect(() => {
    verifyIfIsLogged();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Routes signed={signed} />
    </>
  );
};

export default App;
