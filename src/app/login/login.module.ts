import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';


@NgModule({
    declarations: [ 
      LoginComponent
     
    ],
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      HttpModule,
      RouterModule
    ]
   
  })
  export class LoginModule { }