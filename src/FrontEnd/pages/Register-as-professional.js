import React from 'react'
import { SalesAnalysis } from '../container/sales-analysis/SalesAnalysis'
import { ContactForm } from '../container/contact-form/ContactForm'
import Accordion from '../components/accordion/Accordion'

export const RegisterAsProfessional = () => {
    return (
        <>
            <SalesAnalysis />
            <ContactForm />
        </>
    )
}
