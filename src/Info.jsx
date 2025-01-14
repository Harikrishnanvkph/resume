import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const myDetails = [
    {
        name : "phone number",
        icon : <CallIcon />,
        value : "9566744039"
    },
    {
        name : "mail",
        icon : <EmailIcon />,
        value : "harikrishnanvk0531@gmail.com"
    }
]

const myLinks = [
    {
        name : "GitHub",
        component : <GitHubIcon />,
        link : "https://github.com/Harikrishnanvkph"
    },
    {
        name : "LinkedIn",
        component : <LinkedInIcon />,
        link : "https://www.linkedin.com/in/hari-krishnan-v-k-b6193014a/"
    },
    {
        name : "Resume",
        component : <LanguageIcon />,
        link : "https://drive.google.com/file/d/1R_Knyzxe7v-_Vqo3PDPSOcPZeBWyjrbb/view?usp=sharing"
    }
]



export {myLinks,myDetails}
