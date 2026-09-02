import { useState } from 'react';
import Form from './pages/Form';
import Table from './pages/Table';
import './App.css';

function App() {
  const [view, setView] = useState('form');
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
    setView('table');
  };

  const handleCreateAnother = () => {
    setView('form');
  };

  return (
    <div>
      {view === 'form' ? (
        <Form onAddItem={handleAddItem} />
      ) : (
        <Table items={items} onCreateAnother={handleCreateAnother} />
      )}
    </div>
  );
}

export default App;
