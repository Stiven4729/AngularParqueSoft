import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, OnDestroy{

  constructor(private router: Router){}


  ngOnDestroy(): void {
    console.log("Me he destruido")
  }
  ngOnInit(): void {
    console.log("Me he iniciado")
  }

  nombre: string = '';

  salir() {
    console.log("Saliendo...")
    this.router.navigate(['/botones'])
  }
}
