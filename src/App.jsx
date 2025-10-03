import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/DashboardNew';
import DeliverablesTimeline from './components/DeliverablesTimeline';
import VisitorJourney from './components/VisitorJourney';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/timeline" element={<DeliverablesTimeline />} />
        <Route path="/journey" element={<VisitorJourney />} />
        <Route path="/screen/:screenId" element={<Dashboard />} />
        <Route path="/screen/:screenId/topic/:topicId" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
