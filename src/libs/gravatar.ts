import md5 from "js-md5";

export const getAvatarURL = (email: string, size = 80) => {
  const hash = md5(email);
  return `https://www.gravatar.com/avatar/${hash}?s=${size}`;
};
