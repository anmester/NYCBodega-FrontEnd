import React from 'react';

class Login extends React.Component{
    state = {
        newacct: "",
        username: "", 
        password: ""
    }

    newAcctClickHandler = () =>{
        this.setState({newacct: true})
    }


    render(){
        return(
            <React.Fragment>
            <form onSubmit={((e)=>this.props.onNewBodegaReviewSubmit(e))} > 
                <h3>Welcome! Please Sign In : </h3>
                <br/>

                <h4>New Here? </h4>
                <input type="submit" value="Create New Account" onClick={this.newAcctClickHandler}> </input>
                <br/>

                <div className='login ui container' style={{display: this.state.newacct? "none" : "block"}}>
                    <div class="ui form" equal width form>
                        <div class='fields' name='coffee-fields'>
                            <div input type="text"  class="field" name='username' onChange={((e)=>this.props.onNewBodegaReviewChange(e) )} >
                                <label>Username : </label>
                                <textarea name='username' rows="1"></textarea>
                            </div>

                            <div input type="text"  class="field" name='password' onChange={((e)=>this.props.onNewBodegaReviewChange(e) )} >
                                <label>Password : </label>
                                <textarea name='password' rows="1"></textarea>
                            </div>
                            <input type="submit" value="Submit" onSubmit={((e)=>this.props.onNewBodegaReviewSubmit)}></input>
                        </div>
                    </div>
                </div>


                <div className='newacct ui container' style={{display: this.state.newacct? "block" : "none"}}>
                    <div class="ui form" equal width form>
                        <div class='fields' name='coffee-fields'>
                            <div input type="text"  class="field" name='username' onChange={((e)=>this.props.onNewBodegaReviewChange(e) )} >
                                <label>Username : </label>
                                <textarea name='username' rows="1"></textarea>
                            </div>

                            <div input type="text"  class="field" name='password' onChange={((e)=>this.props.onNewBodegaReviewChange(e) )} >
                                <label>Password : </label>
                                <textarea name='password' rows="1"></textarea>
                            </div>
                            <input type="submit" value="Submit" onSubmit={((e)=>this.props.onNewBodegaReviewSubmit)}></input>
                        </div>
                    </div>
                </div>

            </form>
            </React.Fragment>

        )
    }



}

export default Login;