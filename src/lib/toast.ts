import { Bounce, toast } from "react-toastify";

type TStatus = "success" | "warn"
type TTheme = "dark" | "light"
export const addToast = (theme: TTheme, status: TStatus) => {
    let msg: string;
    if (status === "success") {
        msg = 'Email has been send successfully';
    } else {
        msg = 'Something went wrong!';
    }
    return toast[status](msg, {
        position: "bottom-left",
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