import { ServicesCheckout } from '../ServicesCheckout'
import { services_business } from '../../../Data/ServicesData'

export const CAForBusiness = () => {
    return (
        <>
            <ServicesCheckout title={services_business[0].desc} desc={services_business[0].checkout_desc} img={services_business[0].img} category="Business" />
        </>
    )
}

export const BusinessConsultancy = () => {
    return (
        <>
            <ServicesCheckout title={services_business[1].desc} desc={services_business[1].checkout_desc} img={services_business[1].img} category="Business" />
        </>
    )
}

export const TaxPlanning = () => {
    return (
        <>
            <ServicesCheckout title={services_business[2].desc} desc={services_business[2].checkout_desc} img={services_business[2].img} category="Business" />
        </>
    )
}
export const GST = () => {
    return (
        <>
            <ServicesCheckout title={services_business[3].desc} desc={services_business[3].checkout_desc} img={services_business[3].img} category="Business" />
        </>
    )
}


