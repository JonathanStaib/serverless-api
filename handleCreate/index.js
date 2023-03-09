const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
    "id": String,
    "name": String
});

const peopleModel = dynamoose.model('people', peopleSchema)

exports.handler = async(event) => {
    
    let parsedBody = JSON.parse(event.body)
    console.log('parsed Body', parsedBody);
    
    
    const response = {
        statusCode: null,
        body: null
    }
    
    try{
        
        let newPeople = await peopleModel.create(parsedBody);
        response.body = JSON.stringify(newPeople);
        response.statusCode = 200;
        
    }catch(e){
        
        response.Body = JSON.stringify(e.message)
        response.statusCode = 500;
        
    }

    return response;
};