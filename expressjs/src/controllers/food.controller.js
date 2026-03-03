import { statusCodes } from "../common/helpers/status-code.helper.js";
import foodService from "../service/food.service.js";

const foodContoller = {
  async findAll(request, response, next) {
    const foodList = await foodService.findAll();
    response.json({
      statusCode: statusCodes.OK,
      content: foodList,
      dateTime: new Date().toISOString(),
    });
  },

  async create(request, response, next) {},
};

export default foodContoller;
