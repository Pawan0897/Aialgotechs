"use client"
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import DevelopmentDropdown from "./DevelopmentDropdown"
import Link from 'next/link';
export default function AccordianDropdown() {
    return (
        <>

            <Accordion className='dropdown_accordian '>
                <Accordion.Item eventKey="0" className=' border-0'>
                    <Accordion.Header className="accordion-custom-header" >Our Services</Accordion.Header>
                    <Accordion.Body className='p-0'>
                        <p className=''>
                            <DevelopmentDropdown />
                        </p>
                        <p>
                            <Link href={"/services"}>

                                UI/UX Design
                            </Link>
                        </p>
                        <p>
                            <Link href={"/services"}>
                                Graphic Design
                            </Link>
                        </p>
                        <p>
                            <Link href={"/services"}>
                                Branding
                            </Link>
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>



        </>
    )
}
