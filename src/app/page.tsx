import Data from "@/comps/Data";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <h1>Home page</h1>
        <Suspense fallback="loading">
          <Data />
        </Suspense>
      </div>
    </>
  );
}
