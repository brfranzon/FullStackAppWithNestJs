import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interfaces/item';


@Injectable()
export class ItemsService {

  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>){}

  async findAllItems(): Promise<Item[]>{
    return await this.itemModel.find()
  }

  async findOneItem(itemId: string): Promise<Item>{
    return await this.itemModel.findOne({_id: itemId})
  }

  async createItem(item: Item):Promise<Item>{
    console.log(item);
    const newItem =  new this.itemModel(item);
    return await newItem.save()
  }

  async deleteItem(itemId: string): Promise<Item>{
     return  await this.itemModel.findByIdAndRemove(itemId)
  }

  async updateItem( itemId: string, updatedItem: Item): Promise<Item>{
    return await this.itemModel.findByIdAndUpdate(itemId, updatedItem, {new: true})
  }

}
