import Card, { CardProps } from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Divider from "@mui/material/Divider";

interface AppCardProps extends Omit<CardProps, "title" | "content"> {
  title?: React.ReactNode;
  subheader?: React.ReactNode;
  avatar?: React.ReactNode;
  action?: React.ReactNode;
  media?: {
    image: string;
    alt?: string;
    height?: number;
  };
  content?: React.ReactNode;
  actions?: React.ReactNode;
}

const AppCard: React.FC<AppCardProps> = ({
  title,
  subheader,
  avatar,
  action,
  media,
  content,
  actions,
  ...rest
}) => {
  return (
    <Card {...rest}>
      {(title || subheader || avatar || action) && (
        <>
          <CardHeader
            title={title}
            subheader={subheader}
            avatar={avatar}
            action={action}
          />
          <Divider />
        </>
      )}
      {media && (
        <CardMedia
          component="img"
          height={media.height ?? 180}
          image={media.image}
          alt={media.alt ?? "Card media"}
        />
      )}
      {content && <CardContent>{content}</CardContent>}
      {actions && (
        <>
          <Divider />
          <CardActions>{actions}</CardActions>
        </>
      )}
    </Card>
  );
};

export default AppCard;
