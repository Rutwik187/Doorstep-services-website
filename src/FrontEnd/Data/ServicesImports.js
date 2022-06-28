import { services_appliance_repair, services_beauty_and_spa, services_business, services_electrician, services_event_management, services_house_cleaning, services_online_instructor, services_plumbing } from "./ServicesData";

let appliance_repair = services_appliance_repair;
let beauty_and_spa = services_beauty_and_spa;
let business = services_business;
let electrician = services_electrician;
let event_management = services_event_management;
let house_cleaning = services_house_cleaning;
let online_instructor = services_online_instructor;
let plumbing = services_plumbing;

const allServices = [...appliance_repair, ...beauty_and_spa, ...business, ...electrician, ...event_management, ...house_cleaning, ...online_instructor, ...plumbing];

export default allServices;
