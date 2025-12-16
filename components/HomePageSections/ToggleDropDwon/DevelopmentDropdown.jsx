import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
export default function DevelopmentDropdown() {
    return (
        <>

            <Accordion className='Inner_Accordion_dropdown'>
                <Accordion.Item eventKey="0" className=' border-0'>
                    <Accordion.Header className="accordion-custom-header" >Developemnt</Accordion.Header>
                    <Accordion.Body className='p-0'>
                        <p className=''>
                            <Link className='text-decoration-none' href={"/services"}>
                                Web  Development
                            </Link>
                        </p>
                        <p>
                            <Link className='text-decoration-none' href={"/services"}>
                                Mobile Desinfg
                            </Link>
                        </p>
                        <p>
                            <Link className='text-decoration-none' href={"/services"}>
                                Softwarew solutions
                            </Link>
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>




        </>
    )
}
