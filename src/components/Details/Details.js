import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import Tabs from './Tabs';
import useTransactions from '../../useTransactions';

import useStyles from './styles';



const Details = ({ title }) => {
  const classes = useStyles();
  const {total, chartData} = useTransactions(title);

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      {
        title === "Income" ? (
          <>
            <CardHeader title={title} />
            <CardContent>
              <Typography variant='h5'> &#8377; {total} </Typography>
              <Tabs title={title} />
            </CardContent>
          </>
        ) : ( 
          <>
            <CardHeader title={title} />
            <CardContent>
            <Typography variant='h5'> &#8377; {total} </Typography>
              <Tabs title={title} />
            </CardContent>
          </>
        )
      }
    </Card>
  )
}

export default Details;

