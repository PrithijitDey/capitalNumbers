import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRequestRoutingModule } from './user-request-routing.module';
import { BookACallComponent } from '../user-request/book-a-call/book-a-call.component';
import { AboutUsComponent } from '../user-request/about-us/about-us.component';
import { ServicesComponent } from '../user-request/services/services.component';
import { SkillsComponent } from '../user-request/skills/skills.component';
import { IndustriesComponent } from '../user-request/industries/industries.component';
import { CasestudiesComponent } from '../user-request/casestudies/casestudies.component';
import { HiringComponent } from '../user-request/hiring/hiring.component';
import { ContactUsComponent } from '../user-request/contact-us/contact-us.component';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [

    BookACallComponent,
    AboutUsComponent,
    ServicesComponent,
    SkillsComponent,
    IndustriesComponent,
    CasestudiesComponent,
    HiringComponent,
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    UserRequestRoutingModule,
    MatInputModule,
     MatFormFieldModule
  ]
})
export class UserRequestModule { }
