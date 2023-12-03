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
} from "@material-ui/core";
import blogData from "./blogData.json";
import blogDataEasy from "./blogDataEasy.json";
import blogDataHard from "./blogDataHard.json";

const Blog = ({ readingLevel, isTextToSpeech }) => {
  const classes = useBlogStyles();
  const [newsArticles, setNews] = useState([]);
  const [latestNews, setLatestNews] = useState({});

  useEffect(() => {
    if (readingLevel === "easy") {
      setNews(blogDataEasy.newsArticles);
      setLatestNews(blogDataEasy.latestNews);
    } else if (readingLevel === "hard") {
      setNews(blogDataHard.newsArticles);
      setLatestNews(blogDataHard.latestNews);
    } else {
      setNews(blogData.newsArticles);
      setLatestNews(blogData.latestNews);
    }
  }, [readingLevel]);

  const speakAllArticles = () => {
    if (isTextToSpeech) {
      let allTexts = latestNews.title + ". " + latestNews.summary;
      newsArticles.forEach((article) => {
        allTexts += " " + article.title + ". " + article.summary;
      });
      const utterance = new SpeechSynthesisUtterance(allTexts);
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    if (isTextToSpeech) {
      speakAllArticles();
    } else {
      window.speechSynthesis.cancel();
    }
  }, [isTextToSpeech, latestNews, newsArticles]);

  return (
    <Container maxWidth="lg">
      <Box className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} className={classes.latestNewsSection}>
            <Typography variant="h4" className={classes.newsTitle}>
              Latest News
            </Typography>
            {latestNews && (
              <Card key={blogData.latestNews.id} className={classes.newsItem}>
                <CardActionArea className={classes.cardActionArea}>
                  <CardMedia
                    className={classes.media}
                    image={blogData.latestNews.imageUrl}
                    title={blogData.latestNews.title}
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {blogData.latestNews.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {blogData.latestNews.summary}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    className={classes.readMore}
                    onClick={() =>
                      window.open(
                        blogData.latestNews.link,
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

          <Grid item xs={12} md={8} className={classes.newsSection}>
            <Typography variant="h4" className={classes.newsTitle}>
              News
            </Typography>
            {newsArticles.map((article) => (
              <Card key={article.id} className={classes.newsItem}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={article.imageUrl}
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
                    href={article.link}
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
