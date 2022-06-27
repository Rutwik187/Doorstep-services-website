import { ServicesCheckout } from '../ServicesCheckout'
import { services_house_cleaning } from '../../../Data/ServicesData'

export const PestControl = () => {
    return (
        <>
            <ServicesCheckout title={services_house_cleaning[0].desc} desc={services_house_cleaning[0].checkout_desc} img={services_house_cleaning[0].img} />
        </>
    )
}

export const HouseDeepCleaning = () => {
    return (
        <>
            <ServicesCheckout title={services_house_cleaning[1].desc} desc={services_house_cleaning[1].checkout_desc} img={services_house_cleaning[1].img} />
        </>
    )
}

export const KitchenDeepCleaning = () => {
    return (
        <>
            <ServicesCheckout title={services_house_cleaning[2].desc} desc={services_house_cleaning[2].checkout_desc} img={services_house_cleaning[2].img} />
        </>
    )
}

export const CarpetCleaning = () => {
    return (
        <>
            <ServicesCheckout title={services_house_cleaning[3].desc} desc={services_house_cleaning[3].checkout_desc} img={services_house_cleaning[3].img} />
        </>
    )
}

export const HousePainting = () => {
    return (
        <>
            <ServicesCheckout title={services_house_cleaning[4].desc} desc={services_house_cleaning[4].checkout_desc} img={services_house_cleaning[4].img} />
        </>
    )
}

export const SweepingAndMopping = () => {
    return (
        <>
            <ServicesCheckout title={services_house_cleaning[5].desc} desc={services_house_cleaning[5].checkout_desc} img={services_house_cleaning[5].img} />
        </>
    )
}

export const DustCleaning = () => {
    return (
        <>
            <ServicesCheckout title={services_house_cleaning[6].desc} desc={services_house_cleaning[6].checkout_desc} img={services_house_cleaning[6].img} />
        </>
    )
}

export const FurnitureCleaning = () => {
    return (
        <>
            <ServicesCheckout title={services_house_cleaning[7].desc} desc={services_house_cleaning[7].checkout_desc} img={services_house_cleaning[7].img} />
        </>
    )
}

export const BathroomCleaning = () => {
    return (
        <>
            <ServicesCheckout title={services_house_cleaning[7].desc} desc={services_house_cleaning[7].checkout_desc} img={services_house_cleaning[7].img} />
        </>
    )
}


