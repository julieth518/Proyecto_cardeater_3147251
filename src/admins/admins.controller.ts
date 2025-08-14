import { Controller, Get, Post, Delete, Patch, Param } from '@nestjs/common';
import path from 'path';


@Controller('admins')
export class AdminsController {

  //endpoint:
  //destino de la request 
  //se escribe como una funcion
  //en una clase controlador 


  @Get()
  consultarAdmins(): string {
    return "aqui se podra consultar todos los admins"
  }

  @Get(':id')
  consultarAdminsPorid(@Param('id') id:string): string {
    return `aqui se podra consultar el admin con id ${id}`;
  }

  @Patch(':id')
  actualizarAdminsPor(@Param('id') id:string): string {
    return `aqui se podra actualizar el admin con id ${id}`;
  }

  @Delete(':id')
  eliminarAdminsPorid(@Param('id') id:string): string {
    return `aqui se podra eliminar el admin con id ${id}`;
  }

  @Post()
  crearAdmins(): string {
    return "aqui se podra crear un admin";
  }

  @Patch()
  actualizarAdmins(): string {
    return "aqui se podra actualizar admin";
  }

  @Delete()
  eliminarAdmins(): string {
    return "aqui se podra eliminar un admin";
  }

}


