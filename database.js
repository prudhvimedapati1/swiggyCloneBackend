
const mongoose = require('mongoose')
const mongoURL = 'mongodb+srv://prudhvimedapati:Prudhvi%40123@cluster0.uhz6zwu.mongodb.net/swiggyClone?retryWrites=true&w=majority'
// const mongoURL = process.env.DATABASE;
// const mongoURL = 'mongodb://prudhvimedapati:Prudhvi%40123@ac-w9o6r4b-shard-00-00.uhz6zwu.mongodb.net:27017,ac-w9o6r4b-shard-00-01.uhz6zwu.mongodb.net:27017,ac-w9o6r4b-shard-00-02.uhz6zwu.mongodb.net:27017/swiggyClone?ssl=true&replicaSet=atlas-dwqe9z-shard-0&authSource=admin&retryWrites=true&w=majority'



// const mongoDB=async()=>{
//     await mongoose.connect(mongoURL).then(()=>{
//         console.log('success');
//         const fetched_data =mongoose.connection.db.collection('food_items');
//             fetched_data.find({}).toArray(function(err,data){
//                 console.log(data);
//             });
//         }).catch((err)=>console.log(err))    
// }

const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURL);
      console.log('Connected!');
      let fetched_data = mongoose.connection.db.collection("food_items");
      global.food_items=await fetched_data.find({}).toArray() 
      let foodCategory = mongoose.connection.db.collection("food_categories");
      global.food_categories=await foodCategory.find({}).toArray() ;
      
      
      
    } catch (error) {
      console.log('err: ', error);
    }
  };

module.exports=mongoDB;