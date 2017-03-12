import System from 'systemjs';
import { Router } from 'express';

export default () => {
		let routes = Router();

		// Imports your routes from base project
		System.import('../../routes')
			
			.then(importedRoutes => {
		    	routes = importedRoutes;
			 })

			.catch(error => {
		    	console.log('Warning no routes found.');

				routes.get('/', (req, res) => {
					res.send('Server OK, but no routes loaded.');
				});
		});

		return routes
}
