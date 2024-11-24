import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';

export function Nav(){
    const [mode, setMode] = useState(false);

    return<>
        <nav id="nav">
            <ul className="d-flex align-items-center">
                <li className="nav-toggle text-center">
                    <button onClick={()=>{
                        setMode(!mode);
                        document.body.classList.toggle("light-theme")
                    }}>
                        {
                            !mode ? <DarkModeIcon sx={{color : "white"}} /> : <LightModeIcon sx={{color : "white"}} />
                        }
                    </button>
                </li>
                <li className="nav-name text-center">
                    <p className='heading fs-3 fw-semibold'>Welcome to My Resume</p>
                </li>
                <li className="nav-contact text-center fw-semibold d-sm-inline d-none">
                    Good Day!
                </li>
            </ul>
        </nav>
    </>
}