import React from 'react'
import { ServiceBookingForm } from '../../container/service-booking-form/ServiceBookingForm'
import { ServiceHead } from '../../container/service-head/ServiceHead'
import Accordion from '../../components/accordion/Accordion'


export const ServicesCheckout = (props) => {
    return (
        <div>
            <ServiceHead title={props.title} img={props.img} service_desc={props.desc} />
            <ServiceBookingForm />
            <Accordion />
        </div>
    )
}