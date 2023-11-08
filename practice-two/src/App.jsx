import Routers from './router/Routers';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sidebar } from '@layouts';
import './App.css';
import { Toast } from '@components';
import { useEffect, useState } from 'react';

function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');

  // Hàm để thiết lập message và type cho Toast
  const handleShowToast = (message, type) => {
    setToastMessage(message);
    setToastType(type);
  };

  useEffect(() => {
    const timeout = setInterval(() => {
      setToastMessage('')
      setToastType('')
    }, 4000)

    return () => clearTimeout(timeout)
  }, [setToastMessage, setToastType])

  return (
    <Router>
      <div className='contents'>
        <Sidebar />
        <main className='main-content'>
          <Routers onShowToast={handleShowToast} />
          {toastMessage && <Toast message={toastMessage} type={toastType} />}
        </main>
      </div>
    </Router>
  );
}

export default App;
