import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';


@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})
export class ModificarClienteComponent implements OnInit {
  id:number;
  cli:Cliente = new Cliente();
  constructor(private cliservi:ClienteService, private route:Router, private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.routes.snapshot.params['id'];
    this.cliservi.obtenerClienteUnico(this.id).subscribe(dato =>{
      this.cli = dato; 
    })
  }

  irListaCliente(){
    this.route.navigate(['./Listar'])
  }

 

  OnSubmit(){
    this.cliservi.actualizarCliente(this.id,this.cli).subscribe(dato =>{
      this.irListaCliente();  

    })
  
  }
}
