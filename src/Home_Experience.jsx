// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "swiper"
import { useState } from 'react';
import { ShowExperience } from './ShowExperience';

const experience = [
    {
        companyName : "HCLTECH",
        location : "Madurai, Tamil Nadu",
        title : "Analyst",
        skill : "SCCM Administrator, Intune",
        years : 2.8,
        description : "I am an enthusiastic engineer with a B.E. in Mechanical Engineering, currently working as an Analyst at HCL Technologies for the past 2.7 years. As a member of the KIT Toastmasters Club and a certified competitive public speaker and leader, I bring strong communication and leadership skills to my role. Recognized with three \"Employee of the Month\" awards in HCL, I am dedicated to excellence and continuous improvement. I possess a well-rounded knowledge in application management, SCCM, Intune, ServiceNow, Full Stack development, MYSQL, and customer engagement. Currently, I am expanding my expertise more in Intune Application Deployment, Powershell Scripts and Cloud Platforms like Azure, AWS, Google Cloud."
    },

]

export function Home_Experience(){
    const[show,setShow] = useState(false);
    const[content,setContent] = useState(null);

    const showExperience = (it)=>{
        document.body.style.overflow = "hidden"  
        setShow(!show)
        setContent(it)
    }

    return <>
    
        <div className='my-4'>
            <h5 className='mx-lg-4 m-0 text-center text-lg-start'>Work Experience :</h5>
            <Swiper
                slidesPerView={1}
                // loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                    "0": {
                        slidesPerView:1,
                        slidesPerGroup:1
                    },
                    "768": {
                        slidesPerView:2,
                        slidesPerGroup:2
                    },
                    "1200": {
                        slidesPerView:3,
                        slidesPerGroup:3
                    }
                }}
            >
                <div className="slide-content">
                    {
                        experience.map((it,index)=>(
                            <SwiperSlide key={index} className="experience-card w-xl-50 w-lg-100 p-3 col-xl-"
                            onClick={()=>showExperience(it)}>
                                <Experience_Card experience={it} />
                            </SwiperSlide>
                        ))
                    }
                    <SwiperSlide className="experience-card w-xl-50 w-lg-100 p-3 col-xl-"><Experience_Card experience={null} /></SwiperSlide>
                </div>
            </Swiper>
            {
                show ? <div className='upon-content'>
                    <ShowExperience experience={content} setter={setShow} />
                </div> : <></>
            }
        </div>
    </>
}

function Experience_Card({experience}){
    return<>
        <div className="experience-card-inner rounded d-flex flex-column justify-content-center align-items-between p-lg-5 p-2 text-center">
            {
                experience != null ? <>
                    <div className='flex-fill-1 fw-semibold my-2 '>
                        <h5 className='fw-semibold'>{experience.companyName}</h5>
                        <p style={{fontSize : "13px"}}>{experience.location}</p>
                    </div>
                    <p className='flex-fill-2 my-2'>{experience.title}</p>
                    <h6 className='flex-fill-3 fw-semibold'>{experience.skill}</h6>
                    <p className='flex-fill-4 mb-2'>{experience.years} years</p>
                    <p className='flex-fill-5' style={{fontSize : "14px"}}>{experience.description}</p>
                </> : 
                <div>Yet to Explore</div>
            }
        </div>
    </>
}