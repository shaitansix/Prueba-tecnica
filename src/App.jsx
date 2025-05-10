import { Routes, Route } from "react-router";
import Layout from "@/layout/Layout";
import Doctors from "@/pages/doctors/Doctors";
import Pokemons from "@/pages/pokemons/Pokemons";
import "./App.css";

function App() {
  return (
    <main className="app">
      <Layout>
        <Routes>
          <Route index element={<Doctors />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/pokemons" element={<Pokemons />} />
        </Routes>
      </Layout>
    </main>
  );
}

export default App;
