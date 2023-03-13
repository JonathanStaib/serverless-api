# LAB - Class 18

## Project: Serverless API

### Author: Jonathan Staib

### Problem Domain

Build a dynamo table and use CRUD functionality properly on the table through API Gateway

### Links and Resources

- [Deployed Site but it is saying forbidden](https://buksiyork5.execute-api.us-east-1.amazonaws.com/people18/people)

- I watched back Class Lecture
- [dynamoose docs](https://dynamoosejs.com/getting_started/Introduction)

- Ryan Gallaway

### Setup

#### `.env` requirements (where applicable)

#### How to initialize/run your application (where applicable)


#### How to use your library (where applicable)

#### Features / Routes

/people with full crud functionality
on api gateway if you use get it will return all objects
on api gateway if you use get/id it will return the object at that id
on api gateway if you use put it and create an object it will return you the new object created
on api gateway if you use delete/id it will return the id number
on api gateway if you use put/id and change the name in the object it will return you the new object

these can be done as well on thunderclient with the /people route and people/id when needed to be applied. :) all should be fully functional. Hope this is a enough information for the routes.

#### Tests

- How do you run tests?

through API Gateway

#### UML

![](UML.Png)