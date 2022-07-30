const client = sessionStorage.getItem('userName');
const url = 'https://pffm.azurewebsites.net/'
const query = {
    form: 'liabilityRelease',
    user: client
}
fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(query)
})
  .then(response => response.json())
  .then(data => populatePage(data))    
    //.then(data => )
    //.catch(err => showErrorMsg(err))

//Populate the portal
async function populatePage(data) {
    document.getElementById('clientName').innerHTML = data.clientName;
    document.getElementById('caregiverName').innerHTML = data.caregiverName;
    document.getElementById('address').innerHTML = data.address;
    
    //more to come as we get more data
    
}

//Turns off animation and shows the page with data fields completed

//Turns off animation and shows error message
function showErrorMsg(err) {
    document.getElementById('errorMessage').innerHTML = `There was and error: ${err} when retrieving the data`
    document.getElementById('errorMessageSection').style.display = "block"
}

const printToPDF = document.getElementById('printToPDF')
printToPDF.addEventListener('click', (e) => {
    //add in a function to print to PDF
})