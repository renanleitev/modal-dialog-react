import React, { useRef, useCallback } from "react";
import { DialogContainer } from "./styled";

export default function ModalDialogWithBtn({ buttonText, component }) {
    const dialogRef = useRef("");
    const openModal = useCallback(() => {
        // Para bloquear o restante da página
        dialogRef.current.showModal();
        // Para exibir o restante da página
        // dialogRef.current.show();
    }, []);
    const closeModal = useCallback(() => {
        dialogRef.current.close();
    }, []);
    return (
        <DialogContainer>
            <button onClick={openModal}>{buttonText}</button>
            {/* Se colocar open na tag <dialog>, o modal abre por padrão */}
            <dialog ref={dialogRef} onClose={closeModal}>
                {/* É possível fechar com botão ou tecla ESC */}
                <button onClick={closeModal} className="close-btn">X</button>
                {component} 
            </dialog>
        </DialogContainer>
    )
}