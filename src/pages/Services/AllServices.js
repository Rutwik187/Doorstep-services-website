import { Services } from '../../components/services/Services'
import { services_appliance_repair, services_business } from '../../data'
import { services_plumbing } from '../../data'
import { services_beauty_and_spa } from '../../data'
import { services_electrician } from '../../data'
import { services_house_cleaning } from '../../data'
import { services_online_instructor } from '../../data'
import { services_event_management } from '../../data'


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

