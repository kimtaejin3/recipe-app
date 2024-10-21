import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import AddByHand from "./pages/AddByHand";
import AddByWebsite from "./pages/AddByWebsite";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/add-by-hand" element={<AddByHand />} />
          <Route path="/add-by-website" element={<AddByWebsite />} />
          <Route path="/recipe" element={<RecipeDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
