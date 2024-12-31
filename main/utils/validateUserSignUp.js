const validateUserSignUp = (fullName, email, phone, password, confirmPassword) => {
    const errors = {};
    const fullNamePattern = /^[a-zA-Z- ]+$/; 

    if (!fullName) {
        errors.fullName = 'Full Name is required';
    } else if (!fullNamePattern.test(fullName)) {
        errors.fullName = 'Full Name can only contain letters, spaces, and hyphens';
    }

    if (!email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email address is invalid';
    }

    if (!phone) {
        errors.phone = 'Phone Number is required';
    }

    if (!password) {
        errors.password = 'Password is required';
    } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (!confirmPassword) {
        errors.confirmPassword = 'Confirm Password is required';
    } else if (confirmPassword !== password) {
        errors.confirmPassword = 'Passwords must match';
    }

    return errors;
};

export default validateUserSignUp