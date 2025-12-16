import Link from 'next/link'
import React from 'react'

export default function SideContentTable() {
    return (
        <>
            <div className="sidecontent_table">
                <div className="content_link_table">
                    <ul>

                        {/* ************** */}
                        <li>
                            <Link href={""}>
                                analyzing the jobs market
                            </Link>
                        </li>
                        {/* ********************* */}
                        {/* ************** */}
                        <li>
                            <Link href={""}>
                                Recruitment Executive Search
                            </Link>
                        </li>
                        {/* ********************* */}
                        {/* ************** */}
                        <li>
                            <Link href={""}>
                                benefits of a recruitment agency
                            </Link>
                        </li>
                        {/* ********************* */}
                        {/* ***************************************************** */}
                        <ul>
                            <li>
                                <Link href={""}>
                                    1. Stay informed about jobs
                                </Link>
                            </li>
                            {/* ********************* */}
                            {/* ************** */}
                            <li>
                                <Link href={""}>
                                    2. Better relationship with clients
                                </Link>
                            </li>
                            {/* ********************* */}
                            {/* ************** */}
                            <li>
                                <Link href={""}>
                                    3. Optimize the HR strategy
                                </Link>
                            </li>
                            {/* ********************* */}
                            {/* ************** */}
                            <li>
                                <Link href={""}>
                                    4. Trending skills demand & supply
                                </Link>
                            </li>
                        </ul>
                        {/* ***************************************************************** */}
                        {/* ************** */}
                        <li>
                            <Link href={""}>
                                we build talented & skilled pipeline
                            </Link>
                        </li>
                        {/* ********************* */}
                        {/* ************** */}
                        <li>
                            <Link href={""}>
                                competitive hiring decisions
                            </Link>
                        </li>
                        {/* ********************* */}
                    </ul>
                </div>

            </div>

        </>
    )
}
