import { createRoot } from "react-dom/client";
import Navbar from "./navbar.jsx";
import Body from "./body.jsx";
import { useState } from "react";
import Alert from "./alert.jsx";
import About from "./about.jsx";

const App = () => {

  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [dark, setDark] = useState("Dark");

  const handleclick = () => {
    if (dark === "Dark") {
      setDark("Light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showalert("Light Mode Set", "success");
    } else {
      setDark("Dark");
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "white";
      showalert("Dark Mode Set", "success");
    }
  };
    return(
    <>
    <Navbar navbar="Text Utils" about="About" func={handleclick} text={dark} />
        <Alert alert={alert} />
        <Body heading="Enter Your text here" func={handleclick} text={dark} showalert={showalert} />
    </>
    );
};

createRoot(document.getElementById("root")).render(<App/>);
