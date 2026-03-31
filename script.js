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

Transaction ID: ${result["Payment Transaction ID"]} <br>

Payment Collected: ${result["Payment Collected"]}
<p>
  Payment Collected: <span id="Payment Collected"></span>
</p>

<script>
  let value = "No"; // or "Yes"

  let el = document.getElementById("Payment Collected");
  el.textContent = value;
  el.style.color = (value === "Yes") ? "green" : "brown";
</script>
`;

}

else{

document.getElementById("result").innerHTML =
"Record not found";

}


}
