import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:serviceName" element={<Services />} />
          <Route path="/services/:serviceName/:subServiceName" element={<Services />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
