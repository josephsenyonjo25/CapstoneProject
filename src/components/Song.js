import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Song = (props) => {
    const { song } = props;
    console.log(song)
    return (
        <Card>
            <CardImg top src={song.images.coverart} alt="Card image cap" />
            <CardBody>
                <CardTitle>{song.title}</CardTitle>
                <cardImg>{song.images.coverart}</cardImg>
                <CardSubtitle>{song.subtitle}</CardSubtitle>
                <a href={song.share.href}><Button>View More</Button></a>
            </CardBody>
        </Card>
    );
}

export default Song;