import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public routerLinks = [
    { path: 'buscar/paises', name: 'Buscar pais'},
    { path: 'buscar/capital', name: 'Buscar por Capital'},
    { path: 'buscar/region', name: 'Buscar por Region'},
]

constructor() { }

ngOnInit(): void {
}

}
