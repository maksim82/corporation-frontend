import {ReactNode} from "react";

interface TextProps {
    title?: string;
    text?: string;
    children?: ReactNode;
}

export const Text = (props: TextProps) => {
    const {
        title,
        text,
        children,
    } = props;

    return (
        <div>
            <div>{title}</div>
            <div>{text}</div>
            <div>{children}</div>
        </div>
    )
}
