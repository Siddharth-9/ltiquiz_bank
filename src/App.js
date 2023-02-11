import { Routes, Route} from "react-router-dom";
import Userdata from "./MyComponents/Userdata"
import C1react from "./REACT/C1react"
import "./MyComponents/Userdata.css"


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Userdata />} />
        <Route exact path="/questions" element={<C1react />}/>
      </Routes>
    </>
  );
}

export default App;
