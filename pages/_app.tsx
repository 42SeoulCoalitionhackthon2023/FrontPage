import LoginChecker from "components/LoginChecker";
import ErrorChecker from "components/error/ErrorChecker";
import { RecoilRoot } from "recoil";
import ReactGA from 'react-ga'

export default function App({ Component, pageProps }) {
  ReactGA.initialize('G-H2JKMSJ03B')
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
