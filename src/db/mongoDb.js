import dotenv from 'dotenv'
dotenv.config();
import mongodb from "mongodb";  
function mongodbConexao() {   
  return new mongodb.MongoClient(process.env.URL_MONGO);
} 
export {mongodbConexao};