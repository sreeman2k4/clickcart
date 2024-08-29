import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  console.log("i am here")
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export default generateToken;
