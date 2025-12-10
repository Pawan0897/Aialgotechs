import React from 'react'
import { Hovertry } from './Hovertry'
import { project } from './try'

export default function SectionTry() {
    return (
        <>
            <section className='sectionFifth mt-20 pt-20'>
                <div className="container">
                    <div className="row mb-10">
                        <div className="col-md-6">
                            <div className="section_fifth_title">
                                <h3>
                                    End-to-End Software & E-Commerce Development Services with Global Experts
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* *********** */}
                    <div className="row">
                        <div className="col-md-4 p-3 ">
                            <div className="section_fifth_card">
                                <Hovertry items={project} />
                            </div>

                        </div>
                        {/* ************************************   .......................... */}

                        {/* ************************************   .......................... */}

                        {/* ************************************   .......................... */}
                    </div>
                </div>

            </section>

        </>
    )
}
