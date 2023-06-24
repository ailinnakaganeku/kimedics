import Home from "../Home";

const PageComponent = ({ name }) => {
    switch (name) {
        case 'Dashboard':
            return <Home />;
        /*     case 'Providers':
              return <ProvidersDashboard />;
            case 'Practices':
              return <PracticesPage />; */
        default:
            return null;
    }
};

export default PageComponent