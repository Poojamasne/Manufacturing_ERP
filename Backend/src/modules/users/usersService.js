import bcrypt from "bcryptjs";
import * as usersRepository from "./usersRepository.js";

export const createUser = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  data.password = hashedPassword;

  const userId = await usersRepository.createUser(data);
  return { message: "User created successfully", userId };
};

export const getUsers = async () => {
  return await usersRepository.getUsers();
};

export const updateUser = async (id, data) => {
  await usersRepository.updateUser(id, data);
  return { message: "User updated successfully", userId: id };
};

export const deleteUser = async (id) => {
  await usersRepository.deleteUser(id);
  return { message: "User deleted successfully", userId: id };
};