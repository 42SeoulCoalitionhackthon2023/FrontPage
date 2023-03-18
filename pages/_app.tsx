import LoginChecker from "components/LoginChecker";
import RouteChangeTracker from "../components/RouteChangeTracker";
import ReactGA from "react-ga";

export default function App({ Component, pageProps }) {
  // Enable Google Analytics
  RouteChangeTracker();

  if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
  }

  return (
    <>
      <LoginChecker>
        <Component {...pageProps} />
      </LoginChecker>
    </>
  );
}
