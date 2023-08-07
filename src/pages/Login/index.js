import React, {useRef, useCallback} from "react";
import ModalDialogNoBtn from "../../components/ModalDialogNoBtn";
import CreateUser from "../../components/CreateUser";

export default function Login(){
    const ref = useRef('');
    const openModal = useCallback(() => {
        // Para bloquear o restante da página
        ref.current.showModal();
        // Para exibir o restante da página
        // dialogRef.current.show(); 
    }, []);
    return (
        <>
            <h2>Login - Modal Dialog No Button</h2>
            <button onClick={openModal}>New User</button>
            <ModalDialogNoBtn dialogRef={ref} component={<CreateUser/>}/>
        </>
    )
}