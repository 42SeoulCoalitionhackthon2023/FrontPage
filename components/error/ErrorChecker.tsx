import { useRecoilValue } from "recoil";
import { errorState } from "utils/recoil";
import ErrorPage from "./ErrorPage";

interface ErrorCheckerProps {
  children: React.ReactNode;
}

export default function ErrorChecker({ children }: ErrorCheckerProps) {
  const error = useRecoilValue(errorState);

  return error === "" ? (
    <>{children}</>
  ) : (
    <div>
      <div>
        <ErrorPage />
      </div>
    </div>
  );
}
