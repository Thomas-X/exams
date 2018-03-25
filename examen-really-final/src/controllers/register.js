import { Router } from 'express';

const Register = Router();

Register.get('/register',(req, res, next) => {
    res.render('register', req.passParametersToTemplate({title: 'bla'}));
});

export default Register;