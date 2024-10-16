import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tenants from './pages/Tenants';
import Landlords from './pages/Landlords';
import Properties from './pages/Properties';
import EditTenant from './pages/EditTenant';
import { TenantProvider } from './contexts/TenantContext';
import { PropertyProvider } from './contexts/PropertyContext';

const App: React.FC = () => {
  return (
    <Router>
      <TenantProvider>
        <PropertyProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tenants" element={<Tenants />} />
              <Route path="/landlords" element={<Landlords />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/edit-tenant/:id" element={<EditTenant />} />
            </Routes>
          </Layout>
        </PropertyProvider>
      </TenantProvider>
    </Router>
  );
};

export default App;