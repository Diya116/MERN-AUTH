import toast from "react-hot-toast";
export const uservalidate=(values)=>{
    let errors={};
    if(!values.username){
        errors.username="Username is required";
    }
    else if(values.username.length<3){
        errors.username="Username must be atleast 3 characters long";
    }
    else if(values.username.length>15){
        errors.username="Username must be less than 15 characters long";
    }
    if(!values.password){
        errors.password="Password is required";
    }
    else if(values.password.length<6){
        errors.password="Password must be atleast 6 characters long";
    }
    else if(values.password.length>15){
        errors.password="Password must be less than 15 characters long";
    }
    return errors;
    }
