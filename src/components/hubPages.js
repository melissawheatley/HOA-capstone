import Requests from './MaintRequests';
import HubInfo from './HubInfo';
import Contacts from './Contacts';
import Hub from './Hub';

const hubPages = [
    {
        id: 0,
        component: Hub,
        title: "Homeowner Dashboard",
        route: "/dashboard",
        description: "Initial login screen.",
    },
    {
        id: 1,
        component: Requests,
        title: "Maintenance Requests",
        route: "/maintenance",
        description: "Submit a maintenance request ticket and track its progress.",
    },
    {
        id: 2,
        component: HubInfo,
        title: "Lenox Village Resident Info",
        route: "/homeowners",
        description: "General frequently requested information for members of the Lenox Village Homeowners Association",
    },
    {
        id: 3,
        component: Contacts,
        title: "Contacts App",
        route: "/contacts",
        description: "An app that allows users to input their contacts in a database and send email.",
    }
  ]

  export default hubPages;