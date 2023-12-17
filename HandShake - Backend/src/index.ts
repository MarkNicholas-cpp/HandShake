import express,{Express} from "express";

const app:Express = express();
const port = 5000;





app.listen(5000,()=>{
 console.log("server is listening at port 5000");
});
