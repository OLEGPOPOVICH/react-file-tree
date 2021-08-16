import defaultFile from './assets/file.png';
import epubFile from './assets/epub.png';
import jpgFile from './assets/jpg.png';
import zipFile from './assets/zip.png';

export const getUrlImgByDocFormat = (format) => {
  switch(format) {
    case 'epub':
      return epubFile;
    case 'jpg':
      return jpgFile;
    case 'zip':
      return zipFile;
    default:
      return defaultFile
  }
};