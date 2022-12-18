import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-guardar-cliente',
  templateUrl: './guardar-cliente.component.html',
  styleUrls: ['./guardar-cliente.component.css']
})
export class GuardarClienteComponent implements OnInit {
  cli:Cliente=new Cliente();

  constructor(private cliservi:ClienteService, private router:Router) { }

  ngOnInit(): void {
  }

  ejecutarguardarcliente(){
    this.cliservi.registrarCliente(this.cli).subscribe(dato=>{
      this.router.navigate(["/Listar"]);
      console.log(dato);
    }
    )
  }

   OnSubmit(){
    this.ejecutarguardarcliente();
  }

}
