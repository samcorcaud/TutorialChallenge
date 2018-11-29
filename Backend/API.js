
export default class API{

    static async getData(){
        let url = "mongodb://localhost:27017/report/:lat/:long";

        return await fetch(url)
            .then((dataFromServer) => dataFromServer.json())

    }

    static async postData(data){
        let url = "mongodb://localhost:27017/report"
        return await fetch(url, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((dataFromServer) => dataFromServer.json())
    }
}