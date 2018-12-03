
export class API {
	static async getData() {
		const url = 'http://cparkchallenge.herokuapp.com/report/:lat/:long';

		return await fetch(url)
			.then(dataFromServer => dataFromServer.json());
	}

	static async postData(data) {
		const url = 'http://cparkchallenge.herokuapp.com/report';
		return await fetch(url, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then(dataFromServer => dataFromServer.json());

	}
}

