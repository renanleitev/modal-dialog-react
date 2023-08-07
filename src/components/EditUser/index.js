import React from "react";
import { FormContainer } from "./styled";

export default function EditUser() {
    return (
        <FormContainer>
            <h1>Edit User</h1>
            <label>Name</label>
            <input type="text" placeholder={"Name..."} />
            <label>Email</label>
            <input type="email" placeholder={"Email..."} />
            <button>Save</button>
        </FormContainer>
    )
}