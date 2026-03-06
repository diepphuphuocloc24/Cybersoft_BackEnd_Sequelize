import { statusCodes } from "../common/helpers/status-code.helper.js";
import { rateResService } from "../service/rateRes.service.js";

export const rateResController = {
  async create(req, res, next) {
    try {
      const result = await rateResService.create(req.body);

      res.status(statusCodes.CREATED).json({
        statusCode: statusCodes.CREATED,
        content: result,
        dateTime: new Date(),
      });
    } catch (err) {
      next(err);
    }
  },

  async findAll(req, res, next) {
    try {
      const result = await rateResService.findAll(req);

      res.status(statusCodes.OK).json({
        statusCode: statusCodes.OK,
        content: result,
        dateTime: new Date(),
      });
    } catch (err) {
      next(err);
    }
  },
};
