import React from 'react'
import { ServicesCheckout } from '../ServicesCheckout'
import { services_appliance_repair } from '../../../data'

export const AcRepairCheckout = () => {
    return (
        <>
            <ServicesCheckout title={services_appliance_repair[0].desc} desc={services_appliance_repair[0].checkout_desc} url_title="ac_repair_checkout" img={services_appliance_repair[0].img} />
        </>
    )
}

export const MicrowaveRepairCheckout = () => {
    return (
        <>
            <ServicesCheckout title={services_appliance_repair[1].desc} desc={services_appliance_repair[1].checkout_desc} url_title="microwave_repair_checkout" img={services_appliance_repair[1].img} />
        </>
    )
}

export const MixerGrinderRepairCheckout = () => {
    return (
        <>
            <ServicesCheckout title={services_appliance_repair[2].desc} desc={services_appliance_repair[2].checkout_desc} url_title="ac_repair_checkout" img={services_appliance_repair[2].img} />
        </>
    )
}

export const RefrigeratorRepairCheckout = () => {
    return (
        <>
            <ServicesCheckout title={services_appliance_repair[3].desc} desc={services_appliance_repair[3].checkout_desc} url_title="ac_repair_checkout" img={services_appliance_repair[3].img} />
        </>
    )
}

export const WashingMachineRepairCheckout = () => {
    return (
        <>
            <ServicesCheckout title={services_appliance_repair[4].desc} desc={services_appliance_repair[4].checkout_desc} url_title="ac_repair_checkout" img={services_appliance_repair[4].img} />
        </>
    )
}

export const WaterHeaterRepairCheckout = () => {
    return (
        <>
            <ServicesCheckout title={services_appliance_repair[5].desc} desc={services_appliance_repair[5].checkout_desc} url_title="ac_repair_checkout" img={services_appliance_repair[5].img} />
        </>
    )
}

export const DishwasherRepairCheckout = () => {
    return (
        <>
            <ServicesCheckout title={services_appliance_repair[6].desc} desc={services_appliance_repair[6].checkout_desc} url_title="ac_repair_checkout" img={services_appliance_repair[6].img} />
        </>
    )
}

export const HouseholdApplianceRepairCheckout = () => {
    return (
        <>
            <ServicesCheckout title={services_appliance_repair[7].desc} desc={services_appliance_repair[7].checkout_desc} url_title="ac_repair_checkout" img={services_appliance_repair[7].img} />
        </>
    )
}


