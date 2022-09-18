

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./component/home/home";
import Viewmusic from "./component/viewmusic/viewmusic";



function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewmusic" element={<Viewmusic/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
