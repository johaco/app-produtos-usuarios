import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../../shared/service/usuario-service.service';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private UsuarioServiceService: UsuarioServiceService) {} 

  ngOnInit(): void {
    this.UsuarioServiceService.getUsuarios().subscribe(usuariosObs => {
      console.log(usuariosObs);
      this.usuarios = usuariosObs;
    });
  }
}
