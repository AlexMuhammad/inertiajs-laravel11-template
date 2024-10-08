import * as React from "react";

interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    value?: number | string;
}

export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}: InputLabelProps) {
    return (
        <label
            {...props}
            className={`block text-sm font-medium text-gray-700 ` + className}
        >
            {value ? value : children}
        </label>
    );
}
