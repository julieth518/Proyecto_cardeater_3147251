import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TravelersService } from './travelers.service';
import { CreateTravelerDto } from './dto/create-traveler.dto';
import { UpdateTravelerDto } from './dto/update-traveler.dto';

@Controller('travelers')
export class TravelersController {
  constructor(private readonly travelersService: TravelersService) {}

  @Post()
  create(@Body() Body : any) {
    return this.travelersService.create(Body)
  }

  @Get()
  findAll() {
    return this.travelersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.travelersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, 
  @Body() Body:any) {
    return {
      "exito" : true,
      "mensaje" : "actualizado correctamente",
      "id" : id,
      "data" : this.travelersService.update(+id,Body)
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.travelersService.remove(+id);
  }
}
