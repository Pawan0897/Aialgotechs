import React from 'react'
import "./style.css"
export default function StickySocial_Icon() {
    return (
        <>
            <div className="social_icon bg-amber-50  rounded-2xl">
                <div className="content flex flex-col justify-center items-center">
                    <p className=''>
                        SHARE
                    </p>
                    <div className="icon_box flex flex-col gap-3">
                        {/* ************************* */}
                        <div className="icon">
                            <img src="/news&insight/icon/facebook.png" alt="" />
                        </div>
                        {/* *************** */}
                        {/* ************************* */}
                        <div className="icon">
                            <img src="/news&insight/icon/twitter.png" alt="" />
                        </div>
                        {/* *************** */}
                        <div className="icon">
                            <img src="/news&insight/icon/reddit.png" alt="" />
                        </div>
                        {/* *************** */}
                        {/* ************************* */}
                        <div className="icon">
                            <img src="/news&insight/icon/linkedin.png" alt="" />
                        </div>
                        {/* *************** */}
                        {/* ************************* */}
                        <div className="icon">
                            <img src="/news&insight/icon/pinterest.png" alt="" />
                        </div>
                        {/* *************** */}
                        {/* ************************* */}
                        <div className="icon">
                            <img src="/news&insight/icon/mail.png" alt="" />
                        </div>
                        {/* *************** */}



                    </div>
                </div>

            </div>



        </>
    )
}
