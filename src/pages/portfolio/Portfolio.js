import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Container } from "@mui/material";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Portfolio(props) {
    const { portfolioContent } = props;

    return (
        <Container
            maxWidth="md"
            sx={{ paddingTop: 4 }}
        >
            {portfolioContent.map((item) => (
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
                    <CardActions>
                        <Button
                            size="small"
                            href={item.githubLink}
                            sx={{
                                display: item.githubLink ? "block" : "none"
                            }}
                        >
                            Github
                        </Button>
                        <Button
                            size="small"
                            href={item.GooglePlayStoreLink}
                            sx={{
                                display: item.GooglePlayStoreLink ? "block" : "none"
                            }}
                        >
                            Google Play Store
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </Container>
    );
}