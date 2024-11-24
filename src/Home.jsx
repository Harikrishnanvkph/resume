import { Home_Accomplishment } from "./Home_Accomplishment";
import { Home_Education } from "./Home_Education";
import { Home_Experience } from "./Home_Experience";
import { Home_Footer } from "./Home_Footer";
import { Home_Profile } from "./Home_Profile";
import { Home_Skill } from "./Home_Skill";
import { Nav } from "./Nav";


export function Home(){

    return<>
        <div>
            <Nav />
            <div className="p-2 home-body">
                <Home_Profile />
                <Home_Skill />
                <Home_Experience />
                <Home_Education />
                <Home_Accomplishment />
                <Home_Footer />
            </div>
        </div>
    </>
}