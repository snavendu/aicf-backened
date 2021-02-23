const Razorpay = require("razorpay");
const Transaction = require("./../models/Order");
const Contact = require("./../models/Contact");
const Product = require("./../models/product");
const moment = require("moment");
const shortid = require("shortid");
const RAZORPAY_KEY_ID = "rzp_test_hNtKQvpYRE730Z";
const RAZORPAY_SECRET = "kBrFjTWgJH20GZE2B0RJrXgZ";

const createOrder = async (req, res) => {
    const { id, player } = req.body;
    const pl = player.split(",");
    const p = await Product.query();
    let amount = 0;
    let Sp = "";
    pl.map((P) => {
        const sel = p.find((d) => d.product_name === P);
        amount += sel.amount;
        Sp += `${sel.id},`;
    });
    console.log(amount);
    // .where("product_name", "=", player[1]);
    console.log(p);
    try {
        const instance = new Razorpay({
            key_id: RAZORPAY_KEY_ID,
            key_secret: RAZORPAY_SECRET,
        });
        const receipt = `receipt_order_${shortid.generate()}`;
        const options = {
            amount: amount * 100, // amount in smallest currency unit
            currency: "INR",
            receipt,
        };
        const order = await instance.orders.create(options);

        await Transaction.query().insert({
            receipt_id: order.receipt,
            amount: amount,
            order_id: order.id,
            created_at: moment
                .unix(order.created_at)
                .format("YYYY-MM-DD hh:mm:ss[.nnn]"),
            contact_id: id,
            products: Sp,
        });
        console.log(order);
        if (!order) return res.status(500).send("Some error occured");
        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
};
const payOrder = async (req, res) => {
    const { payment_id, order_id } = req.body;
    const data = await Transaction.query()
        .update({ payment_id })
        .where("order_id", "=", order_id);
    res.send({ msg: "payment succesful" });
};
module.exports = { createOrder, payOrder };
