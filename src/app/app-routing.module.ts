import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './testPrimeComponents/buttons/buttons.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'testbuttons',
        component: ButtonsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
