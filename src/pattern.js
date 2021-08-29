export const Pattern = {
  email: /^[A-z][\w-.]+@[A-z]{3,}\.[A-z]{2,4}$/i,
  phone: /^0[6|7][0-9]{8}$/,
  password: /^(?=.*\d)(?=.*[A-z]).{8,}$/,
  name: /^[A-z]{3,}$/,
  username: /^[a-z]{5,}\d*$/i,
  image: /\.(jpg|jpeg|png|gif)$/i,
  image64: /^data:image\/(png|jpg|jpeg)/i,
};
