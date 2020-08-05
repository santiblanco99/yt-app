import axios from "axios";

const KEY = "AIzaSyCUrUHHL6RjlzDUwycU6d8ayDXLHIssn6U";


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY
    }
});

