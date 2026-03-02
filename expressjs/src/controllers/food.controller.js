import foodService from "../service/food.service.js";

const foodContoller = {
  async findAll(request, response, next) {
    const foodList = foodService.findAll();
    response.json(foodList);
  },
};

export default foodContoller;
