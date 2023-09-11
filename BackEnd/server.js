import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));

app.use(express.json);
app.use(cors);



const APP = app.listen(PORT, () =>{
	console.log(`listening on ${PORT}`);
})

export default APP;