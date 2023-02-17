import express from "express";
import { transactionsCreate } from "../controllers/transactionsControllers.js";
import { transactionsSchema } from "../schemas/transactionsSchema.js";

interface TransactionsLocals {
  value: number;
  description: string;
  paymentMethod: string;
  cardNumber: string;
  cardName: string;
  cardValidity: string;
  cardVerificationCode: string;
}

export async function transactionsValidation(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const body = req.body;
  const { error } = transactionsSchema.validate(body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const locals = res.locals as TransactionsLocals;
  locals.value = body.value;
  locals.description = body.description;
  locals.paymentMethod = body.paymentMethod;
  locals.cardNumber = body.cardNumber;
  locals.cardName = body.cardName;
  locals.cardValidity = body.cardValidity;
  locals.cardVerificationCode = body.cardVerificationCode;
  next();
}
