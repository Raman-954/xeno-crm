const mongoose = require('mongoose');
const Customer = require('../models/Customer');
const Product = require('../models/Product');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const seed = async () => {
  try {
    // Agar .env se nahi mila toh direct string use karega
    const uri = process.env.MONGO_URI || "mongodb+srv://raman251:AAPKA_PASSWORD@cluster0.g8ahb8c.mongodb.net/XenoCRM?retryWrites=true&w=majority";
    
    console.log("Connecting to:", uri.includes("undefined") ? "Error: URI missing" : "MongoDB Atlas...");
    
    await mongoose.connect(uri);
    
    // Purana data saaf karein
    await Customer.deleteMany({});
    await Product.deleteMany({});

    // Sample Products
    await Product.create([
      { name: 'Xeno Shoes V1', category: 'xeno Shoes', price: 100, stock: 50 },
      { name: 'Hover Board', category: 'Hover Devices', price: 1200, stock: 20 },
      { name: 'Smart Watch', category: 'Smart Wearables', price: 250, stock: 100 }
    ]);
    
    // Sample Customers
    const customers = [];
    for(let i=0; i<10; i++) {
      customers.push({ 
        name: `User ${i}`, 
        email: `user${i}@xeno.com`, 
        totalSpend: i * 150,
        purchaseCount: i,
        preferredChannel: 'Email'
      });
    }
    await Customer.insertMany(customers);
    
    console.log("✅ Database Seeded Successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
  }
};

seed();