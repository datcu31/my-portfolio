import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

function RootLayout() {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen m-auto font-lato">
            <NavigationBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default RootLayout;