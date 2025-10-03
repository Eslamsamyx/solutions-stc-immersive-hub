import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/DashboardNew';
import DeliverablesTimeline from './components/DeliverablesTimeline';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/timeline" element={<DeliverablesTimeline />} />
        <Route path="/screen/:screenId" element={<Dashboard />} />
        <Route path="/screen/:screenId/topic/:topicId" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
