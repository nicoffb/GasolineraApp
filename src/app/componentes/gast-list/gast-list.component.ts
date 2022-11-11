import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Gas } from 'src/app/interfaces/gas.interface';
import { GasService } from 'src/app/servicios/gas-list.service';

@Component({
  selector: 'app-gast-list',
  templateUrl: './gast-list.component.html',
  styleUrls: ['./gast-list.component.css']
})
export class GastListComponent implements OnInit {

  gasList : Gas[] = [];
  gasListSelected: Gas[] = []
  maxPrice: number = 5;
  minPrice:number = 0;

  constructor(private gasService : GasService) { }

  ngOnInit(): void {
    this.gasService.getGas().subscribe(respuesta => {
      this.gasList = respuesta.ListaEESSPrecio;
    })
    

   /*  getFiltrados (){
      filter
    }
 */
  }

}
