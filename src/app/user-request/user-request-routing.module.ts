import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookACallComponent } from './book-a-call/book-a-call.component';
import { CasestudiesComponent } from './casestudies/casestudies.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HiringComponent } from './hiring/hiring.component';
import { IndustriesComponent } from './industries/industries.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
                        { path: 'aboutus', component: AboutUsComponent },
                        { path: 'bookacall', component: BookACallComponent },
                        { path: 'casestudies', component: CasestudiesComponent },
                        { path: 'contactus', component: ContactUsComponent },
                        { path: 'hiring', component: HiringComponent },
                        { path: 'industries', component: IndustriesComponent },
                        { path: 'services', component: ServicesComponent },
                        { path: 'skills', component: SkillsComponent },
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRequestRoutingModule { }
