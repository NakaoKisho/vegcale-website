import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Container } from "@mui/material";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Blog(props) {
  const { blogContent } = props;

  return (
    <Container
      maxWidth="md"
      sx={{ paddingTop: 4 }}
    >
        {blogContent.map((item) => (
            <Link
                href={item.link}
                color="inherit"
                underline="none"
            >
                <Card sx={{ width: 1, marginBottom: 2 }} raised={true}>
                    <CardMedia
                        component="img"
                        sx={{ height: 350 }}
                        image={item.img}
                        alt={item.alt}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography sx={{whiteSpace: "pre-wrap"}} variant="body2" color="text.secondary">
                            {item.detail}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        ))}
    </Container>
  );
}