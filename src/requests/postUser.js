import axios from 'axios';

const postUser = (formData) => {
    if(!formData) {
        return Promise.resolve([]);
    } else {
        return axios
            .post('https://find-skill-api.herokuapp.com/users', {
                "name": formData[0],
                "skill": formData[1],
                "postcode": formData[2],
                "description": formData[3],
                "free": formData[4],
                "professional": formData[5],
                "email": formData[6]
            })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export default postUser;