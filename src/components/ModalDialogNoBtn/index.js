import React, {useCallback} from "react";
import { DialogContainer } from "../ModalDialogWithBtn/styled";

export default function ModalDialogNoBtn({ dialogRef, component }) {
    const closeModal = useCallback(() => {
        dialogRef.current.close();
    }, [dialogRef]);
    return (
        <DialogContainer>
            {/* Se colocar open na tag <dialog>, o modal abre por padrão */}
            <dialog ref={dialogRef} onClose={closeModal}>
                {/* É possível fechar com botão ou tecla ESC */}
                <button onClick={closeModal} className="close-btn">X</button>
                {component}
            </dialog>
        </DialogContainer>
    )
}