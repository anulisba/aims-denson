import React, { useState } from "react";
import LandingPage from "./pages/Landing";
import Loader from "./pages/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <LandingPage />
      )}
    </>
  );
}

export default App;