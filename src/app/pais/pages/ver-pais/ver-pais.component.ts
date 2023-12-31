import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { subscribeOn, switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  public country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        /*obtiene un observable y retorna otro observabl, en este caso
          obtiene el parametro, lo desesctructura para sacar el id y
          llama al metodo buscar pais que regresa otro observable
        */
        switchMap(({ id }) => this.paisService.viewCountry(id))
      )
      .subscribe((country) => {
        if (country == null) return this.router.navigateByUrl('');
        return (this.country = country);
      });
  }
}
