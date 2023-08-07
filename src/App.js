import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Page1 from './pages/page1';
import Test from './pages/test';
import PageSon from './pages/pageSon';

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/pageSon" element={<PageSon />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
