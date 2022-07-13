import React from 'react';
import PropTypes from 'prop-types';
import IMG from './MZ.png';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, withStyles } from '@mui/material';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function MediaCard(props:any) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {IMG}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Zukerberg
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default MediaCard;