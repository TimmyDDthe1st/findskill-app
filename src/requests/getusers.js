import axios from 'axios';

const getUsers = (formData) => {
    if(!formData) {
        return Promise.resolve([]);
    } else {
        return axios
            .post('https://find-skill-api.herokuapp.com/users')
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export default getUsers;