import LoginChecker from "components/LoginChecker";
import ErrorChecker from "components/error/ErrorChecker";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <ErrorChecker>
          <LoginChecker>
            <Component {...pageProps} />
          </LoginChecker>
        </ErrorChecker>
      </RecoilRoot>
    </>
  );
}
