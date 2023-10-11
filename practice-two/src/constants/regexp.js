/* eslint-disable no-useless-escape */
export const REGEX = {
  USERNAME: '^[A-Za-z0-9]{3,16}$',
  AVATAR: '.*.(jpg|jpeg|png|gif|bmp|tiff|webp|svg|ico)$',
  EMAIL: '^[w-.]+@([w-]+.)+[w-]{2,4}$',
  PHONENUMBER: '\\d{10}',
  DESCRIPTION: '^.{3,20}$',
  ADDRESS: '.{8,}',
};
