import { statusCodes } from "../common/helpers/status-code.helper.js";
import { orderService } from "../service/order.service.js";

export const orderController = {
  async create(req, res, next) {
    try {
      const result = await orderService.create(req.body);

      res.status(statusCodes.CREATED).json({
        statusCode: statusCodes.CREATED,
        message: "Order thành công",
        content: result,
        dateTime: new Date(),
      });
    } catch (err) {
      next(err);
    }
  },
};
