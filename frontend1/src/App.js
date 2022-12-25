import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./components/Beranda";
import Blogs from "./components/Blogs";
import Project from "./components/Project";
import TentangKami from "./components/TentangKami";
 
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="Blogs/" element={<Blogs />} />
          <Route path="Projek/" element={<Project />} />
          <Route path="tentangKami/" element={<TentangKami />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
 
export default App;