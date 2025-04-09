import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import NavBar from "./components/NavBar";
import Team from "./pages/Team";

function App() {
    return (
        <div>
            <NavBar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/team" element={<Team />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
