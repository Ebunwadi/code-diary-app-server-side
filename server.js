import * as dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
import connect from "./database/db.js";
import codeApi from './routes/codeApi.js'
import authApi from './routes/userApi.js'
import personApi from './routes/personApi.js'
import passport from "passport";
import passportConfig from "./config/passport.js";
dotenv.config()

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize());
passportConfig(passport);

const verify = passport.authenticate("jwt", { session: false });
app.use('/code', verify, codeApi)
app.use('/auth', authApi)
app.use('/user', verify, personApi)

app.get('/', (req, res)=> {
    res.send('hello')
})

await connect()
console.log('successfully connected');

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5050;
}

app.listen(port, () => {
    console.log('server has started successfully....')
  })