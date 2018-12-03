import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './testPrimeComponents/buttons/buttons.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

const routes: Routes = [
   {
    path: 'home',
    component: HomeComponent
  },


  {
    path: 'testbuttons',
    component: ButtonsComponent,
    data: { title: 'Sample Buttons using PrimeNG' }
  },

  {
    path: 'pagenotfound',
    component: PageNotFoundComponent,
    data: { title: 'Page Not Found' }
  },

  {
        path: '',
       redirectTo: '/home',
        pathMatch: 'full'
    },
    {
      path: '**',
      component: PageNotFoundComponent,
      data: { title: 'Page Not Found'}
    },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, enableTracing: false }) // enable tracing for debugging only!
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
