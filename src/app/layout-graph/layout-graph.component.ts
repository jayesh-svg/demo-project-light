import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './layout-graph.component.html',
  styleUrls: ['./layout-graph.component.css']
})
export class GraphLayoutComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

  private map = new Map<string, string[]>([
    ['Poland', ['Warszawa', 'Krakow']],
    ['USA', ['New York', 'Austin']],
    ['India', ['Maharashtra', 'Chattisghar']],
  ])

  private map1 = new Map<string, string[]>([
    ['Maharashtra', ['Pune', 'Nagpur']],
    ['Chattisghar', ['Durg', 'Raipur']],
   
  ])
  country: string;
  city: string;
  area: string;

  get countries(): string[] {
    return Array.from(this.map.keys());
  }

  get cities(): string[] | undefined {
    return this.map.get(this.country);
  }
  get areas(): string[] | undefined {
    return this.map1.get(this.city);
  }
}
