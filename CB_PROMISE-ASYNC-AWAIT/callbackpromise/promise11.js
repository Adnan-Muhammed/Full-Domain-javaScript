const userLoginPost = (req, res) => {
    const { email_Id, password } = req.body;

    // Find the user from the database
    userDB.findOne({ email: email_Id }, { name: 1, email: 1, password: 1, isBlocked: 1 })
        .then(user => {
            if (!user) {
                req.session.invalid = true;
                return res.redirect('/loginpage');
            }

            if (user.isBlocked === false) {
                // Compare the password using bcrypt
                return bcrypt.compare(password, user.password)
                    .then(passwordMatch => {
                        if (passwordMatch) {
                            req.session.user = {
                                name: user.name,
                                email: user.email,
                                isBlocked: user.isBlocked,
                            };
                            if (!req.session.cartId) {
                                return res.redirect('/');
                            } else {
                                const cartSession = req.session.cartId;
                                req.session.cartId = null;
                                return res.redirect('/cart/' + cartSession);
                            }
                        } else {
                            req.session.passwordError = true;
                            return res.redirect('/loginpage');
                        }
                    });
            } else {
                req.session.Blocked = true; // for alert message
                return res.redirect('/loginpage');
            }
        })
        .catch(error => {
            console.error('Error:', error); // Log the error for debugging
            return res.redirect('/error');
        });
};
