import mongoose from "mongoose";
mongoose.set('strictQuery', true);
let count = 0;

const options = {
    dbName: "personel_web",
    autoIndex: false, 
    // Don't build indexes
    //poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
   // bufferMaxEntries: 0,
    // all other approaches are now deprecated by MongoDB:
    useNewUrlParser: true,
    useUnifiedTopology: true

};
const conn = () => {
    console.log('MongoDB connection with retry')
    
    mongoose
        .connect(
            process.env.DB_URI,
            options)
        .then(() => {
            console.log('MongoDB is connected')
        }).catch(err => {
            console.log(err)
            console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++count);
            //setTimeout(conn, 5000)
        })
};


//exports.mongoose = mongoose;

export default conn;