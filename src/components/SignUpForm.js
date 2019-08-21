import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import { Card, Form, Image, Button } from 'semantic-ui-react'

export default class SignUpForm extends React.Component{
    state = {
        username: "",
        displayname: "",
        neighborhood: ""
    }

    changeHandler = e => {
        console.log(e.target.name)
        this.setState({[e.target.name]: e.target.value})
    }
    
    render() {
        return(
            <div style={{marginTop: 5.65 + 'em'}}>
                <h2 style={{textAlign: 'center'}}>Sign Up for Bodegas!</h2><br></br>
                <div class='ui grid center aligned' >
                    <Card.Group className='sign-up-form' >
                        <Card class='two wide column'>
                            <Image src='https://pbs.twimg.com/media/ECdPiu_W4AIdv7t?format=jpg&name=large' style={{width: '100%'}}/>
                        </Card>
                        
                        <Card class='two wide column'> 
                            <Card.Content>
                                <Form onSubmit={(e) => this.props.submitHandler(e, this.state)}>
                                    <Form.Field onChange={this.changeHandler}>
                                        <Form.Input label='Enter Name' placeholder='Enter Name' value={this.state.username} name='username' width={10}/>
                                    </Form.Field>
                                    <Form.Field onChange={this.changeHandler}>
                                        <Form.Input label='Enter Display Name' placeholder='Enter Display Name' value={this.state.displayname} name='displayname' width={10}/>
                                    </Form.Field>
                                    <Form.Field onChange={this.changeHandler}>
                                        <Form.Input label='Enter Neighborhood' placeholder='Enter Neighborhood' value={this.state.neighborhood} name='neighborhood' width={10}/>
                                    </Form.Field>
                                    <Button type='submit' value='submit'>Sign Up</Button>
                                </Form>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </div>
            </div>
        )
    }
}