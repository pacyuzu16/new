import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AdminPanel from './components/AdminPanel';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AdminPanel />
  </StrictMode>
);