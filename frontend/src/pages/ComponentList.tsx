import PageWrapper from "@/components/common/PageWrapper";
import PageBody from "@/components/font/PageBody";
import PageCaption from "@/components/font/PageCaption";
import PageSubheader from "@/components/font/PageSubheader";
import PageTitle from "@/components/font/PageTitle";
import { Divider, Typography } from "@mui/material";
import GridContainer from "@/components/layout/GridContainer";
import AppButton from "@/components/common/AppButton";
import AppDialog from "@/components/common/AppDialog";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
  ];

  return (
    <PageWrapper maxWidth="md">
      <GridContainer components={mainContent} />
    </PageWrapper>
  );
};

export default ComponentList;
