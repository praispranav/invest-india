import { RouteComponentProps, RouteChildrenProps } from "react-router-dom";

export interface RouteType {
    component?:
      | React.ComponentType<RouteComponentProps<any>>
      | React.ComponentType<any>;
    render?: (props: RouteComponentProps<any>) => React.ReactNode;
    children?:
      | ((props: RouteChildrenProps<any>) => React.ReactNode)
      | React.ReactNode;
    path?: string | string[];
    exact?: boolean;
    sensitive?: boolean;
    strict?: boolean;
  }