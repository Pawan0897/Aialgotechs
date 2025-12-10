import React from 'react'
import ContactForm from './ContactForm'
import bg_img from "./img/contact_bg.png"
import "./style.css"
export default function ContactBlock() {
    return (
        <>
            <section className='sectionNinth px-50 py-20 md-padding'>
                <div className="container-fluid">
                    <div className="row justify-center">
                        <div className="col-12 col-lg-7 col-md-12 order-2 order-lg-1">
                            <ContactForm />
                        </div>
                        <div className="col-12 col-lg-5 col-md-12 order-1 order-lg-2">
                            <div className="contact_side_bg">
                                <img src={bg_img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
