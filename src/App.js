import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/Home';
import { ContactUs } from './pages/Contact-Us';
import { RegisterAsProfessional } from './pages/Register-as-professional';
import { ServicesCheckout } from './pages/Checkout/ServicesCheckout';
import { ServicesCategories } from './pages/Services/ServicesCategories';

import { ApplianceRepair, Electrician, Plumbing, HouseCleaning, BeautyAndSpa, OnlineInstructor, EventManagement, Business } from './pages/Services/AllServices';

import { AcRepairCheckout, MicrowaveRepairCheckout, RefrigeratorRepairCheckout, WashingMachineRepairCheckout, HouseholdApplianceRepairCheckout, MixerGrinderRepairCheckout, DishwasherRepairCheckout } from './pages/Checkout/appliance-repair/ApplianceRepairCheckout';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/Categories" element={<ServicesCategories />} />

        {/* Link in pages/services/ServicesCategories*/}
        <Route path="/Categories/appliance_repair" element={<ApplianceRepair />} />
        <Route path="/Categories/electrician" element={<Electrician />} />
        <Route path="/Categories/plumbing" element={<Plumbing />} />
        <Route path="/Categories/house_cleaning" element={<HouseCleaning />} />
        <Route path="/Categories/makeup_artist" element={<BeautyAndSpa />} />
        <Route path="/Categories/online_instructor" element={<OnlineInstructor />} />
        <Route path="/Categories/event_management" element={<EventManagement />} />
        <Route path="/Categories/business" element={<Business />} />


        {/* Link in components/services/services.jsx */}
        <Route path="/categories/appliance_repair/ac_repair" element={<AcRepairCheckout />} />
        <Route path="/categories/appliance_repair/microwave_repair" element={<MicrowaveRepairCheckout />} />
        <Route path="/categories/appliance_repair/refrigerator_repair" element={<RefrigeratorRepairCheckout />} />
        <Route path="/categories/appliance_repair/washing_machine_repair" element={<WashingMachineRepairCheckout />} />
        <Route path="/categories/appliance_repair/ac_repair" element={<HouseholdApplianceRepairCheckout />} />
        <Route path="/categories/appliance_repair/mixer_grinder_repair" element={<MixerGrinderRepairCheckout />} />
        <Route path="/categories/appliance_repair/dishwasher_repair------------------------------------------------------------------------" element={<DishwasherRepairCheckout />} />


        <Route path="/ServicesCheckout" element={<ServicesCheckout />} />
        <Route path="/RegisterAsProfessional" element={<RegisterAsProfessional />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="*" element={<h2>Error:404 Cant find this page</h2>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
