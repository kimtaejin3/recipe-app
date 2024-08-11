import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import AddByHand from "./pages/AddByHand";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/add-byhand" element={<AddByHand />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
