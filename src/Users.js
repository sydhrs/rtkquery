import React from "react";
import {useSingleUserQuery, useUsersQuery} from "./UsersApi";


const Users = () => {

    // const {data, error , isLoading, isSuccess, isError} = useUsersQuery()
    const {data, error , isLoading, isSuccess, isError} = useSingleUserQuery(9)

    console.log('data', data)
    return (
        <div>
            <h1>Welcome</h1>
            {isLoading && "Loading ..."}
            {isError && error.message}
            {isSuccess && data &&
                <div key={data.id}>
                    <h2>{data.name}</h2>
                </div>

            }
        </div>
    )
}

export default Users;