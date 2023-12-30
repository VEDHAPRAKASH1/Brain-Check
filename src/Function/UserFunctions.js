import axios from "axios";

const fetchData = async () =>{
    return (await axios.get('http://localhost:3001/users')).data;
}

const loginUser = async (user) => {
    let response = await fetchData();
    return true;
}

const signUpUser = async (user) => {
    axios.post('http://localhost:3001/users',user);
    return true;
}

export {loginUser,signUpUser};