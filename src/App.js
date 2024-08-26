import { BrowserRouter,Route,Routes } from "react-router-dom";
import Aim from "./Componets/Body/Aim";
import IndexArea from "./Componets/IndexPage/IndexArea";
import Navbar from "./Componets/Navbar/Navbar";
import './App.css'
import Procedure from "./Componets/Body/Procedure";
import Theroy from "./Componets/Body/Theroy";
import Result from "./Componets/Body/Result";
import Quiz from "./Componets/Body/Quiz";
import Pro from "./Componets/Body/Pro";
import References from "./Componets/Body/References";
import Codes from "./Componets/Body/Codes";
import Team from "./Componets/Body/Team";
function App() {
  return (
   <div className="App">
      <BrowserRouter>
      <Navbar/>
      <IndexArea/>
      <Routes>
          <Route path="/" element={ <Aim/>} />
          <Route path="/theory" element={<Theroy/>} />
          <Route path="/procedure" element={<Pro/>} />
          <Route path="/practice" element={<Procedure/>} />
          <Route path="/code" element={<Codes/>} />
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/result" element={<Result/>} />
          <Route path="/reference" element={<References/>} />
          <Route path="/team" element={<Team/>} />
        </Routes>
      </BrowserRouter>
</div>  );
}

export default App;
