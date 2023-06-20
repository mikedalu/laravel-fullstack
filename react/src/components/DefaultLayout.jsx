import React, { useEffect } from "react";

import { Navigate, Outlet, Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axiosClient";

function DefaultLayout() {
    const { user, token, setToken, setUser } = useStateContext();
    useEffect(() => {
        axiosClient
            .get("/user")
            .then(({ data }) => {
                setUser(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);
    const onLogout = (e) => {
        e.preventDefault();
        axiosClient.post("/logout").then(({ data }) => {
            setToken(null);
            setUser({});
        });
    };

    if (!token) {
        return <Navigate to="/login" />;
    }
    return (
        <div id="defaultLayout">
            <aside>
                <Link to={`/dashboard`}>Dashboard</Link>
                <Link to={`users`}>Users</Link>
            </aside>
            <div className="content">
                <header>
                    <div>Header</div>
                    <div>
                        {user?.name}
                        <a href="#" onClick={onLogout}>
                            logout
                        </a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DefaultLayout;
