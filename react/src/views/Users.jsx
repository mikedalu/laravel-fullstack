import { useEffect, useState } from "react";
import axiosClient from "../axiosClient";

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUsers = () => {
        setLoading(true);
        axiosClient
            .get("users")
            .then(({ data }) => {
                setLoading(false);
                setUsers(data);
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getUsers();
    }, []);
    return <div>Users</div>;
}

export default Users;
