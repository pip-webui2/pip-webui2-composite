import { TestBed, inject } from '@angular/core/testing';

import { CompositeExampleComponent } from './document-example.component';

describe('a document-example component', () => {
	let component: CompositeExampleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CompositeExampleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CompositeExampleComponent], (CompositeExampleComponent) => {
		component = CompositeExampleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});