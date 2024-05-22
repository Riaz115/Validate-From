import { useEffect } from "react";
import "./App.css";
import MyForm from "./Components/MyForm";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  // this for use effect function
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <MyForm />
    </>
  );
}

export default App;
