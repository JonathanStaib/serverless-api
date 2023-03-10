const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  "id": String,
  "name": String,
});

const peopleModel = dynamoose.model('lab', schema);

exports.handler = async(event) => {
    
  let id = event?.pathParameters?.id;
  let parsedData = JSON.parse(event.body);
  
  let newName = parsedData.name;
  console.log(newName);
  
  let response = {statusCode: null, body: null};
  
  try{
      
      let results = await peopleModel.update({"id": id, "name": newName});
      console.log(results);
      
      response.body = JSON.stringify(results);
      response.statusCode = 200;
      
  }catch(e){
      
    response.body = JSON.stringify(e.message);
    response.statusCode = 500;
    
  }
  return response;
};