import { message } from "antd"

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

window.EmailCheck = (email)=>emailRegex.test(email) 


window.MessageAlert = (text, type) => {
    switch (type) {
        case "success"  :        message.success(text); break
        case "info"     :        message.info(text); break
        case "error"    :        message.error(text); break
        case "warning"  :        message.warning(text); break
        default         :        message.info(text)
    }
}