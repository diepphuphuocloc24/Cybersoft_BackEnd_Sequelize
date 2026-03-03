import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "./generated/prisma/index.js";
import DATABASE_URL from "../constant/app.constant.js";

const url = new URL(DATABASE_URL);

const adapter = new PrismaMariaDb({
  host: url.hostname,
  user: url.username,
  password: url.password,
  database: url.pathname.substring(1),
  port: Number(url.port),
  connectionLimit: 5,
});

const prisma = new PrismaClient({ adapter });

// ✅ Hàm kiểm tra kết nối
try {
  console.log("✅ Kết nối database bằng Prisma thành công!");
} catch (error) {
  console.error("❌ Kết nối database thất bại!");
  console.error("Chi tiết lỗi:", error.message);
  process.exit(1); // Dừng server nếu kết nối thất bại
}

export { prisma };
