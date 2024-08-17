export const checkValidData = (email, password, name) => {
    const isEmailValid = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/.test(name);
    if(name & !isNameValid){
        return "Please enter name!"
    }
    if(!isEmailValid) {
        return "Email is not valid!"
    }
    if(!isPasswordValid){
        return "Password is not valid!"
    }
    return null;
}