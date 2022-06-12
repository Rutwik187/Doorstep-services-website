import { ServicesCheckout } from '../ServicesCheckout'
import { services_electrician } from '../../../data'

export const Fan = () => {
    return (
        <>
            <ServicesCheckout title={services_electrician[0].desc} desc={services_electrician[0].checkout_desc} img={services_electrician[0].img} />
        </>
    )
}

export const Switchboard = () => {
    return (
        <>
            <ServicesCheckout title={services_electrician[1].desc} desc={services_electrician[1].checkout_desc} img={services_electrician[1].img} />
        </>
    )
}

export const Fuse = () => {
    return (
        <>
            <ServicesCheckout title={services_electrician[2].desc} desc={services_electrician[2].checkout_desc} img={services_electrician[2].img} />
        </>
    )
}

export const NewInternalWiring = () => {
    return (
        <>
            <ServicesCheckout title={services_electrician[3].desc} desc={services_electrician[3].checkout_desc} img={services_electrician[3].img} />
        </>
    )
}

export const InverterServicing = () => {
    return (
        <>
            <ServicesCheckout title={services_electrician[4].desc} desc={services_electrician[4].checkout_desc} img={services_electrician[4].img} />
        </>
    )
}

export const LightFitting = () => {
    return (
        <>
            <ServicesCheckout title={services_electrician[5].desc} desc={services_electrician[5].checkout_desc} img={services_electrician[5].img} />
        </>
    )
}

export const CCTVCamera = () => {
    return (
        <>
            <ServicesCheckout title={services_electrician[6].desc} desc={services_electrician[6].checkout_desc} img={services_electrician[6].img} />
        </>
    )
}

export const Doorbell = () => {
    return (
        <>
            <ServicesCheckout title={services_electrician[7].desc} desc={services_electrician[7].checkout_desc} img={services_electrician[7].img} />
        </>
    )
}


