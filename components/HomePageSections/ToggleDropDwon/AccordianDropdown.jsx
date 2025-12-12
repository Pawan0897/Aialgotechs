"use client"
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import DevelopmentDropdown from "./DevelopmentDropdown"
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
                            UI/UX Design
                        </p>
                        <p>
                            Graphic Design
                        </p>
                        <p>
                            Branding
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>



        </>
    )
}
