import * as React from "react";

import { Button } from "@/components/ui";
import { Head, Link } from "@inertiajs/react";

const Testing = () => {
    return (
        <>
            <Head title="Testing Page" />
            <Link href={route("page.test2")}>
                <Button>Go to another page</Button>
            </Link>
        </>
    );
};

export default Testing;
