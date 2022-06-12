import { ServicesCheckout } from '../ServicesCheckout'
import { services_beauty_and_spa } from '../../../data'

export const MakeupAndFaceCare = () => {
    return (
        <>
            <ServicesCheckout title={services_beauty_and_spa[0].desc} desc={services_beauty_and_spa[0].checkout_desc} img={services_beauty_and_spa[0].img} />
        </>
    )
}

export const HairStylingForWomen = () => {
    return (
        <>
            <ServicesCheckout title={services_beauty_and_spa[1].desc} desc={services_beauty_and_spa[1].checkout_desc} img={services_beauty_and_spa[1].img} />
        </>
    )
}

export const MassageAndTherapy = () => {
    return (
        <>
            <ServicesCheckout title={services_beauty_and_spa[2].desc} desc={services_beauty_and_spa[2].checkout_desc} img={services_beauty_and_spa[2].img} />
        </>
    )
}

export const HairSalonForMen = () => {
    return (
        <>
            <ServicesCheckout title={services_beauty_and_spa[3].desc} desc={services_beauty_and_spa[3].checkout_desc} img={services_beauty_and_spa[3].img} />
        </>
    )
}

export const SkinCare = () => {
    return (
        <>
            <ServicesCheckout title={services_beauty_and_spa[4].desc} desc={services_beauty_and_spa[4].checkout_desc} img={services_beauty_and_spa[4].img} />
        </>
    )
}

