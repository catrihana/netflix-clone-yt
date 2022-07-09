import MuiModal from "@mui/material/Modal"
import {useRecoilValue} from "recoil"
import {modalState} from "../atoms/modalAtom"

function Modal() {
    const [showModal, setShowModal] = useRecoilValue(modalState)

    const handlerClose = () => {
        setShowModal(false)
    }

  return (
    <MuiModal open={showModal} onClose={handleClose}>
        <>
            Modal
        </>
    </MuiModal>
  );
}

export default Modal