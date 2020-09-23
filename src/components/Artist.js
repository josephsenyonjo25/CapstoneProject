    
import React from "react";

import {
   Card, CardImg, CardText, CardBody,
   CardTitle, CardSubtitle, Button
} from 'reactstrap';
//Redux state is now in the props of this component

const Artist = (props) => {
    const { artist } = props;

    const shareButton = artist.strWebsite ? <a href={'http://' + artist.strWebsite}><Button>View More</Button></a> : null;

    return (
        <Card>
            <CardImg top src={artist.strArtistThumb} alt="Card image cap" />
            <CardBody>
                <CardTitle>{artist.strName}</CardTitle>
                <CardSubtitle>{artist.strCountry}</CardSubtitle>
                {shareButton}
            </CardBody>
        </Card>
    );
}


export default Artist;

