import express from "express";
import connection from "../database/database.js";

export async function transactionsCreate(
  req: express.Request,
  res: express.Response,
  locals: express.Response["locals"]
) {
  console.log(locals);
  const {
    value,
    description,
    paymentMethod,
    cardNumber,
    cardName,
    cardValidity,
    cardVerificationCode,
  } = locals;
  console.log(value);
  try {
    await connection.query(
      'INSERT INTO transactions (value, description, "paymentMethod", "cardNumber", "cardName", "cardValidity", "cardVerificationCode") VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [
        value,
        description,
        paymentMethod,
        cardNumber,
        cardName,
        cardValidity,
        cardVerificationCode,
      ]
    );
    res.send(201);
  } catch (err) {
    res.status(500).send(err);
  }
}
