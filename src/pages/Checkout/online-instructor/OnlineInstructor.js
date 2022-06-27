import { ServicesCheckout } from '../ServicesCheckout'
import { services_online_instructor } from '../../../Data/ServicesData'

export const Coding = () => {
    return (
        <>
            <ServicesCheckout title={services_online_instructor[0].desc} desc={services_online_instructor[0].checkout_desc} img={services_online_instructor[0].img} />
        </>
    )
}

export const HealthAndDiet = () => {
    return (
        <>
            <ServicesCheckout title={services_online_instructor[1].desc} desc={services_online_instructor[1].checkout_desc} img={services_online_instructor[1].img} />
        </>
    )
}

export const CookingAndBaking = () => {
    return (
        <>
            <ServicesCheckout title={services_online_instructor[2].desc} desc={services_online_instructor[2].checkout_desc} img={services_online_instructor[2].img} />
        </>
    )
}

export const FitnessAndGym = () => {
    return (
        <>
            <ServicesCheckout title={services_online_instructor[3].desc} desc={services_online_instructor[3].checkout_desc} img={services_online_instructor[3].img} />
        </>
    )
}

export const MusicInstructor = () => {
    return (
        <>
            <ServicesCheckout title={services_online_instructor[4].desc} desc={services_online_instructor[4].checkout_desc} img={services_online_instructor[4].img} />
        </>
    )
}

export const TuitionForKids = () => {
    return (
        <>
            <ServicesCheckout title={services_online_instructor[5].desc} desc={services_online_instructor[5].checkout_desc} img={services_online_instructor[5].img} />
        </>
    )
}

