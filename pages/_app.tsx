import LoginChecker from "components/LoginChecker";
import { Router } from "react-router-dom";

export default function App({ Component, pageProps }) {

  return (
    <>
      <LoginChecker>
        <Component {...pageProps} />
      </LoginChecker>
    </>
  );
}
