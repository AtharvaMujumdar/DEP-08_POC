import React from "react";
import { Link } from "react-router-dom";

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [
                { name: "aaaa", email: "a@gmail.com" },
                { name: "bbbb", email: "b@gmail.com" },
                { name: "cccc", email: "c@gmail.com" },
            ],
        };
    }

    render() {
        return (
            <>
                <h1>Users</h1>
                <section>
                    <ul>
                        {this.state.users.map((user, index) => {
                            return (
                                <li key={index}>
                                    <h2><Link to={`/users/${index}`}>{user.name}</Link></h2>
                                    <p>{user.email}</p>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            </>
        );
    }
}

export default Users;