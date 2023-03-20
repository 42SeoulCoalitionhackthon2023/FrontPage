import LoginChecker from "components/LoginChecker";
import ErrorChecker from "components/error/ErrorChecker";
import { RecoilRoot } from "recoil";
import ReactGA from 'react-ga'
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
    ReactGA.initialize('G-632Z4VQM76')
    const router = useRouter();

    useEffect(() => {
      const handleRouteChange = (url: string) => {
      ReactGA.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  
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
