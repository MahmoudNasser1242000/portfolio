import { Bounce, toast } from "react-toastify";

type TStatus = "success" | "warn"
export const addToast = (theme: string, status: TStatus) => {
    return toast[status]('Email has been send successfully', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme,
        transition: Bounce,
        
        });
}