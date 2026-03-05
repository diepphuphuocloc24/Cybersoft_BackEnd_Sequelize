import { prisma } from "../common/prisma/connect.prisma.js";

export const orderService = {
  async create(data) {
    const { user_id, food_id, amount, code, arr_sub_id } = data;

    const order = await prisma.order.create({
      data: {
        user_id,
        food_id,
        amount,
        code,
        arr_sub_id,
      },
    });

    return order;
  },
};
