// Dependencies:
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// Layouts:
import AdminLayout from './layouts/AdminLayout.jsx';

// Pages:
import HomePage from './pages/HomePage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import SitePage from './pages/SitePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

// Components:
import App from './App.jsx';
import UpdatePasswordForm from './components/UpdatePasswordForm.jsx';
import AddAdminForm from './components/AddAdminForm.jsx';
import UpdateAdminForm from './components/UpdateAdminForm.jsx';
import RemoveAdminForm from './components/RemoveAdminForm.jsx';
import AddSiteForm from './components/AddSiteForm.jsx';

// Styling: 
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomePage />} />
      <Route path='/dashboard' element={<AdminLayout />} >
        <Route index element={<DashboardPage />} />
        <Route path="addNewSite" element={<AddSiteForm />} />
        <Route path="updatePassword" element={<UpdatePasswordForm />} />
        <Route path="addAdmin" element={<AddAdminForm />} />
        <Route path="updateAdmin" element={<UpdateAdminForm />} />
        <Route path="removeAdmin" element={<RemoveAdminForm />} />
      </Route>

      <Route path='/site/:id' element={<SitePage />} />

      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
);
