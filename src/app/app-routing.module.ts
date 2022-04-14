import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [{ path: 'homepage', component: HomepageComponent },
{ path: "user",loadChildren:()=> import('./user-request/user-request.module')
      .then(mod=>mod.UserRequestModule),
    },
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
