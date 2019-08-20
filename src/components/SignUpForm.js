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
            <div className='sign-up-form' style={{marginTop: 4.15 + 'em'}}>
                <h2 style={{textAlign: 'center'}}>Sign Up for Bodegas</h2>
                <Card centered style={{width: 600 + 'px', height: 400 + 'px'}}> 
                    <Image src='https://pbs.twimg.com/media/EAMxnumVUA0j_QX?format=jpg&name=medium' />
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
            </div>
        )
    }
}