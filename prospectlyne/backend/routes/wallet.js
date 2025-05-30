// routes/wallet.js
const express = require('express');
const router = express.Router();
const Wallet = require('../models/Wallet');

router.get('/get-wallet', async (req, res) => {
  try {
    const wallet = await Wallet.findOne(); 
    res.status(200).json({ balance: wallet.balance });
  } catch (err) {
    console.error("Error fetching wallet:", err);
    res.status(500).json({ message: "Failed to fetch wallet balance." });
  }
});


router.put('/wallet/deduct', async (req, res) => {
  const fee = 10; 
  try {
    const wallet = await Wallet.findOne();
    
    if (wallet.balance < fee) {
      return res.status(400).json({ message: "Insufficient balance in wallet." });
    }
    wallet.balance -= fee;
    await wallet.save();

    res.status(200).json({ message: "Fee deducted successfully.", balance: wallet.balance });
  } catch (err) {
    console.error("Error updating wallet:", err);
    res.status(500).json({ message: "Failed to deduct fee from wallet." });
  }
});

module.exports = router;
