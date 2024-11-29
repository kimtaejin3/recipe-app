import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import AddByHand from "./pages/AddByHand";
import AddByWebsite from "./pages/AddByWebsite";
import RecipeDetail from "./pages/RecipeDetail";
import Recipes from "./pages/Recipes";
import AddByYoutube from "./pages/AddByYoutube";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Recipes />} />
          <Route path="/controls" element={<Home />} />
          <Route path="/add-by-hand" element={<AddByHand />} />
          <Route path="/add-by-website" element={<AddByWebsite />} />
          <Route path="/add-by-youtube" element={<AddByYoutube />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
