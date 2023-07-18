import { ObservableService } from './../../services/observable.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit{

  fecha = new Date(1990,3,15);

  public time = this.ObservableService.time;

  constructor(private ObservableService: ObservableService) { }

  ngOnInit(): void {
  }

}
