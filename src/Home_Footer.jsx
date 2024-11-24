import { myLinks, myDetails} from "./Info"

export function Home_Footer(){

    return<>
        <div className="footer rounded mt-4 p-lg-4 p-2">
            <div className="footer-wrapper">
                <p className="fw-semibold text-lg-start text-center">Reach Me Via</p>
                <div className="d-lg-flex d-block justify-content-between align-items-center">
                    <div className="my-2 d-sm-flex d-block justify-content-lg-start justify-content-center">
                        {
                            myDetails?.map((it,index)=>(
                                <div className='m-2 text-center myDetails d-sm-flex align-items-center' key={index}>
                                    <span>{it.icon}</span>
                                    <span className='mx-2 fw-semibold'>{it.value}</span>
                                </div>
                            ))
                        }
                    </div>
                    <div className='d-flex weblinks m-lg-3 m-sm-2 m-0 gap-sm-4 gap-0 justify-content-evenly'>
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
            </div>
        </div>
    </>
}