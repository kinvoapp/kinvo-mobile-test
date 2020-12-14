import axios from 'axios';

/*
* Single responsibility principle the get method is the same, but 
* each feature has a function of making requests for only one endpoint
*/

const funds = async () => axios
  .get('https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/funds')
    .then((response) => response.data)
    .catch((err) => { err });


export { funds as getFunds };
