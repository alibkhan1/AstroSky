import React, { useEffect, useState } from "react";
import { useBlogStyles } from "./Blog.styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Container,
  CardActions,
  Button,
  CircularProgress,
} from "@material-ui/core";

const Blog = ({ readingLevel, isTextToSpeech }) => {
  const classes = useBlogStyles();
  const [newsArticles, setNews] = useState([]);
  const [latestNews, setLatestNews] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const url = `https://assets.astrosky.org/${
        readingLevel === "easy" ? "simplified-articles" : "articles"
      }.json`;
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.length > 0) {
        setLatestNews(data[0]);
        setNews(data.slice(1));
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [readingLevel]);

  useEffect(() => {
    const speakAllArticles = () => {
      if (isTextToSpeech && latestNews && newsArticles.length) {
        let allTexts = latestNews.title + ". " + latestNews.summary;
        newsArticles.forEach((article) => {
          allTexts += " " + article.title + ". " + article.summary;
        });
        const utterance = new SpeechSynthesisUtterance(allTexts);
        window.speechSynthesis.speak(utterance);
      }
    };

    speakAllArticles();

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [isTextToSpeech, latestNews, newsArticles]);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box className={classes.root}>
        <Grid container spacing={3}>
          {/* Latest News Section */}
          <Grid item xs={12} md={4} className={classes.latestNewsSection}>
            <Typography variant="h4" className={classes.newsTitle}>
              Latest News
            </Typography>
            {latestNews && (
              <Card key={latestNews.id} className={classes.newsItem}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={latestNews.image_url}
                    title={latestNews.title}
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {latestNews.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {latestNews.summary}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    className={classes.readMore}
                    onClick={() =>
                      window.open(
                        latestNews.url,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    Read more
                  </Button>
                </CardActions>
              </Card>
            )}
          </Grid>

          {/* News Section */}
          <Grid item xs={12} md={8} className={classes.newsSection}>
            <Typography variant="h4" className={classes.newsTitle}>
              News
            </Typography>
            {newsArticles.map((article) => (
              <Card key={article.id} className={classes.newsItem}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={article.image_url}
                    title={article.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h3"
                      className={classes.newsTitle}
                    >
                      {article.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className={classes.newsSummary}
                    >
                      {article.summary}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    className={classes.readMore}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Blog;
