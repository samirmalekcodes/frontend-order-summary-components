/* eslint-disable jsx-a11y/alt-text */
import Cards from "./Components/Card";
import wave1 from "./images/pattern-background-desktop.svg";
import Wave2 from "./images/pattern-background-mobile.svg";

function App() {
  return (
    <div className="bg-blue-100 relative h-screen flex justify-center items-center  ">
      <img src={wave1} className="absolute top-0 left-0 right-0 w-screen" />
      <Cards />
    </div>
  );
}

export default App;