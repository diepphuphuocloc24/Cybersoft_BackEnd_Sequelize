import { prisma } from "../common/prisma/connect.prisma.js";

prisma;

const foodService = {
  async findAll() {
    const resultPrisma = await prisma.food.findMany();
    return resultPrisma;
  },
};
export default foodService;
