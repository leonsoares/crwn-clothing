import React from 'react'

import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component'

// class compoenent because we need to store what the user is typing in 

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password: ''
        }
    }
handleSubmit = (event) => {
    event.preventDefault()
    this.setState({email:'', password:''})

    console.log('submiting')
}

handleChange = event => {
    const {value, name} = event.target
    this.setState({[name]: value})
}

    render(){
        return(
            <div className='sign-in'>
                <h2> I Already have an account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='email' 
                        name='email' 
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput
                        type='password' 
                        name='password' 
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <CustomButton type='submit'>Sign in</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignIn