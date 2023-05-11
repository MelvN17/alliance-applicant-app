import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./config";

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default function upload(file, folder)  {
  if (!file) return Promise.reject("No file provided");

  const imageRef = ref(storage, folder + file.name + generateRandomString(5));
  return uploadBytes(imageRef, file).then(() => {
    return getDownloadURL(imageRef);
  });
};