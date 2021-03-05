
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = {
    success: (content, config) => {
        return toast.success(content, config)
    },
    warn: (content, config) => {
        return toast.warn(content, config)
    },
    error: (content = "Error undefined!!!!", config) => {
        return toast.error(content, config)
    },

}

export default Toast
