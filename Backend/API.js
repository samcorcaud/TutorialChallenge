/**
 * This class contains the Fetch api, with the post request and de get request.
 * It manage the connection with the Node.js server.
 */
export class API {

    /**
     * The getData function is used to manage the get request send to the Node server
     * If the API request take some time, the asynchronous function permit to pass to the next
     * function and come back later to manage the request.
     * @return dataFromServer, json object of the report
     */
    static async getData() {
        const url = 'http://cparkchallenge.herokuapp.com/report/:lat/:long';

        return await fetch(url)
            .then(dataFromServer => dataFromServer.json());
    }

    /**
     * The postData function is used to manage the post request send to the Node server
     * If the API request take some time, the asynchronous function permit to pass to the next
     * function and come back later to manage the request.
     * @param data, data on the post request to the server
     * @return server response
     */
    static async postData(data) {
        const url = 'http://cparkchallenge.herokuapp.com/report';
        return await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(dataFromServer => dataFromServer.json());

    }
}

