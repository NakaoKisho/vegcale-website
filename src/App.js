import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/blog/Blog";
import BlogContent from "./pages/blog/BlogContent";
import Contact from "./pages/contact/Contact";
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import CssBaseline from '@mui/material/CssBaseline'
import Header from "./components/common/Header";
import HomeContent from "./pages/home/HomeContent";
import Home from "./pages/home/Home";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import NoPage from "./pages/no_page/NoPage";
import { ThemeProvider, createTheme } from "@mui/material";
import vegcaleTheme from "./styles/theme";
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import Portfolio from "./pages/portfolio/Portfolio";
import PortfolioContent from "./pages/portfolio/PortfolioContent"

const theme = createTheme(vegcaleTheme)

const sections = [
  { title: 'Home', url: '/', icon: <HomeOutlinedIcon /> },
  { title: 'Portfolio', url: '/portfolio', icon: <WebAssetOutlinedIcon /> },
  { title: 'Blog', url: '/blog', icon: <MenuBookOutlinedIcon /> },
  { title: 'Contact', url: '/contact', icon: <ContactPageOutlinedIcon /> },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header title="文系エンジニア" sections={sections} />}>
            <Route index element={<Home homeContent={HomeContent} />} />
            <Route path="portfolio" element={<Portfolio portfolioContent={PortfolioContent} />} />
            <Route path="blog" element={<Blog blogContent={BlogContent}/>} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
