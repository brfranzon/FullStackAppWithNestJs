import mongoose  from 'mongoose';
export const ItemSchema = new mongoose.Schema({
  name: String,
  description: String, 
  qty: Number 
});

