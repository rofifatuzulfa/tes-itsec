import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Inbox from "./pages/Inbox";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/inbox" element={<Inbox />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
