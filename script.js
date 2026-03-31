async function searchCNIC() {

let input = document.getElementById("search").value;

let response = await fetch("database.json");
let data = await response.json();

let result = data.find(r => r.CNIC == input);

if(result){

document.getElementById("result").innerHTML =
`
Name: ${result.Name} <br>

CNIC: ${result.CNIC} <br>

Transaction: ${result["Payment Transaction ID"]}<br>

Payment Collected: ${result["Payment Collected"]}
`;

}

else{

document.getElementById("result").innerHTML =
"Record not found";

}


}
