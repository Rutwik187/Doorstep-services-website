import { ServicesCheckout } from '../ServicesCheckout'
import { services_event_management } from '../../../Data/ServicesData'

export const CompleteEventManagement = () => {
    return (
        <>
            <ServicesCheckout title={services_event_management[0].desc} desc={services_event_management[0].checkout_desc} img={services_event_management[0].img} category="Manage Events" />
        </>
    )
}

export const Decoration = () => {
    return (
        <>
            <ServicesCheckout title={services_event_management[1].desc} desc={services_event_management[1].checkout_desc} img={services_event_management[1].img} category="Manage Events" />
        </>
    )
}

export const Photography = () => {
    return (
        <>
            <ServicesCheckout title={services_event_management[2].desc} desc={services_event_management[2].checkout_desc} img={services_event_management[2].img} category="Manage Events" />
        </>
    )
}

export const EventPlanning = () => {
    return (
        <>
            <ServicesCheckout title={services_event_management[3].desc} desc={services_event_management[3].checkout_desc} img={services_event_management[3].img} category="Manage Events" />
        </>
    )
}

export const FoodAndCatering = () => {
    return (
        <>
            <ServicesCheckout title={services_event_management[4].desc} desc={services_event_management[4].checkout_desc} img={services_event_management[4].img} category="Manage Events" />
        </>
    )
}

export const MusicAndSound = () => {
    return (
        <>
            <ServicesCheckout title={services_event_management[5].desc} desc={services_event_management[5].checkout_desc} img={services_event_management[5].img} category="Manage Events" />
        </>
    )
}




