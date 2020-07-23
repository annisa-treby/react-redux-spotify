import React from 'react';
import { Card, CardHeader } from 'reactstrap';
import { useParams } from 'react-router-dom';

function SongInfo() {
   
    let {id}= useParams();
    return (

    <Card>
        <CardHeader>
            Song info {id}
        </CardHeader>
    </Card>
        )
    }


export default SongInfo