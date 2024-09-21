import * as React from "react";

import { Button } from "@/components/ui";
import { Link } from "@inertiajs/react";

const Testing = () => {
    return (
        <div>
            <Link href={route('page.test2')}>
                <Button>Go to another page</Button>
            </Link>
        </div>
    );
};

export default Testing;
