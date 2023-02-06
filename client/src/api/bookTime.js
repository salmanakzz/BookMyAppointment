import axios from "../axios/axios";
import { bookingTimeUrl } from "../urls/urls";

export const bookTime = async (bookData) => {
  try {
    const { data } = await axios.post(bookingTimeUrl, bookData);
    return data;
  } catch (error) {
    console.log(error);
  }
};
