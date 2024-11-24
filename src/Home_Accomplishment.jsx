
const meetings = [
    <>Certified As <span>Full Stack Developer</span> – MERN Stack from <span>IIT Madras - GUVI</span></>,
    <>TCS NQT – <span>Cognitive Mark – 82.54%</span> - 1485.68/1800 & <span>IT Programming – 74.69%</span> - 1344.42/1800</>,
    <>NPTEL Certificate Course '<span>Gear and Gear Unit Design</span>' from <span>IIT Kharagpur</span></>,
    <>Udemy Certifications on JAVA, MERN Stack Development, Jest, SCCM</>,
    <>Got <span>Employee of Month for 3 Months</span> in HCL technologies</>,
    <>Certified as Competent Public Speaker and Leader by <span>Toastmasters International</span></>
]

export function Home_Accomplishment(){

    return<>
        <div>
            <h5 className='mx-lg-4 m-0 text-center text-lg-start'>Accomplishment :</h5>
            <ul className="accomplishment mx-lg-4 my-4">
                {
                    meetings?.map((it,index)=>(
                        <li className="mx-sm-4 my-2 acc-list border rounded p-3 font-3 text-center" key={index}>{it}</li>
                    ))
                }
            </ul>
        </div>
    </>
}