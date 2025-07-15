import {Routes} from '@angular/router';
import {ByCapitalPage} from './pages/by-capital-page/by-capital-page';
import {CountryLayout} from './layout/country-layout/country-layout';
import {ByCountryPage} from './pages/by-country-page/by-country-page';
import {ByRegionPage} from './pages/by-region/by-region';
import {CountryPage} from './pages/country-page/country-page';

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
        path: 'by-country',
        component: ByCountryPage
      },
      {
        path: 'by-region',
        component: ByRegionPage
      },
      {
        path: 'by/:code',
        component: CountryPage
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      }
    ]
  },
];

export default countryRoutes;
