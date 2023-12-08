import {HTMLProps} from "react";
import styled from "@emotion/styled";
import {px} from "shared/lib/css/css";

interface SvgComponentProps extends Pick<HTMLProps<SVGElement>, "disabled" | "className" | "style" | "onClick" | "title"> {
    src: SvgIcon;
    fill?: string;
    height?: number;
    width?: number;
    color?: string;
    spin?: boolean;
}

const SvgComponent = (props: SvgComponentProps) => {
    const {
        src: Src,
        ...otherProps
    } = props;

    const width = px(props.width) ?? "fit-content";
    const height = px(props.height) ?? "inherit";

    return (
        <Src
            {...otherProps}
            style={{
                display: "flex",
                color: props.color ?? "none",
                minWidth: width,
                width: width,
                height: height,
                minHeight: height,
                pointerEvents: props.disabled ? "none" : undefined,
                opacity: props.disabled ? 0.5 : undefined,
                ...props.style
            }}
            />
    )
}

export const SvgBase = (props: SvgComponentProps) => {
    return (
        <div style={{ display: "contents", cursor: props.spin ? "wait" : undefined }} title={props.title}>
            <SvgComponent {...props} title={undefined} />
        </div>
    )
}

const ClickableSvg = styled(SvgBase)`
  cursor: pointer;
  &:hover {
    filter: brightness(80%);
  }
`;

export const Svg = Object.assign(SvgBase, { Clickable: ClickableSvg })

console.log(SvgBase === Svg)
