import { Services } from '../../components/services/Services'
import { services_appliance_repair, services_business, services_plumbing, services_beauty_and_spa, services_electrician, services_house_cleaning, services_online_instructor, services_event_management } from '../../Data/ServicesData'



export function ApplianceRepair() {
    return (
        <>
            <Services servicesProps={services_appliance_repair} title={'Appliance Repair'} tagLine={'Explore the greatest our services.'} category="appliance_repair" />
        </>
    )
}

export const Electrician = () => {
    return (
        <>
            <Services servicesProps={services_electrician} title={'Electrician'} tagLine={'Explore the greatest our services.'} category="electrician" />
        </>
    )
}

export const Plumbing = () => {
    return (
        <>
            <Services servicesProps={services_plumbing} title={'Plumbing'} tagLine={'Explore the greatest our services.'} category="plumbing" />
        </>
    )
}

export const HouseCleaning = () => {
    return (
        <>
            <Services servicesProps={services_house_cleaning} title={'House Cleaning'} tagLine={'Explore the greatest our services.'} category="house_cleaning" />
        </>
    )
}

export const OnlineInstructor = () => {
    return (
        <>
            <Services servicesProps={services_online_instructor} title={'Online Instructor'} tagLine={'Explore the greatest our services.'} category="online_instructor" />
        </>
    )
}

export const BeautyAndSpa = () => {
    return (
        <>
            <Services servicesProps={services_beauty_and_spa} title={'Beauty and Spa'} tagLine={'Explore the greatest our services.'} category="beauty_and_spa" />
        </>
    )
}

export const EventManagement = () => {
    return (
        <>
            <Services servicesProps={services_event_management} title={'Event Management'} tagLine={'Explore the greatest our services.'} category="event_management" />
        </>
    )
}

export const Business = () => {
    return (
        <>
            <Services servicesProps={services_business} title={'Business and Taxes'} tagLine={'Explore the greatest our services.'} category="business" />
        </>
    )
}

