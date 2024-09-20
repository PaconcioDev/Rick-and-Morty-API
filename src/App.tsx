import "./App.css";
import { Header } from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';

function App () {
  return (
    <>
      <div className="app text-light">
        <BrowserRouter>
          <Header />
          <AppRoutes />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
