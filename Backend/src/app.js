import express from "express";
import routes from "./routes/index.js";
import { errorMiddleware } from "./middleware/errormiddleware.js";

const app = express();

app.use(express.json());

app.use("/api", routes);

app.use(errorMiddleware);

const startServer = async () =>{
    try{
  await connectDB();
   app.listen(env.port,() =>{
    console.log(`Server running on port ${env.port}`);
   })   
 
}catch(error){
        console.error("Failed to start server:", error.message);
    }
}

startServer();

export default app;