import { useState } from "react";
import PageWrapper from "@/components/common/PageWrapper";
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
import AppRadioGroup from "@/components/common/AppRadioGroup";
import AppAvatar from "@/components/common/AppAvatar";
import { IconButton } from "@mui/material";
import AppCard from "@/components/common/AppCard";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AppAlert from "@/components/common/AppAlert";
import AppTypography from "@/components/common/AppTypography";
import { Share } from "@mui/icons-material";

const alertVariants = [
  {
    severity: "success",
    message: "This is a success alert — well done!",
  },
  {
    severity: "info",
    message: "This is an info alert — for your information.",
  },
  {
    severity: "warning",
    message: "This is a warning alert — be careful.",
  },
  {
    severity: "error",
    message: "This is an error alert — something went wrong.",
  },
];

const AlertDemo = () => {
  const mainContent = [
    {
      component: AppTypography,
      props: { children: "AppAlert Variants", variant: "h5" },
    },
    { component: Divider },
    ...alertVariants.map((alert, index) => ({
      component: AppAlert,
      props: {
        severity: alert.severity,
        message: alert.message,
        variant: "filled",
      },
      size: 12,
      key: index,
    })),
  ];

  return <GridContainer components={mainContent} spacing={2} />;
};

const CardDemo = () => {
  const mainContent = [
    {
      component: AppTypography,
      props: { children: "AppCard Demo", variant: "h5" },
    },
    { component: Divider },
    // Basic card
    {
      component: AppCard,
      props: {
        title: "Simple Card",
        subheader: "This is a subtitle",
        content: (
          <Typography variant="body2" color="text.secondary">
            This is a simple card with a title and content.
          </Typography>
        ),
      },
    },
    // Card with avatar + action icon
    {
      component: AppCard,
      props: {
        title: "User Profile",
        subheader: "Online",
        avatar: <AppAvatar size="small" src="/avatars/avatar1.jpg" />,
        action: (
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        ),
        content: (
          <Typography variant="body2" color="text.secondary">
            This card uses avatar + action in the header.
          </Typography>
        ),
      },
    },

    // Card with media
    {
      component: AppCard,
      props: {
        media: {
          image:
            "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg", // Replace with your actual path
          alt: "Nature",
        },
        content: (
          <>
            <Typography variant="h6">Card with Image</Typography>
            <Typography variant="body2" color="text.secondary">
              This card includes an image and some content.
            </Typography>
          </>
        ),
        actions: (
          <>
            <AppButton
              fullWidth
              size="small"
              variant="text"
              startIcon={<Share />}
            >
              Share
            </AppButton>
            <AppButton fullWidth size="small" variant="text">
              Learn More
            </AppButton>
          </>
        ),
      },
    },
  ];

  return <GridContainer components={mainContent} spacing={2} />;
};

const AvatarDemo = () => {
  const mainContent = [
    {
      component: AppTypography,
      props: { children: "AppAvatar Variants", variant: "h5" },
    },
    { component: Divider },
    {
      component: Typography,
      props: {
        variant: "subtitle2",
        children: "Small Avatar",
      },
    },
    {
      component: AppAvatar,
      props: {
        size: "small",
        src: "/avatars/avatar1.jpg",
        alt: "Small Avatar",
      },
    },
    {
      component: Typography,
      props: {
        variant: "subtitle2",
        children: "Medium Avatar",
      },
    },
    {
      component: AppAvatar,
      props: {
        size: "medium",
        src: "/avatars/avatar2.jpg",
        alt: "Medium Avatar",
      },
    },
    {
      component: Typography,
      props: {
        variant: "subtitle2",
        children: "Large Avatar",
      },
    },
    {
      component: AppAvatar,
      props: {
        size: "large",
        src: "/avatars/avatar3.jpg",
        alt: "Large Avatar",
      },
    },
  ];

  return <GridContainer components={mainContent} spacing={2} />;
};

const RadioGroupDemo = () => {
  const [fruit, setFruit] = useState("Banana");
  const [plan, setPlan] = useState("pro");

  const mainContent = [
    {
      component: AppTypography,
      props: { children: "AppRadioGroup Demo", variant: "h5" },
    },
    { component: Divider },
    {
      component: Typography,
      props: {
        variant: "subtitle2",
        children: "Choose your favorite fruit:",
      },
    },
    {
      component: AppRadioGroup,
      props: {
        label: "Fruits",
        name: "fruits",
        value: fruit,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setFruit(e.target.value),
        options: ["Apple", "Banana", "Mango"],
        row: true,
      },
    },
    {
      component: Typography,
      props: {
        variant: "subtitle2",
        children: "Choose your plan:",
      },
    },
    {
      component: AppRadioGroup,
      props: {
        label: "Plan",
        name: "plan",
        value: plan,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setPlan(e.target.value),
        options: [
          { label: "Free Plan", value: "free" },
          { label: "Pro Plan", value: "pro" },
          { label: "Enterprise Plan", value: "enterprise" },
        ],
      },
    },
  ];

  return <GridContainer components={mainContent} spacing={2} />;
};

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
            component: AppTypography,
            props: { children: "AppSnackBar Demo", variant: "h5" },
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
            size: 4,
            props: {
              onClick: () => showSnack("All good!", "success"),
              children: "Show Success",
            },
          },
          {
            component: AppButton,
            size: 4,
            props: {
              onClick: () => showSnack("Oops!", "error"),
              color: "error",
              children: "Show Error",
            },
          },
          {
            component: AppButton,
            size: 4,
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
      code: `<AppButton variant="contained" color="success" icon={<SaveIcon />}>Save</AppButton>`,
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
    label: "Icon Button Dialog",
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
      trigger: (
        <AppButton isIconButton icon={<AlarmIcon />} aria-label="Alarm" />
      ),
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
      component: AppTypography,
      props: {
        children:
          "This page lists all the components available in the application. You can use these components to build your own pages and customize the look and feel of the application.",
        variant: "body1",
      },
    },
    {
      component: GridContainer,
      props: {
        components: [
          {
            component: AppTypography,
            props: { children: "Typography", variant: "h5" },
          },
          { component: Divider },
          {
            component: AppTypography,
            props: { children: "Page Title", variant: "h4" },
          },
          {
            component: AppTypography,
            props: { children: "Page Subheader", variant: "h5" },
          },
          {
            component: AppTypography,
            props: { children: "Page Body", variant: "body1" },
          },
          {
            component: AppTypography,
            props: { children: "Page Caption", variant: "caption" },
          },
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
            component: AppTypography,
            props: { children: "AppButton Variants", variant: "h5" },
          },
          { component: Divider },
          ...buttonVariants.flatMap(({ label, props }) => [
            {
              component: Typography,
              props: { variant: "subtitle2", children: label },
              size: 6,
            },
            {
              component: AppButton,
              props,
              size: 6,
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
            component: AppTypography,
            props: { children: "AppDialog Variants", variant: "h5" },
          },
          { component: Divider },
          ...dialogVariants.flatMap(({ label, props }) => [
            {
              component: Typography,
              props: { variant: "subtitle2", children: label },
              size: 6,
            },
            {
              component: AppDialog,
              props,
              size: 6,
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
    {
      component: GridContainer,
      props: {
        spacing: 2,
        components: [
          {
            component: RadioGroupDemo,
            props: {},
            size: 12,
          },
        ],
      },
    },
    {
      component: GridContainer,
      props: {
        spacing: 2,
        components: [
          {
            component: AvatarDemo,
            props: {},
            size: 12,
          },
        ],
      },
    },
    {
      component: GridContainer,
      props: {
        spacing: 2,
        components: [
          {
            component: CardDemo,
            props: {},
            size: 12,
          },
        ],
      },
    },
    {
      component: GridContainer,
      props: {
        spacing: 2,
        components: [
          {
            component: AlertDemo,
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
