import React, { useEffect } from "react";
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => {
  useEffect(() => {
    // Change the background color to black when the component mounts
    document.body.style.backgroundColor = "black";

    // Clean up the effect by restoring the original background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return <PortfolioContainer />;
};

export default App;
