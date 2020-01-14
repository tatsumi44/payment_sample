const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')('sk_test_XrvZD6ptG5ur3Y5ujK4nD4i700w7Tywnrl');
admin.initializeApp();

exports.checkout = functions.https.onRequest(async (req, res) => {

  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type, authorization');
  console.log("--------------------");
  console.log(req.body.token);
  let token = req.body.token
  try {
    const charge = await stripe.charges.create({
      amount: req.body.price,
      currency: 'jpy',
      description: req.body.name,
      source: token,
    });
    res.send({
      status: "success",
      code: charge
    });
  } catch (err) {
    console.log(err.message);
    res.send({
      status: "error",
      error: err.message
    });
  }
  console.log("--------------------");

});
