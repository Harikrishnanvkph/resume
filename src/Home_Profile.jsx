import CropSquareIcon from '@mui/icons-material/CropSquare';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { useState } from 'react';
import { myLinks, myDetails} from './Info';


export function Home_Profile(){
    const [imgClip, setImgClip] = useState(false);

    return<>
        <div className='home-profile d-grid p-2 mt-4'>
            {/* <div className="title d-flex justify-content-md-end justify-content-center px-4 fs-3"><p className='p-3 px-5'>Profile</p></div> */}
            <div className="image">
                <div className={`image-clip ${!imgClip ? "image-circle" : "image-rect"}`}>
                    <img src="profile.jpg" className='myImage' alt="Hari Krishnan VK Profile" />
                </div>
                <div className='image-sizes p-2'>
                    <button className='p-2 mx-3' onClick={()=>setImgClip(false)}><PanoramaFishEyeIcon /></button>
                    <button className='p-2 mx-3' onClick={()=>setImgClip(true)}><CropSquareIcon /></button>
                </div>
            </div>
            <div className="info">
                <p className='m-2 fs-3 text-center'>Hari Krishnan <span>V K</span></p>
                {
                    myDetails?.map((it,index)=>(
                        <div className='m-2 text-center myDetails' key={index}>
                            <span>{it.icon}</span>
                            <span className='mx-2 fw-semibold'>{it.value}</span>
                        </div>
                    ))
                }
                <div className='d-flex weblinks m-3 justify-content-evenly'>
                    {
                        myLinks.map((it,index)=>(
                            <label htmlFor='weblink' className='mylinks rounded d-flex align-items-center' key={index}>
                                <span>{it.component}</span>
                                <a id="weblink" target='_blank' className='mx-2 fw-semibold' href={it.link}>{it.name}</a>
                            </label>
                        ))
                    }
                </div>
            </div>
            <div className='professional-summary rounded m-0 p-2'>
                <h5 className='m-2 title py-2'><span>Professional Summary</span></h5>
                <p className='about m-1 font-3' style={{fontSize : "17px"}}>
                    I am an enthusiastic engineer with a B.E. in Mechanical Engineering, currently working 
                    as <span>Analyst at HCL Technologies for the past 2.7 years</span>. As a member of the KIT Toastmasters Club 
                    and a certified competitive public speaker and leader, I bring strong 
                    communication and leadership skills to my role. Recognized with <span>three 
                    "Employee of the Month" awards in HCL</span>, I am dedicated to excellence 
                    and continuous improvement. <span>I possess a well-rounded knowledge in 
                    application management, Java, MERN Stack Development, React JS, Kotlin, MongoDB, and 
                    customer engagement</span>.
                </p>
            </div>
            <div className='objective p-2 rounded'>
                <h5 className='m-2 title py-2'><span>Objective</span></h5>
                <p className='m-1 about font-3' style={{fontSize : "17px"}}>Expanding my programming expertise 
                    with the <span>goal of becoming a full end-to-end software developer in 
                    emerging technologies, contributing to future innovations</span></p>
            </div>
        </div>
    </>
}