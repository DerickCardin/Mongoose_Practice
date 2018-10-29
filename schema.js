const mongoose = require('mongoose');
const id = mongoose.Types.ObjectId();
const Schema = mongoose.Schema;

const StockSchema = new Schema ({
   stock_name: [String],
   price: [Number],
   shares: [Number],
    stock_id: [id],
    stock_purchase_date: {type: Date, defualt: Date.now},
    competitor_stocks: [String, Number]
});




