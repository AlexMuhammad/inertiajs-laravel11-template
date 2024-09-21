import { Link } from "@inertiajs/react";
import * as React from "react";

const Button: React.FC = () => {
    return (
        <Link as="button" href={route('page.test2')}>
            Button
        </Link>
    );
};
export default Button;
