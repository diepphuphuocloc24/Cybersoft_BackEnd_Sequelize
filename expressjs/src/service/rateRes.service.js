import { prisma } from "../common/prisma/connect.prisma.js";

export const rateResService = {
  async create(data) {
    const { user_id, res_id } = data;
    const exist = await prisma.rate_res.findFirst({
      where: {
        user_id: user_id,
        res_id: res_id,
      },
    });

    if (exist) {
      const updated = await prisma.rate_res.update({
        where: {
          id: exist.id,
        },
        data: {
          isRated: !exist.isRated,
        },
      });

      return updated;
    }

    const rate = await prisma.rate_res.create({
      data: {
        user_id,
        res_id,
      },
    });

    return rate;
  },

  async findAll(req) {
    const rates = await prisma.rate_res.findMany();

    return rates;
  },
};
