import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

export type AppSnackBarSeverity = "success" | "info" | "warning" | "error";

export interface AppSnackBarProps {
  open: boolean;
  message: string;
  severity?: AppSnackBarSeverity;
  autoHideDuration?: number;
  onClose?: () => void;
  anchorOrigin?: {
    vertical: "top" | "bottom";
    horizontal: "left" | "center" | "right";
  };
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const AppSnackBar: React.FC<AppSnackBarProps> = ({
  open,
  message,
  severity = "info",
  autoHideDuration = 3000,
  onClose,
  anchorOrigin = { vertical: "bottom", horizontal: "center" },
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
    >
      <Alert onClose={onClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AppSnackBar;
