import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const showToastMessage = (about: string, title: string) => {
  if (about == "success") {
    toast.success(title, {
      position: toast.POSITION.TOP_CENTER,
    });
  } else {
    toast.error(title, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};
