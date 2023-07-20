import styled from '@emotion/styled';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';


const useStyles = styled((theme) => ({
    card: {
      margin: theme.spacing(2),
      maxWidth: 400,
    },
    media: {
      height: 200,
    },
    icon: {
      color: theme.palette.primary.main,
    },
  }));

const Feed = () => {
    const classes = useStyles();

  const cardData = [
    {
      title: 'Card 1',
      subtitle: 'Subtitle for Card 1',
      content: 'Information about Card 1 goes here...',
      image: 'https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80', // Replace with the actual image URL
    },
    {
      title: 'Card 2',
      subtitle: 'Subtitle for Card 2',
      content: 'Information about Card 2 goes here...',
      image: 'https://via.placeholder.com/400', // Replace with the actual image URL
    },
    {
      title: 'Card 3',
      subtitle: 'Subtitle for Card 3',
      content: 'Information about Card 3 goes here...',
      image: 'https://via.placeholder.com/400', // Replace with the actual image URL
    },
  ];
  return (
    <Box flex={8} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        {cardData.map((card, index) => (
        <Card key={index} className={classes.card}>
          <CardMedia
            className={classes.media}
            image={card.image}
            title={card.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {card.title}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="h3">
              {card.subtitle}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {card.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
        </Box>
  )
}

export default Feed;