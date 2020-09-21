    
import React from "react";

import {
   Card, CardImg, CardText, CardBody,
   CardTitle, CardSubtitle, Button
} from 'reactstrap';
//Redux state is now in the props of this component

const Artist = (props) => {
    const { artist } = props;
    console.log(artist);

    return (
        
        <Card>
            <CardImg top src={artist.image} alt="Card image cap" />
            <CardBody>
                <CardTitle>{artist.name}</CardTitle>
                <CardSubtitle>{artist.subtitle}</CardSubtitle>
                <a href={artist.share.href}><Button>View More</Button></a>/
            </CardBody>
        </Card>
    );
}


export default Artist;

