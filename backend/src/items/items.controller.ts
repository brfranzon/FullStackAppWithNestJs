import { Controller, Get, Put, Delete, Post, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interfaces/item';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {

  constructor(private readonly itemsService: ItemsService){}

  @Get()
  findAllItems(): Item[] {
    return this.itemsService.findAllItems();
  }

  @Get(':id')
  findOneItem(@Param() param): Item{
    return this.itemsService.findOneItem(param.id)   
  }

  @Post()
  createItem(@Body() createItem: CreateItemDto): string {
    return this.itemsService.createItem(createItem);
  }

  @Delete(':id')
  deleteItem(@Param() param): string{
    return this.itemsService.deleteItem(param.id)
  }

  @Put(':id')
  updateItem(@Body() updateItem: CreateItemDto, @Param() param){
    return this.itemsService.updateItem(updateItem, param.id)
  }

}
