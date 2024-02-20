// Dependencies:
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// Layouts:
import AdminLayout from './layouts/AdminLayout.jsx';

// Pages:
import HomePage from './pages/HomePage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import EntityPage from './pages/EntityPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

// Components:
import App from './App.jsx';
import UpdatePasswordForm from './components/UpdatePasswordForm.jsx';
// import AddAdminForm from './components/AddAdminForm.jsx';
import UpdateAdminForm from './components/UpdateAdminForm.jsx';
import RemoveAdminForm from './components/RemoveAdminForm.jsx';
import AddSiteForm from './components/AddSiteForm.jsx';
import UpdateSiteForm from './components/UpdateSiteForm.jsx';
import DeleteSiteButton from './components/DeleteSiteButton.jsx';
import AddRoomForm from './components/AddRoomForm.jsx';
import Feed from './components/Feed.jsx';

import Calendar from './components/Calendar.jsx';

// Auth:
import Auth from './utils/Auth.jsx';

// Styling: 
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomePage />} />

      <Route path='/dashboard' element={<Auth><AdminLayout /></Auth>} >
        <Route index element={<EntityPage type="Site" />} />
        <Route path="addNewSite" element={<AddSiteForm />} />
        <Route path="updatePassword" element={<UpdatePasswordForm />} />
        <Route path="addAdmin" element={<Feed type="Room" />} />
        <Route path="updateAdmin" element={<UpdateAdminForm />} />
        <Route path="removeAdmin" element={<RemoveAdminForm />} />
        <Route path="calendar" element={<Calendar />} />
      </Route>

      <Route path='/site/:id' element={<Auth><EntityPage /></Auth>}>
        <Route index element={<EntityPage type="Room" />} />
        <Route path="/site/:id/deleteSite" element={<DeleteSiteButton />} />
        <Route path="/site/:id/addRoomToSite" element={<AddRoomForm />} />
        <Route path="/site/:id/updateSite" element={<UpdateSiteForm />} />
      </Route>

      <Route path='/room/:id' element={<Auth><EntityPage /></Auth>}>
        <Route index element={<EntityPage type="Tenant" />} />
      </Route>

      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
);
