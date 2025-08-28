import { Injectable } from '@nestjs/common';
import { CreateTravelerDto } from './dto/create-traveler.dto';
import { UpdateTravelerDto } from './dto/update-traveler.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Traveler } from './entities/traveler.entity';

@Injectable()
export class TravelersService {
  constructor(
    private prisma: PrismaService
  ) {}

  create(Body : any) {
   return this.prisma.travelers.create({
    data: Body 
   })
  }

  findAll() {
    return this.prisma.travelers.findMany({
       orderBy: [{id_travelers:'asc'}]
  })

  }

  findOne(id: number) {
    return this.prisma.travelers.findFirst({
      where:{id_travelers:id}
    })
  }

  update(id: number,Body: any) {
       return this.prisma.travelers.update({
        where: {id_travelers: id},
        data: Body
       }); 
  }

  async remove(id: number) {
    await this.prisma.travelers.delete({
      where: {id_travelers: id}
    })
    return {
      "exito" : true,
      "mensaje" : "eliminado correctamente",
      "id" : id
    }
  }
}
