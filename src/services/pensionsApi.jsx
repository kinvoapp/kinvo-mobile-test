import axios from 'axios';

/*
* Single responsibility principle the get method is almost the same, but 
* each feature has a function of making requests for only one endpoint
*/

const pension = async () => axios
  .get('https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/pension')
    .then((response) => response.data)
    .catch((err) => { err });


export { pension as getPension };