import React from 'react'
import SideContentTable from './SideContentTable'

export default function ContentTable() {
    return (
        < >
            <section className='table_content'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <SideContentTable />
                        </div>
                        <div className="col-lg-6">
                            {/* ************************ id  */}
                            <div className="content_paragraph">
                                <p>
                                    <span>
                                        D
                                    </span>
                                    olor sit amet consectetur adipiscing elit. Pellentesque eget sem no urna volutpat elementum at vel sapien. Fusce id efficitur ante. Donec dignissim neque ac tempus dignissim. Sed non sollicitudin lacus. Fusce nec ex massa. Donec ultricies cursus magna ullamcorper commodo orc. In faucibus dolor non pellente sque tempor tellus eros blandit lorem eget condimen tum ex arcu hendrerit libero.
                                    <br />

                                    <p>
                                        Pretium nibh dapibus enim vulputate at interdum orci aliquam. Donec ac ligula ipsum. Integer vestiba lum purus vitae bibendum efficitur. Donec eu metus molestie urna sollicitudin volutpat.
                                    </p>


                                </p>
                            </div>



                            {/* ******************************* id start  */}
                            <div className="analyzing_market">
                                <div className="content_head">
                                    <h3>
                                        analyzing the jobs market
                                    </h3>
                                    <p>
                                        Nunc luctus nibh a purus commodo placerat sit amet ac nunc. Pellentesque ipsum libero feugiat eu cursus mattis sit amet eros. Nulla quis mi quam. Duis scelerisque vestibulum euismod. Donec dui metus, dapibus in libero ac mollis hendrerit lacus. Donec nisi dui mollis nec placerat a sodales diam.
                                    </p>
                                    <div className="content_line">
                                        <ul>
                                            <li>
                                                Tempor duis arcsem eneatis nunc erat aliquet
                                            </li>
                                            <li>
                                                Aenean nec porta nam leo nis vestibulum quis felis
                                            </li>
                                            <li>
                                                Morbi nec mollis ligula eulla facilisi. Integer aliquam
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>





                        </div>
                    </div>
                </div>

            </section>




        </>
    )
}
