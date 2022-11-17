import { Component, OnInit } from '@angular/core';
import { filter, isEmpty } from 'rxjs';
import { Gas } from 'src/app/interfaces/gas.interface';
import { ProvinciasResponse } from 'src/app/interfaces/provincias.interface';
import { GasService } from 'src/app/servicios/gas-list.service';

@Component({
  selector: 'app-gast-list',
  templateUrl: './gast-list.component.html',
  styleUrls: ['./gast-list.component.css']
})
export class GastListComponent implements OnInit {

  gasList: Gas[] = [];
  gasListSelected: Gas[] = []
  gasEjemplo: Gas = {} as Gas
  maxPrice: number = 5;
  minPrice: number = 0;
  priceSelected: keyof typeof this.gasEjemplo = "Precio Gasolina 95 E5"
  provinciaList : ProvinciasResponse[] = [];
  listaNombres: String[] = [] //se rellena con los que he seleccionado en el html


  constructor(private gasService: GasService) { }

  ngOnInit(): void {
    this.gasService.getGas().subscribe(respuesta => {
      this.gasList = respuesta.ListaEESSPrecio;
      this.gasListSelected = respuesta.ListaEESSPrecio
    })
    this.gasService.getProvincias().subscribe(respuesta => {
     this.provinciaList= respuesta;
    })

  }


  filtrarPrecio() {
    this.gasListSelected = this.gasList.filter(gasolinera => Number(gasolinera[this.priceSelected].replace(",", ".")) < this.maxPrice && Number(gasolinera[this.priceSelected].replace(",", ".")) > this.minPrice &&
      gasolinera[this.priceSelected] != "")
     
      if (this.listaNombres.length != 0 ){
        this.gasListSelected = this.gasListSelected.filter(gasolinera => this.listaNombres.includes(gasolinera.IDProvincia))
        
      }
  

  }




}
