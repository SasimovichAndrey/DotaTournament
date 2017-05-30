import { Component, OnInit } from '@angular/core';
import { ValuesService } from './services/values.service';

@Component({
  selector: 'my-app',
  templateUrl: './templates/app.component.html',
  providers: [ValuesService]
})

export class AppComponent implements OnInit  {
	name = 'Angular';
	values: string[];

	constructor(private valuesService: ValuesService){
		this.values = ['123', '4646'];
	}

	ngOnInit(): void{
		this.valuesService.getValues()
			.then(values => {
				this.values = values;
			});
	}
}
