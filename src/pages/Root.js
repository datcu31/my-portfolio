import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

function RootLayout() {
    return (
        <div className="flex flex-col mx-2 p-2 items-center justify-between min-h-screen font-lato">
            <NavigationBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default RootLayout;