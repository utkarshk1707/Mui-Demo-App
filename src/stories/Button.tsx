import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { green } from "@mui/material/colors";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

interface ButtonProps{
  child:String
}

export const ButtonComponent = ({child}:ButtonProps) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    borderRadius: '12px',
    cursor: 'pointer',
    maxWidth: '80px',
    '&:hover': {
        background: green[300]
    }
}));

  return (
   <CustomButton>
    {child}
   </CustomButton>
  );
};
