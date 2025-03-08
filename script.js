function generateAuthenticationID(email,studentCode) {
    let username = email.split("@")[0];
    


    let combinedString = studentCode + username;


     combinedString = combinedString.toLowerCase();

     combinedString = combinedString.replace(/[aeiou]/g,'');

     let numbers = combinedString.match(/\d/g) || [];
     let filteredNumbers = numbers.filter(num => ![2,3,5,7].includes(Number(num)));

     if(filteredNumbers.length === 0){

        combinedString += '1';
     }
     else{
        combinedString = combinedString.replace(/\d/g,match => 
            filteredNumbers.includes(match) ? match : '');
     }

     let newString = "";
     for(var i = 0; i < combinedString.length; i += 2){
        newString += combinedString[i];
     }


     const charMap = {};
     for(let i = 0; i < 26; i++){
        charMap[String.fromCharCode(97 + i)] = i + 1;
     }


     const specialCharValue = 27;
     const numberValue = 28;

     let finalID = "";
     for(let char of newString){
        if(char.match(/a-z/)){
            finalID += charMap[char];


        }
        else if(char.match(/\d/)){
            finalID += numberValue;
        }
        else{
            finalID += specialCharValue;
        }
     }
     console.log("Final AuthenticationID:", finalID);
}


const email = "rroy854100@gmail.com";
const studentCode = "fs39_32144";
generateAuthenticationID(email,studentCode);