import { ServicesCheckout } from '../ServicesCheckout'
import { services_plumbing } from '../../../Data/ServicesData'

export const WaterTank = () => {
    return (
        <>
            <ServicesCheckout title={services_plumbing[0].desc} desc={services_plumbing[0].checkout_desc} img={services_plumbing[0].img} category="Plumbing" />
        </>
    )
}

export const TabAndMixer = () => {
    return (
        <>
            <ServicesCheckout title={services_plumbing[1].desc} desc={services_plumbing[1].checkout_desc} img={services_plumbing[1].img} category="Plumbing" />
        </>
    )
}

export const BasinAndSink = () => {
    return (
        <>
            <ServicesCheckout title={services_plumbing[2].desc} desc={services_plumbing[2].checkout_desc} img={services_plumbing[2].img} category="Plumbing" />
        </>
    )
}

export const ToiletAndBathroom = () => {
    return (
        <>
            <ServicesCheckout title={services_plumbing[3].desc} desc={services_plumbing[3].checkout_desc} img={services_plumbing[3].img} category="Plumbing" />
        </>
    )
}

export const WaterLeakage = () => {
    return (
        <>
            <ServicesCheckout title={services_plumbing[4].desc} desc={services_plumbing[4].checkout_desc} img={services_plumbing[4].img} category="Plumbing" />
        </>
    )
}

export const WholeHousePlumbing = () => {
    return (
        <>
            <ServicesCheckout title={services_plumbing[5].desc} desc={services_plumbing[5].checkout_desc} img={services_plumbing[5].img} category="Plumbing" />
        </>
    )
}


