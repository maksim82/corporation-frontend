import {ChangeEvent, InputHTMLAttributes} from "react";

type InputHtmlAttr = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">
interface InputProps extends InputHtmlAttr {
    onChange: (val: string) => void;
}

export const Input = (props: InputProps) => {
    const {
        type = "text",
        value,
        onChange,
        ...otherProps
    } = props;

    const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }

    return (
        <input type={type} value={value} onChange={onChangeValue} {...otherProps} />
    )
}
