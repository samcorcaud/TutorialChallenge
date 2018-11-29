
export class API {
	static async getData() {
		const url = 'mongodb://localhost:28017/report/:lat/:long';

		return await fetch(url)
			.then(dataFromServer => dataFromServer.json());
	}

	static async postData(data) {
		const url = 'http://192.168.43.183:28017/report';
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

