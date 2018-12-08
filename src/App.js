import React from 'react';
import './App.css';
import Card from '@material-ui/core/Card/Card';
import CardActions from '@material-ui/core/CardActions/CardActions';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import Grid from '@material-ui/core/Grid/Grid';
import Icon from '@material-ui/core/Icon/Icon';

export default () => {
   return (
     <div className="App">
       <header className="App-header">
         <Grid>
           Hola!
         </Grid>
       </header>
     </div>
   );
};
