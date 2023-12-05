import {Link, LinkProps} from "react-router-dom";
import {ReactNode} from "react";

interface AppLinkProps extends LinkProps {
    children: ReactNode;
}

export const AppLink = ({ children, to, ...props }: AppLinkProps) => {
    return (
        <Link to={to}>{children}</Link>
    )
}
