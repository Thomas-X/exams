import { Router } from 'express';

const Login = Router();

Login.get('/login',(req, res, next) => {

    res.render('login', req.passParametersToTemplate({
        title: 'bla',

    }));
});

export default Login;