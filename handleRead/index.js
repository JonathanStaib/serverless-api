const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
    "id": String,
    "name": String
});

const peopleModel = dynamoose.model('people', peopleSchema)

exports.handler = async(event) => {
    console.log('the body', event.body)
    
    let id = event?.pathParameters?.id;
    
    const response = {
        statusCode: null,
        body: null
    }
    try {
      if(id){
       let getOne = await peopleModel.get(id);
       
       response.body = JSON.stringify(getOne);
       response.statusCode = 200;
      }
      else{
        
        let results = await peopleModel.scan().exec();
        console.log(results);
    
        response.body = JSON.stringify(results);
      response.statusCode = 200;
      }
        
    }catch(e){
        response.Body = JSON.stringify(e.message)
        response.statusCode = 500;
    }

    return response;
};
