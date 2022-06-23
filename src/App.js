import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { ExtensionForm } from './page/ExtensionForm';
// import FetchAPItest from './components/fetchAPI'
import { Dashboard } from './page/Dashboard';
import { Home } from './page/Home';
import { Single } from './page/Single';
import { DatePickerExample } from './components/datePicker';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="extension-form" element={<ExtensionForm />} />
        <Route path="date-picker" element={<DatePickerExample />} />
        <Route path="home" element={<Home />} />
        <Route path="dashboard">
          <Route index element={<Dashboard />} />
          <Route path=":id" element={<Single />} />
        </Route>
        <Route index element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
