import React from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Album = (props) => {
    const { album } = props;

    return (
        <Card>
            <CardImg top src={album.cover} alt="Card image cap" />
            <CardBody>
                <CardTitle>{album.title}</CardTitle>
            </CardBody>
        </Card>
    );
}



export default Album;
