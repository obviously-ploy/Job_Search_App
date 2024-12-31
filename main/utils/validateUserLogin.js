const validateUserLogin = (email, password) => {
    const errors = {};
    
    if (!email) {
        errors.email = 'Email is required';
    }
    if (!password) {
        errors.password = 'Password is required';
    }

    return errors
};

export default validateUserLogin