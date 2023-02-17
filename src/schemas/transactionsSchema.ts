import joi from "joi";

export const transactionsSchema = joi.object({
  value: joi.number().integer().positive().required(),
  description: joi.string().required(),
  paymentMethod: joi.string().valid("debitCard", "creditCard").required(),
  cardNumber: joi
    .string()
    .min(15)
    .max(16)
    .pattern(/^[0-9]+$/)
    .required(),
  cardName: joi
    .string()
    .max(45)
    .pattern(/^[A-Z ]+$/)
    .required(),
  cardValidity: joi
    .string()
    .pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    .required(),
  cardVerificationCode: joi
    .string()
    .length(3)
    .pattern(/^[0-9]+$/)
    .required(),
});
