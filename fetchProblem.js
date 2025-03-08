import fetch from "node-fetch";

const authenticationId = "2728282827282828".trim();

const url = `https://questionmapping.onrender.com/api/problem/${authenticationId}`;

async function fetchProblemStatement(){
    try {
        const response = await 
        fetch(url);
        const data = await 
        response.json();
        console.log("Next Problem Statement:", data);
    } catch(error){
        console.error("Error:",error);
    }
}
fetchProblemStatement();