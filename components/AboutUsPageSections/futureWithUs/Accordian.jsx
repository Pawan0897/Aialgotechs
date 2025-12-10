
"use client";
import Accordion from 'react-bootstrap/Accordion';
export default function Accordian() {
    return (
        <>
            <Accordion defaultActiveKey="0" className="">

                {/* *********************** */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header> Mission</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                {/* *********************** */}
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Integrity</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                {/* *********************** */}
                {/* *********************** */}
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Expertise</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                {/* *********************** */}
            </Accordion>
        </>
    )
}
