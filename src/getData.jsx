import axios from "axios";

const GetData = async (userID) => {

    if (userID === NaN) {
        console.error('User ID not a number!')
        return;
    }

    const { data: users } = await axios(`https://jsonplaceholder.typicode.com/users/${userID}`);

    const { data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`);
    
    return {...users, posts: posts};
}

export default GetData;