import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header.component';
import { SobreComponent } from '../sobre/sobre.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { HelpesComponent } from '../helpes/helpes.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ComComponent } from '../com/com.component';

const routes: Routes = [{
  path: '', component: HeaderComponent,
  children: [
    { path: '', redirectTo: 'sobre', pathMatch: 'full' },
    { path: 'sobre', component: SobreComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: "help", component: HelpesComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'com', component: ComComponent }
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
