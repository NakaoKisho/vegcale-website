import { Container } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import "./Home.css";

export default function Home(props) {
  const { homeContent } = props;

  return (
    <Container
      maxWidth="md"
      sx={{ paddingTop: 4 }}
    >
      <ImageList style={{ overflow: "hidden" }} gap={8}>
        {homeContent.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <ImageListItem cols={cols} rows={rows} gap={8}>
              {item.content}
              <ImageListItemBar
                className="bottom-round-corner"
                title={item.title}
                subtitle={item.subtitle}
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Container>
  );
};
