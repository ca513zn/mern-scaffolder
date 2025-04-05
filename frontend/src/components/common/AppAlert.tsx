import React from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

interface AppAlertProps extends AlertProps {
  message?: string;
}

const AppAlert: React.FC<AppAlertProps> = ({ message, children, ...rest }) => {
  return <MuiAlert {...rest}>{message || children}</MuiAlert>;
};

export default AppAlert;
