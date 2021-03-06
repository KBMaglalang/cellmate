import { client } from "../../lib/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await Promise.all(
        req.body.map(async (product) => {
          await client
            .patch(product._id)
            .dec({ stock: product.quantity })
            .commit();
        })
      );

      res.status(200).json({});
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
