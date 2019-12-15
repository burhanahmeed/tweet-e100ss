import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import ItemCard from './ItemCard'

const useStyles = makeStyles(theme => ({
    lists: {
        margin: '20px'
    }
}))

export default function CardLists () {
    const classes = useStyles();

    const [datas, setDatas] = useState([{},{}])

    return (
        <div className={classes.lists}>
            <Container maxWidth="md">

                {datas.map((value, idx) => {
                    return <ItemCard/>
                })}

            </Container>
        </div>
    )
}