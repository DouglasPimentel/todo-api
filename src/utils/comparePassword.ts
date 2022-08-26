import bcrypt from "bcrypt";

const comparePassword = (password: string, userPassword: string): boolean => {
  return bcrypt.compareSync(password, userPassword);
};

export default comparePassword;
