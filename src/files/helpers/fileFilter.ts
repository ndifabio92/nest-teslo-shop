/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  if (!file) return callback(new Error('File is not provided'), false);

  const fileExtension = file.mimetype.split('/')[1];
  const allowedExtensions = ['png', 'jpg', 'jpeg', 'gif'];

  if (allowedExtensions.includes(fileExtension)) {
    return callback(null, true);
  }

  callback(null, false);
};
