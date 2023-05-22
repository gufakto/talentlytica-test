import { FC, HTMLAttributes } from "react";
import "./index.css";

interface Props extends HTMLAttributes<HTMLButtonElement> {
    label: string;
}

const Button: FC<Props> = (props) => {

    return (<><button {...props}>{props.label}</button></>);
}

export default Button;