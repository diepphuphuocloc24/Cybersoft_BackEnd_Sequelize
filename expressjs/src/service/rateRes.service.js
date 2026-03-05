import { prisma } from "../common/prisma/connect.prisma.js";

export const rateResService = {
  async create(data) {
    const { user_id, res_id } = data;
    const rate = await prisma.rate_res.create({
      data: {
        user_id,
        res_id,
      },
    });

    return rate;
  },
};
