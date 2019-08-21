import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import { Card, Button, Icon } from 'semantic-ui-react'


export default class BodegaMapRender extends React.Component{

    render() {
        let marginLeft = {
            marginLeft: 10 + 'em',
        }

        let marginTop = {
            marginTop: 3 + 'em',
        }
        
        return(
            <Card class='ui segment' style={{...marginTop, ...marginLeft}} floated='right'>
                <Card.Content>
                    <Card.Header>{this.props.bodegaInfo.name} </Card.Header>
                    <Card.Description>
                        Neighborhood: {this.props.bodegaInfo.neighborhood} <br></br>
                        Average Rating: {this.props.bodegaInfo.averagerating} <br></br><br></br>
                    </Card.Description>
                    <Card.Content extra>
                        <Button primary floated='right' onClick={this.props.closeBodegaShow}>Close Bodega</Button>
                        <Button primary floated='left' onClick={this.props.addReview}>Add Review</Button>
                    </Card.Content>
                </Card.Content>
            </Card>
        )
    }
}