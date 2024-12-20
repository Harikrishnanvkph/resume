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
        link : "https://github.com/Harikrishnanvkph"
    },
    {
        name : "Website",
        component : <LanguageIcon />,
        link : "https://github.com/Harikrishnanvkph"
    }
]



export {myLinks,myDetails}