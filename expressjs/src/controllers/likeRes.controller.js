import { statusCodes } from "../common/helpers/status-code.helper.js";
import likeResService from "../service/likeRes.service.js";

const likeResController = {
  async create(req, res, next) {
    try {
      const result = await likeResService.create(req.body);

      res.status(statusCodes.CREATED).json({
        statusCode: statusCodes.CREATED,
        message: "Like food thành công",
        content: result,
        dateTime: new Date(),
      });
    } catch (err) {
      next(err);
    }
  },
};

export default likeResController;
