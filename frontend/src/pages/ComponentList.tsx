import { useState } from "react";
import PageWrapper from "@/components/common/PageWrapper";
import PageBody from "@/components/font/PageBody";
import PageCaption from "@/components/font/PageCaption";
import PageSubheader from "@/components/font/PageSubheader";
import PageTitle from "@/components/font/PageTitle";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import GridContainer from "@/components/layout/GridContainer";
import AppButton from "@/components/common/AppButton";
import AppDialog from "@/components/common/AppDialog";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppSnackBar, {
  AppSnackBarSeverity,
} from "@/components/common/AppSnackBar";

const SnackBarDemo = () => {
  const [snack, setSnack] = useState({
    open: false,
    message: "",
    severity: "success",
  } as {
    open: boolean;
    message: string;
    severity: AppSnackBarSeverity;
  });

  const showSnack = (message: string, severity: AppSnackBarSeverity) => {
    setSnack({ open: true, message, severity });
  };

  const mainContent = [
    {
      component: GridContainer,
      props: {
        spacing: 2,
        components: [
          {
            component: PageSubheader,
            props: { children: "SnackBar Demo" },
          },
          { component: Divider },
          {
            component: Typography,
            props: {
              variant: "subtitle2",
              children: "Click a button to show a SnackBar",
            },
          },
          {
            component: AppButton,
            props: {
              onClick: () => showSnack("All good!", "success"),
              children: "Show Success",
            },
          },
          {
            component: AppButton,
            props: {
              onClick: () => showSnack("Oops!", "error"),
              color: "error",
              children: "Show Error",
            },
          },
          {
            component: AppButton,
            props: {
              onClick: () => showSnack("Careful!", "warning"),
              color: "warning",
              children: "Show Warning",
            },
          },
        ],
      },
    },
  ];

  return (
    <>
      <GridContainer components={mainContent} />
      <AppSnackBar
        open={snack.open}
        message={snack.message}
        severity={snack.severity}
        onClose={() => setSnack({ ...snack, open: false })}
      />
    </>
  );
};

const buttonVariants = [
  {
    label: "Text Button",
    props: { variant: "text", children: "Text" },
  },
  {
    label: "Contained Button",
    props: { variant: "contained", children: "Contained" },
  },
  {
    label: "Outlined Button",
    props: { variant: "outlined", children: "Outlined" },
  },
  {
    label: "Primary Color",
    props: { color: "primary", children: "Primary" },
  },
  {
    label: "Secondary Color",
    props: { color: "secondary", children: "Secondary" },
  },
  {
    label: "Success Color",
    props: { color: "success", children: "Success" },
  },
  {
    label: "Error Color",
    props: { color: "error", children: "Error" },
  },
  {
    label: "Warning Color",
    props: { color: "warning", children: "Warning" },
  },
  {
    label: "Info Color",
    props: { color: "info", children: "Info" },
  },
  {
    label: "Disabled",
    props: { disabled: true, children: "Disabled" },
  },
  {
    label: "Button with Icon",
    props: {
      variant: "contained",
      color: "primary",
      icon: <SaveIcon />,
      children: "Save",
    },
  },
  {
    label: "Icon Button",
    props: {
      isIconButton: true,
      color: "primary",
      icon: <AlarmIcon />,
      "aria-label": "Alarm",
    },
  },
  {
    label: "Icon Button with Secondary Color",
    props: {
      isIconButton: true,
      color: "secondary",
      icon: <DeleteIcon />,
      "aria-label": "Delete",
    },
  },
  {
    label: "Icon Button with Success Color",
    props: {
      isIconButton: true,
      color: "success",
      icon: <ShoppingCartIcon />,
      "aria-label": "Add to cart",
    },
  },
];

const dialogVariants = [
  {
    label: "Basic Dialog",
    props: {
      title: "Confirm Action",
      content: "Are you sure you want to perform this action?",
      actions: (close: () => void) => (
        <>
          <AppButton onClick={close}>Cancel</AppButton>
          <AppButton
            color="success"
            onClick={() => {
              console.log("Confirmed");
              close();
            }}
          >
            Confirm
          </AppButton>
        </>
      ),
      trigger: <AppButton>Open Dialog</AppButton>,
    },
  },
  {
    label: "Text Trigger",
    props: {
      title: "Information",
      content: "This dialog was triggered by a text element.",
      actions: (close: () => void) => (
        <AppButton onClick={close}>Close</AppButton>
      ),
      trigger: (
        <span
          style={{
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Click me
        </span>
      ),
    },
  },
];

const ComponentList = () => {
  const mainContent = [
    {
      component: Typography,
      props: { variant: "h4", children: "Components" },
    },
    {
      component: PageBody,
      props: {
        children:
          "This page lists all the components available in the application. You can use these components to build your own pages and customize the look and feel of the application.",
      },
    },
    {
      component: GridContainer,
      props: {
        components: [
          { component: PageSubheader, props: { children: "Typography" } },
          { component: Divider },
          { component: PageTitle, props: { children: "Page Title" } },
          { component: PageSubheader, props: { children: "Page Subheader" } },
          { component: PageBody, props: { children: "Page Body" } },
          { component: PageCaption, props: { children: "Page Caption" } },
        ],
        spacing: 2,
      },
    },
    {
      component: GridContainer,
      props: {
        spacing: 2,
        components: [
          {
            component: PageSubheader,
            props: { children: "AppButton Variants" },
          },
          { component: Divider },
          ...buttonVariants.flatMap(({ label, props }) => [
            {
              component: Typography,
              props: { variant: "subtitle2", children: label },
              size: 12,
            },
            {
              component: AppButton,
              props,
              size: 12,
            },
          ]),
        ],
      },
    },
    {
      component: GridContainer,
      props: {
        spacing: 2,
        components: [
          {
            component: PageSubheader,
            props: { children: "AppDialog Variants" },
          },
          { component: Divider },
          ...dialogVariants.flatMap(({ label, props }) => [
            {
              component: Typography,
              props: { variant: "subtitle2", children: label },
              size: 12,
            },
            {
              component: AppDialog,
              props,
              size: 12,
            },
          ]),
        ],
      },
    },
    {
      component: GridContainer,
      props: {
        spacing: 2,
        components: [
          {
            component: SnackBarDemo,
            props: {},
            size: 12,
          },
        ],
      },
    },
  ];

  return (
    <PageWrapper maxWidth="md">
      <GridContainer components={mainContent} />
    </PageWrapper>
  );
};

export default ComponentList;
