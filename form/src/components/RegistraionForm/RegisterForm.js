import React,{Component} from "react";
import Folder from "../folder/Folder";

class RegisterForm extends Component{
    constructor(){
        super();
        this.state={
            fields:{},
            errors:{}
        }
        this.handleChange=this.handleChange.bind(this);
        this.submituserRegistration=this.submituserRegistration.bind(this);
    }
    handleChange(e){
        let fields=this.state.fields;
        fields[e.target.name]=e.target.value;
        this.setState({
            fields
        })
    }
    submituserRegistration(e){
        e.preventDefault();
        if(this.validateForm()){
            let fields={};
            fields["username"]="";
            fields["emailid"]='';
            fields["mobileno"]="";
            fields["password"]="";
            this.setState({fields:fields});
            alert('Form Submitted');
         

            
        }
    }
    validateForm(){
        let fields=this.state.fields;
        let errors={};
        let formIsValid=true;
        if(!fields["username"]){
            formIsValid=false;
            errors['username']="*Please enter your username.";
        }
        if(!fields['emailid']){
            formIsValid=false;
            errors["emailid"]="please enter your email-id"
        }
        if(typeof fields["emailid"]!=="undefined"){
            var pattern= new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
            if(!pattern.test(fields['emailid'])){
                formIsValid=false;
                errors["emailid"]="*please enter valid email"
            }
        }
        if(!fields['mobileno']){
            formIsValid=false;
            errors['mobileno']="*please enter your mobile no"
        }
        if(typeof fields["mobileno"]!=="undefined"){
            if(!fields["mobileno"].match(/^[0-9]{10}$/)){
                formIsValid=false;
                errors["mobileno"]="please enter valid number"
            }
        }
        if(!fields["password"]){
            formIsValid=false;
           errors['password']="please enter your password"

        }
        if(typeof fields['password']!=="undefined"){
            if(!fields["password"].match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")){
                formIsValid=false;
                errors["password"]="please enter at least 8 characters having atleast one special character,one number,0ne lowercase and one uppercase"
            }
        }
        this.setState({
            errors:errors
        })
        return formIsValid
    }
    render(){
        return(
            <div className="main-registration-container">
                <div className="register">
                    <h3>Registration Page</h3>
                    <form method="post" onSubmit={this.submituserRegistration} name="userRegistrationForm">
                        <label>First Name</label>
                        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange}/>
                        <div className="errormsg">{this.state.errors.username}</div>
                        <label>Email ID</label>
                        <input type="email" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}/>
                        <div className="errormsg">{this.state.errors.emailid}</div>
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange}/>
                        <div className="errormsg">{this.state.errors.password}</div>
                        <input type="submit" className="button" value="Register"/>
                    </form>
                </div>
            </div>
        )
    }
}
export default RegisterForm