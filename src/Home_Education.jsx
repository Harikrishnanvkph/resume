const eduction_details = [
    {
        name : "B.E Bachelor of Engineering",
        year : "2016 - 2020",
        place : "KIT Kalaignarkarunanidhi Institute of Technology, Coimbatore",
        course : "Mechanical Engineering",
        percentile : "81.50 %"
    },
    {
        name : "HSC – 12th",
        year : "2015 - 2016",
        place : "Adwaith G N S MHSS, Coimbatore",
        course : "Computer Science",
        percentile : "85.33 %"
    },
    {
        name : "SSLC – 10th",
        year : "2013 - 2014",
        place : "Adwaith G N S MHSS, Coimbatore",
        percentile : "95.80 %"
    }
]

export function Home_Education(){

    return<>
        <div className="home-education">
            <h5 className='mx-lg-4 m-0 text-center text-lg-start'>Education :</h5>
            <div className="card-wrapper d-flex justify-content-center">
                {
                    eduction_details?.map((it,index)=>(
                        <EduCard card={it} key={index} />
                    ))
                }
            </div>
        </div>
    </>
}


function EduCard({card}){

    return<>
        <div className="edu-card-outer text-center">
            <div className="edu-card-inner rounded border">
                <h6 className="education-name my word-highlight">{card.name}</h6>
                <p style={{fontSize : "13px"}} className="education-year mb-2">{card.year}</p>
                <p style={{fontSize : "14px"}} className="education-place">{card.place}</p>
                {
                    !card.course ? <p className="education-course">{card.course}</p> : <></>
                }
                <p className="education-percentile my-2 ">Percentage : <span className="fw-semibold word-highlight">{card.percentile}</span></p>
            </div>
        </div>
    </>
}