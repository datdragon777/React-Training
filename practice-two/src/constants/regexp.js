/* eslint-disable no-useless-escape */
export const REGEX = {
  USERNAME: '^[A-Za-z0-9]{3,16}$',
  AVATAR: '\.(jpg|jpeg|png|gif|bmp|tiff|webp|svg|ico)$',
  EMAIL: '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$',
  PHONENUMBER: '^(((\+|)84)|0)([1-9]{1})([0-9]{8})\b',
  DESCRIPTION: '^.{3,20}$',
  ADDRESS: '.{8,}',
};
 