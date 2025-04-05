import React, {
  ReactNode,
  useState,
  cloneElement,
  isValidElement,
} from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogProps,
} from "@mui/material";

type AppDialogProps = Omit<
  DialogProps,
  "title" | "content" | "actions" | "open"
> & {
  title: ReactNode;
  content: ReactNode;
  actions: (handleClose: () => void) => ReactNode;
  trigger: ReactNode;
};

const AppDialog: React.FC<AppDialogProps> = ({
  title,
  content,
  actions,
  trigger,
  onClose,
  ...rest
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    if (onClose) onClose({}, "backdropClick");
    setOpen(false);
  };

  const renderTrigger = () => {
    if (isValidElement(trigger)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return cloneElement(trigger as React.ReactElement<any>, {
        onClick: handleOpen,
      });
    }
    return (
      <span onClick={handleOpen} style={{ cursor: "pointer" }}>
        {trigger}
      </span>
    );
  };

  return (
    <>
      {renderTrigger()}
      <Dialog open={open} onClose={handleClose} {...rest} fullWidth>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent dividers>{content}</DialogContent>
        <DialogActions>{actions(handleClose)}</DialogActions>
      </Dialog>
    </>
  );
};

export default AppDialog;
