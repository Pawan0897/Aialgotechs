import Accordion from 'react-bootstrap/Accordion';
export default function DevelopmentDropdown() {
    return (
        <>

            <Accordion className='Inner_Accordion_dropdown'>
                <Accordion.Item eventKey="0" className=' border-0'>
                    <Accordion.Header className="accordion-custom-header" >Developemnt</Accordion.Header>
                    <Accordion.Body className='p-0'>
                        <p className=''>
                            Web  Development
                        </p>
                        <p>
                            Mobile Desinfg
                        </p>
                        <p>
                            Softwarew solutions
                        </p>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>




        </>
    )
}
