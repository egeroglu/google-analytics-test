import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Page1 from './pages/page1';
import Test from './pages/test';
import PageSon from './pages/pageSon';
import ReactGA from 'react-ga';
ReactGA.initialize('G-RKFYNTHXE4');

function App() {
  ReactGA.pageview(window.location.pathname + window.location.search);

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
