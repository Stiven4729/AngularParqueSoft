import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputsRoutingModule } from './inputs-routing.module';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { BotonesComponent } from './components/botones/botones.component';
import { MaterialModule } from './components/material/material.module';
import { ObservableComponent } from './components/observable/observable.component';


@NgModule({
  declarations: [
    InputComponent,
    BotonesComponent,
    ObservableComponent
  ],
  imports: [
    CommonModule,
    InputsRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class InputsModule { }
