var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import connection from "../database/database.js";
export function transactionsCreate(req, res, locals) {
    return __awaiter(this, void 0, void 0, function* () {
        const { value, description, paymentMethod, cardNumber, cardName, cardValidity, cardVerificationCode, } = locals;
        console.log(value);
        try {
            yield connection.query('INSERT INTO transactions (value, description, "paymentMethod", "cardNumber", "cardName", "cardValidity", "cardVerificationCode") VALUES ($1, $2, $3, $4, $5, $6, $7)', [
                value,
                description,
                paymentMethod,
                cardNumber,
                cardName,
                cardValidity,
                cardVerificationCode,
            ]);
            res.send(201);
        }
        catch (err) {
            res.status(500).send(err);
        }
    });
}
