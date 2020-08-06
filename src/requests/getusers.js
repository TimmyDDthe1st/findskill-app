import axios from 'axios';

const getUsers = () => {
    return axios
        .get('https://find-skill-api.herokuapp.com/users')
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

export default getUsers;