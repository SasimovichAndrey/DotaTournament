import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ValuesService{
	constructor(private http: Http){

	}

	private baseApiUrl = 'http://localhost:33416/api';

	getValues(): Promise<string[]> {
		const url = `${this.baseApiUrl}/values/`;
		return this.http.get(url)
			.toPromise()
			.then(response => {
				return response.json();
			});
	};
}