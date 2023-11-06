import Routers from './router/Routers';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sidebar } from '@layouts';
import './App.css';
import { useCustomerContext } from '@hooks';
import { Toast } from '@components';

function App() {
  const { toastInfo } = useCustomerContext();
      
  return (
    <Router>
      <div className='contents'>
        <Sidebar />
        <main className='main-content'>
          <Routers />
          {toastInfo && <Toast message={toastInfo} />}
        </main>
      </div>
    </Router>
  );
}

export default App;
