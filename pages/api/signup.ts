// pages/api/signup.ts
import { PrismaClient } from '@prisma/client';

export default async (req:any, res:any) => {
  const prisma = new PrismaClient();

  try {
    const { email, senha } = req.body;

    const user = await prisma.user.create({
      data: {
        email,
        senha,
      },
    });

    res.status(200).json({ message: 'Usuário cadastrado com sucesso!', user });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar usuário' });
  } finally {
    await prisma.$disconnect();
  }
};
