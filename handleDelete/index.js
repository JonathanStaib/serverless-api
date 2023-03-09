const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
    "id": String,
    "name": String
});

const peopleModel = dynamoose.model('people', peopleSchema)


exports.handler = async(event) => {
    
    const id = event?.pathParameters?.id;
    console.log(event);
    // const deletedPerson = peopleModel.get(id);
    
    // let parsedBody = JSON.parse(event.body)
    // console.log('parsed ID', parsedBody);
    
    
    const response = {
        statusCode: null,
        body: null
    }
    
    try{
        
        let deletedPeople = await peopleModel.delete(id);
        response.body = `person at id ${id} has been deleted`;
        response.statusCode = 200;
        
    }catch(e){
        
        response.Body = JSON.stringify(e.message)
        response.statusCode = 500;
        
    }

    return response;
};