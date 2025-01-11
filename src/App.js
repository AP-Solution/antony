import './App.css';
import { Catalog } from './components/Catalog/Catalog';
import { Header } from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './components/Main/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/gallery" element={<h1>Gallery</h1>} />
          <Route path="/blog" element={<h1>Blog</h1>} />
          <Route path="/contacts" element={<h1>Contacts</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
