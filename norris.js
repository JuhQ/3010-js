 async function asynchronousFunction() {                 // asynchronous function is defined by the async keyword
        console.log('asynchronous download begins');
        try {                                               // error handling: try/catch/finally
            const response = await fetch('https://api.chucknorris.io/jokes/random');    // starting data download, fetch returns a promise which contains an object of type 'response'
            const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
            console.log(response);    // log the result to the console
          console.log(jsonData)
          document.querySelector("h1").innerText = jsonData.value
        } catch (error) {
            console.log("our error message", error.message);
        } finally {                                         // finally = this is executed anyway, whether the execution was successful or not
            console.log('asynchronous load complete');
        }
    }

    asynchronousFunction()