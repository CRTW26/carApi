## Car API ##

### About ### 
This is a simple API that allows users to Get, Post and Delete data about cars. 

### How to use ###
 - Clone this repo.  
 - Navigate to inside the repo and run the following commands:
 ```
 npm install  
 npm run dev  
 ```
  - You can then make GET, POST and DELETE requests to the API using the url:  
  http://localhost:3000

  The API supports the following endpoints: 
  ```
  GET /cars
  GET /car/:id
  POST /cars
  DELETE /car/:id
  ```

**Making Requests**  
To make requests to the API when running the development server I used Postman. This made making POST requests easier as I was able to set the body of the request to JSON and send data in the following format: 
```
{
  "id": 1,
  "make": "ford",
  "model": "fiesta",
  "buildDate": "02/05/2021",
  "colourID": 2
}
```

### Testing ###
To run the test suite, navigate to inside the directory and run the following command:   
``` 
npm run test 
```

### Technologies ###
 - Node with Express 
 - Jest for testing 

### Improvements ###
These are the improvements I would make to the API with more time:
  - Set up a database instead of reading and writing to a JSON file.
  - Add validation to POST requests to ensure that ID is unique.
  - Add validation to ensure that all fields data is present when a POST request is made.
