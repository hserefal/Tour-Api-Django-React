import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
const axios = require('axios').default;

const Tour = (props) => {
    return (
        <Grid item >
            <Card sx={{ maxWidth: 1200, width: "100%" }} >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.tour.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {props.tour.company}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.tour.description}
                    </Typography>
                    {props.tour.dates.map(date => {
                        var dateObj = new Date(date.date);

                        return <Typography component="div" color="text.secondary">
                            {dateObj.toISOString().substring(0, 10)}
                        </Typography>
                    })}
                </CardContent>
                <CardActions>
                    <Button size="small">{"$" + props.tour.price}</Button>
                </CardActions>
            </Card>
        </Grid>

    );
}

const Tours = () => {
    const url = 'http://localhost:3003/tours/'

    const [loading, setLoading] = useState(true)

    const [tours, setTours] = useState([])

    // @ts-ignore
    const fetchTours = () => {
        let headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + window.sessionStorage.getItem("token")

        }
        // Make a request for a user with a given ID
        axios.get(url, { headers: headers })
            .then(function (response) {
                // handle success
                console.log(response.data);
                setTours(response.data)
                setLoading(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setLoading(false)
                setTours([error.data])
            })
    }

    useEffect(() => {
        fetchTours()
    }, [])

    return (
        <>
            <Grid container spacing={5}>
                {
                    loading ? <div>Loading</div> : tours.map((tour, index) => {
                        return <Tour key={index} tour={tour}></Tour>
                    })
                }
            </Grid>

        </>

    );

}

export default Tours;