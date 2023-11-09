import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import {
  Home,
  Analytics,
  Invoice,
  Schedule,
  Calendar,
  Messages,
  Notification,
  Settings,
  Error,
} from '@pages';
import { CustomerProvider } from '@contexts';
import { ErrorBoundary, Loading } from '@components';

const AnalyticsLazy = lazy(() => import('../pages/Analytics/Analytics'));

const Routers = ({ onShowToast }) => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/analytics' />} />
      <Route path='/' element={<Home />} />
      <Route
        path='/analytics'
        element={
          <ErrorBoundary fallback={<Error />}>
            <CustomerProvider>
              {/* <Suspense
                fallback={
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Loading />
                  </div>
                }
              >
                <AnalyticsLazy onShowToast={onShowToast} />
              </Suspense> */}
              <Analytics onShowToast={onShowToast} />
            </CustomerProvider>
          </ErrorBoundary>
        }
      />
      <Route path='/invoice' element={<Invoice />} />
      <Route path='/schedule' element={<Schedule />} />
      <Route path='/calendar' element={<Calendar />} />
      <Route path='/messages' element={<Messages />} />
      <Route path='/notification' element={<Notification />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
  );
};

export default Routers;
