import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { BotonesComponent } from './components/botones/botones.component';

const routes: Routes = [
  {
  path: 'inputs',
  component: InputComponent
},
{
  path: 'botones',
  component: BotonesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputsRoutingModule { }
