import LoginChecker from "components/LoginChecker";

export default function App({ Component, pageProps }) {
  return (
    <>
      <LoginChecker>
        <Component {...pageProps} />
      </LoginChecker>
    </>
  );
}
