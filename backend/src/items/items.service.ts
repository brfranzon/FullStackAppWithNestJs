import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interfaces/item';


@Injectable()
export class ItemsService {

  private readonly items: Item[]  = [
  {
    id: '1',
    name: 'Bruno',
    description: 'Test',
    qty: 13
  },
  {
    id: '2',
    name: 'Sven',
    description: 'Klavier...',
    qty: 13
  },

]
  
  findAllItems(): Item[] {
    return this.items
  }

  findOneItem(itemId: string): Item{
    return this.findAllItems().find(item => item.id === itemId)
  }

  createItem(item: CreateItemDto): string{
    return 'created item';
  }

  deleteItem(itemId: string){
     return `Deleted Item with ID ${itemId}`
  }

  updateItem(updatedItem: CreateItemDto, itemId: string){
    return `Updated Item with ID ${itemId} - ${updatedItem.name}`
  }

}
