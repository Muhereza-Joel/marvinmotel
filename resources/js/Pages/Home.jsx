import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function Home() {
    return (
        <PublicLayout>
            <Head title="Welcome" />
            <h1>Home Page</h1>
        </PublicLayout>
    );
}

export default Home;
