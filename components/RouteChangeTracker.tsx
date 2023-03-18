import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

export default function RouteChangeTracker() {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Initialize Google Analytics
    if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
      ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);
}
