import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import css from './Card.css'


const CardItem = (props) => {

  return (
    <Card className={css.card}>
      <CardContent className={css.content}>
        {props.children}
      </CardContent>
    </Card>
  );
}


export default CardItem;
