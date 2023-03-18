import LoginChecker from "components/LoginChecker";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <LoginChecker>
          <Component {...pageProps} />
        </LoginChecker>
      </RecoilRoot>
    </>
  );
}
