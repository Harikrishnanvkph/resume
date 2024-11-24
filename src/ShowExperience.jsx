

export function ShowExperience({experience,setter}){
    const cancel = ()=>{
        document.body.style.overflow = "auto"
        setter(false)
    }
    return<>
        <div className="exp-card-outer">
            <button onClick={cancel} className="exp-cancel-button">CLOSE</button>
            <div className="exp-card container-fluid">
                <div className="title row p-2">
                    <div className="col-4">Title</div>
                    <div className="col-8">{experience.title}</div>
                </div>
                <div className="skill row p-2">
                    <div className="col-4">Technology Practiced</div>
                    <div className="col-8">{experience.skill}</div>
                </div>
                <div className="company row p-2">
                    <div className="col-4">Company</div>
                    <div className="col-8">{experience.companyName}</div>
                </div>
                <div className="years row p-2">
                    <div className="col-4">Years</div>
                    <div className="col-8">{experience.years}</div>
                </div>
                <div className="description row p-2">
                    <div className="col-4">Description</div>
                    <div className="col-8 details">{experience.description}</div>
                </div>
            </div>
        </div>
        
    </>
}