import React from 'react'
import { ServiceBookingForm } from '../container/service-booking-form/ServiceBookingForm'
import { ServiceHead } from '../container/service-head/ServiceHead'
import Accordion from '../components/accordion/Accordion'

export const ServicesCheckout = () => {
    return (
        <div>
            <ServiceHead />
            <ServiceBookingForm />
            <Accordion />
        </div>
    )
}
