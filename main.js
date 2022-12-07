//an event occurs on a click of a button
(function() {
    //define server call on click of start button
    document.getElementById("start").onclick = function () {
        getClick("https://phoeben.sgedu.site/ngo.json");
    };

    //reset text on click of reset button
    document.getElementById("reset").onclick = function () {
        document.getElementById("status").innerText = "No Status";
        document.getElementById("result").innerText = "No JSON";
    }

    
})();


function getClick(url) {
        //Create a fetch request to return a promise
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
            }
        })//resolve promise using the response class
        .then((response) => {
            document.getElementById("status").innerText = response.status;
            console.log('Status: ', response.status);
            return response.json()})
        //check status code of response if successful
        .then((data) => {
            let resultText = '';
            for (let i = 0; i < data.degrees.length; i++) {
                resultText += (
                    "{ " + "School: " + data.degrees[i].school +
                    "Major: " + data.degrees[i].major +
                    "Type: " + data.degrees[i].type +
                    "Year Conferred: " + data.degrees[i].yearConferred  + "}, ");
            }
            document.getElementById("result").innerText = resultText;
            console.log('Success: ', resultText);
        })
        //check status code of response if unsuccessful
        .catch((error) => {
            console.error('Error: ', error);
        });
        
    }