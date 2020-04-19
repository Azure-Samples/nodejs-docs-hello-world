const express = require('express');
const app = express();
const bodyParser = require('body-parser');
process.env.JWT_KEY = "kampisVL";

const tenantsRoute = require('./api/routes/tenantsRoutes');
const authRoute = require('./api/routes/authRoutes');

//app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//CORS headers
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-headers',
    'Origin, X-Rrequested-With, Content-Type, Accept, Authorization'
    );

    if(res.method === 'OPTIONS')
    {
        res.header(
            'Access-Control-Allow-Methods',
            'PUT, GET, PATCH, POST'
        );
        return res.status(200).json({});
    }

    next();
});

app.use('/api/tenants',tenantsRoute);
app.use('/api/auth',authRoute);


//error handling
app.use((req,res,next)=>{
    const error = new Error("Not Found");
    error.status= 404;
    next(error);
});

app.use((req,res,next)=>{
    res.status(err.status(err.status || 500));
    res.json({
        error:{
            message:"Something worse happened"
        }
    });
});


module.exports = app;