var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { transactionsSchema } from "../schemas/transactionsSchema.js";
export function transactionsValidation(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const { error } = transactionsSchema.validate(body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        const locals = res.locals;
        locals.value = body.value;
        locals.description = body.description;
        locals.paymentMethod = body.paymentMethod;
        locals.cardNumber = body.cardNumber;
        locals.cardName = body.cardName;
        locals.cardValidity = body.cardValidity;
        locals.cardVerificationCode = body.cardVerificationCode;
        next();
    });
}
