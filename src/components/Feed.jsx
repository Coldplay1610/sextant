import styled from '@emotion/styled';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material';
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
      image: '../assets/picc.png', // Replace with the actual image URL
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
    {
      title: 'Card 4',
      subtitle: 'Subtitle for Card 4',
      content: 'Information about Card 4 goes here...',
      image: '../assets/picc.png', // Replace with the actual image URL
    },
    {
      title: 'Card 5',
      subtitle: 'Subtitle for Card 5',
      content: 'Information about Card 5 goes here...',
      image: 'https://via.placeholder.com/400', // Replace with the actual image URL
    },
    {
      title: 'Card 6',
      subtitle: 'Subtitle for Card 6',
      content: 'Information about Card 6 goes here...',
      image: 'https://via.placeholder.com/400', // Replace with the actual image URL
    },
  ];
  return (
    <Box flex={8} display="flex" p={2} sx={{ display: { xs: "none", sm: "block" } }}>

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
          <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
          <Divider/>
        </Card>
      ))}
        </Box>
  )
}

export default Feed;