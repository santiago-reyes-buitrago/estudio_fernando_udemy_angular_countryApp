import {Routes} from '@angular/router';
import {ByCapitalPage} from './pages/by-capital-page/by-capital-page/by-capital-page';
import {CountryLayout} from './layout/country-layout/country-layout';

const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPage
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      }
    ]
  },
];

export default countryRoutes;
