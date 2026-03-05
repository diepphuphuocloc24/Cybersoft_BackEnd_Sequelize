import { prisma } from "../common/prisma/connect.prisma.js";

const likeResService = {
  async create(data) {
    const { user_id, res_id } = data;
    const like = await prisma.like_res.create({
      data: {
        user_id,
        res_id,
      },
    });

    return like;
  },
};

export default likeResService;
