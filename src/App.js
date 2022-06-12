import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/Home';
import { ContactUs } from './pages/Contact-Us';
import { RegisterAsProfessional } from './pages/Register-as-professional';
import { ServicesCategories } from './pages/Services/ServicesCategories';

import { ApplianceRepair, Electrician, Plumbing, HouseCleaning, BeautyAndSpa, OnlineInstructor, EventManagement, Business } from './pages/Services/AllServices';

import { AcRepairCheckout, MicrowaveRepairCheckout, RefrigeratorRepairCheckout, WashingMachineRepairCheckout, HouseholdApplianceRepairCheckout, MixerGrinderRepairCheckout, DishwasherRepairCheckout } from './pages/Checkout/appliance-repair/ApplianceRepairCheckout';

import { Fan, Switchboard, Fuse, NewInternalWiring, InverterServicing, LightFitting, CCTVCamera, Doorbell } from './pages/Checkout/electrician/ElectricianCheckout'

import { WaterTank, TabAndMixer, BasinAndSink, ToiletAndBathroom, WaterLeakage, WholeHousePlumbing } from './pages/Checkout/plumbing/PlumbingCheckout';

import { PestControl, BathroomCleaning, CarpetCleaning, DustCleaning, FurnitureCleaning, HouseDeepCleaning, HousePainting, KitchenDeepCleaning, SweepingAndMopping } from './pages/Checkout/house-cleaning/HouseCleaning';

import { HairSalonForMen, HairStylingForWomen, MakeupAndFaceCare, MassageAndTherapy, SkinCare } from './pages/Checkout/beauty-and-spa/BeautyAndSpa';

import { CAForBusiness, BusinessConsultancy, GST, TaxPlanning } from './pages/Checkout/business/Business';
import { CompleteEventManagement, Decoration, EventPlanning, FoodAndCatering, MusicAndSound, Photography } from './pages/Checkout/event-management/EventManagement';
import { Coding, CookingAndBaking, FitnessAndGym, HealthAndDiet, MusicInstructor, TuitionForKids } from './pages/Checkout/online-instructor/OnlineInstructor';



function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
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
        <Route path="/categories/appliance_repair/dishwasher_repair" element={<DishwasherRepairCheckout />} />


        <Route path="/categories/electrician/fan" element={<Fan />} />
        <Route path="/categories/electrician/fuse" element={<Fuse />} />
        <Route path="/categories/electrician/switchboard" element={<Switchboard />} />
        <Route path="/categories/electrician/new_internal_wiring" element={<NewInternalWiring />} />
        <Route path="/categories/electrician/inverter_servicing" element={<InverterServicing />} />
        <Route path="/categories/electrician/light_fitting" element={<LightFitting />} />
        <Route path="/categories/electrician/cctv_camera" element={<CCTVCamera />} />
        <Route path="/categories/electrician/door_bell" element={<Doorbell />} />

        <Route path="/categories/plumbing/water_tank" element={<WaterTank />} />
        <Route path="/categories/plumbing/tab_and_mixer" element={<TabAndMixer />} />
        <Route path="/categories/plumbing/basin_and_sink" element={<BasinAndSink />} />
        <Route path="/categories/plumbing/toilet_and_bathroom" element={<ToiletAndBathroom />} />
        <Route path="/categories/plumbing/water_leakage" element={<WaterLeakage />} />
        <Route path="/categories/plumbing/whole_house_plumbing" element={<WholeHousePlumbing />} />

        <Route path="/categories/house_cleaning/pest_control" element={<PestControl />} />
        <Route path="/categories/house_cleaning/house_deep_cleaning" element={<HouseDeepCleaning />} />
        <Route path="/categories/house_cleaning/kitchen_deep_cleaning" element={<KitchenDeepCleaning />} />
        <Route path="/categories/house_cleaning/carpet_cleaning" element={<CarpetCleaning />} />
        <Route path="/categories/house_cleaning/house_painting" element={<HousePainting />} />
        <Route path="/categories/house_cleaning/dust_cleaning" element={<DustCleaning />} />
        <Route path="/categories/house_cleaning/bathroom_cleaning" element={<BathroomCleaning />} />
        <Route path="/categories/house_cleaning/furniture_cleaning" element={<FurnitureCleaning />} />
        <Route path="/categories/house_cleaning/sweeping_and_mopping" element={<SweepingAndMopping />} />

        <Route path="/categories/beauty_and_spa/makeup_and_face_care" element={<MakeupAndFaceCare />} />
        <Route path="/categories/beauty_and_spa/hairstyling_for_women" element={<HairStylingForWomen />} />
        <Route path="/categories/beauty_and_spa/massage_and_therapy" element={<MassageAndTherapy />} />
        <Route path="/categories/beauty_and_spa/hair_salon_for_men" element={<HairSalonForMen />} />
        <Route path="/categories/beauty_and_spa/skin_care" element={<SkinCare />} />

        <Route path="/categories/business/ca_for_business" element={<CAForBusiness />} />
        <Route path="/categories/business/business_consultancy" element={<BusinessConsultancy />} />
        <Route path="/categories/business/tax_planning" element={<TaxPlanning />} />
        <Route path="/categories/business/GST" element={<GST />} />

        <Route path="/categories/event_management/complete_event_management" element={<CompleteEventManagement />} />
        <Route path="/categories/event_management/decoration" element={<Decoration />} />
        <Route path="/categories/event_management/photography" element={<Photography />} />
        <Route path="/categories/event_management/event_planning" element={<EventPlanning />} />
        <Route path="/categories/event_management/food_and_catering" element={<FoodAndCatering />} />
        <Route path="/categories/event_management/music_and_sound" element={<MusicAndSound />} />

        <Route path="/categories/online_instructor/coding" element={<Coding />} />
        <Route path="/categories/online_instructor/health_and_diet" element={<HealthAndDiet />} />
        <Route path="/categories/online_instructor/cooking_and_baking" element={<CookingAndBaking />} />
        <Route path="/categories/online_instructor/fitness_and_gym" element={<FitnessAndGym />} />
        <Route path="/categories/online_instructor/music_instructor" element={<MusicInstructor />} />
        <Route path="/categories/online_instructor/tuition_for_kids" element={<TuitionForKids />} />

        <Route path="/RegisterAsProfessional" element={<RegisterAsProfessional />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="*" element={<h2>Error:404 Cant find this page</h2>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
