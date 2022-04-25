import { useParams } from "react-router-dom";

const WithRouterProps = (Component: any) => {
  const ComponentWithRouterProps = (props: any) => {
    const params = useParams();
    return <Component {...props} params={params} />;
  };
  return ComponentWithRouterProps;
};

export default WithRouterProps;
