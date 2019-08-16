import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'

export default class SignUpForm extends React.Component{
    // state = {
    //     username: "",
    //     password: ""
    // }

    // changeHandler = e => {
    //     this.setState({[e.target.name]: e.target.value})
    // }
    
    render() {
        return(
            <div className='sign-up-form'>
                <h2>Sign Up Form</h2>
                <form >
                    {/* // put this in form tag! onSubmit={() => this.props.submitHandler(e, this.state)} */}
                    <input type='text' placeholder='enter username' value={this.state.username} name='username'/>
                    {/* // put this in input tag! onChange={this.changeHandler} */}
                    <input type='submit' value='submit'/>
                </form>
            </div>
        )
    }
}