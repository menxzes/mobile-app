import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "segredo123";

export const registerUser = async (email, password) => {
  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email, password: hashed },
  });
  return { id: user.id, email: user.email };
};

export const loginUser = async (email, password) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("Credenciais inválidas");

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error("Credenciais inválidas");

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1d" });
  return { token };
};
