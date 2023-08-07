import React from "react";
import ModalDialogWithBtn from "../../components/ModalDialogWithBtn";
import EditUser from "../../components/EditUser";

export default function Admin(){
    return (
        <>
        <h2>Admin - Modal Dialog With Button</h2>
        <ModalDialogWithBtn buttonText={"Edit User"} component={<EditUser/>}/>
        </>
    )
}