import { prisma } from "../common/prisma/connect.prisma.js";

const likeResService = {
  async create(data) {
    const { user_id, res_id } = data;

    const exist = await prisma.like_res.findFirst({
      where: {
        user_id: user_id,
        res_id: res_id,
      },
    });

    if (exist) {
      const updated = await prisma.like_res.update({
        where: {
          id: exist.id,
        },
        data: {
          isLike: !exist.isLike,
        },
      });

      return updated;
    }

    const like = await prisma.like_res.create({
      data: {
        user_id,
        res_id,
      },
    });

    return like;
  },

  async findAll(req) {
    const { user_id, res_id } = req.query;

    const where = {};

    if (user_id) {
      where.user_id = Number(user_id);
    }

    if (res_id) {
      where.res_id = Number(res_id);
    }

    const likes = await prisma.like_res.findMany({
      where,
    });

    return likes;
  },
};

export default likeResService;
