import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { ExtensionForm } from './page/ExtensionForm';
import FetchAPItest from './components/fetchAPI'
import {TableTemplate} from './components/TableTemplate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="extension-form" element={<ExtensionForm />} />
        <Route path="fetch" element={<FetchAPItest />} />
        <Route path="table" element={<TableTemplate />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
