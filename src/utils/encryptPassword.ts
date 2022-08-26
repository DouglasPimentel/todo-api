import bcrypt from "bcrypt";

const encryptPassword = (password: string): string => {
  return bcrypt.hashSync(password, 10);
};

export default encryptPassword;
