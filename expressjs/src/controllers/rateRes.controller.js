import { statusCodes } from "../common/helpers/status-code.helper.js";
import { rateResService } from "../service/rateRes.service.js";

export const rateResController = {
  async create(req, res, next) {
    try {
      const result = await rateResService.create(req.body);

      res.status(statusCodes.CREATED).json({
        statusCode: statusCodes.CREATED,
        message: "Rate food thành công",
        content: result,
        dateTime: new Date(),
      });
    } catch (err) {
      next(err);
    }
  },
};
