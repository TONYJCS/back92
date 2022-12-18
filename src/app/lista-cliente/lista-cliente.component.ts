import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent {
  listaCliente:Cliente[];
  constructor(private cliservi:ClienteService, private router:Router) {
    
   }
   ngOnInit(): void {
    this.ejecutarServicioObtener();   
  }
  private ejecutarServicioObtener (){
    this.cliservi.obtenerCliente().subscribe(listacliente2 =>{
      this.listaCliente=listacliente2;
    }
    )
  }
   actualizarCliente(idcliente:number){
    this.router.navigate(["./Modificar",idcliente]); 
  }

  eliminarCliente(idcliente:number){
    this.cliservi.eliminarCliente(idcliente).subscribe(dato=>{
      this.ejecutarServicioObtener(); 
    });
    
}


}
