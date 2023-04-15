import * as React from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import Image from "next/image";
import sucessmessage from "../../../assets/succes.png";
import stylec from "./style.module.css";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
};

const SuccessMessage = ({ modalopen, Handlemodalclose }) => {
  return (
    <div  onClick={Handlemodalclose}>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={modalopen}
        onClose={Handlemodalclose}
        // BackdropComponent={Backdrop}
      >
          
        <Box
          className={`bg-light d-flex ${stylec.bdnone} row py-5 justify-content-center`}
          sx={style}
        ><div className="d-flex justify-content-center py-2">
          <Image
            src={sucessmessage}
            height="60"
            width="60"
            alt="message à succes"
          />
          </div>
          <p className="text-center pt-2">Succès</p>
        </Box>
      </StyledModal>
    </div>
  );
};
export default SuccessMessage;
