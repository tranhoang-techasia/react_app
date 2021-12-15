import './scss/App.scss';
import Homepage from "pages/HomePage/Home"
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Homepage />
      <Routes>
          <Route path="/home" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
