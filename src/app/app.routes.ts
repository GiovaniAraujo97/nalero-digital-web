import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/home/home').then((component) => component.Home),
		title: 'Nalero Digital | Marcas, websites e performance',
	},
	{ path: '**', redirectTo: '' },
];
