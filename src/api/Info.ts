import {message, Modal, notification} from "antd";

export function ContentErrorInfo({error}: { error: any }) {
    console.log("error:", error);
    Modal.error({
        title: "提示信息",
        content: error
    });
    return;
}

//用于显示后台返回的具体正确信息
export function ContentSuccInfo({message}: { message: any }) {
    console.log("message:", message);
    Modal.success({
        title: "提示信息",
        content: message
    });
    return;
}

// 右上角弹出一个警告信息
export function warningInfo(msg:String) {
    notification.destroy()
    notification["warning"]({
        message: msg, //标题
        // description: msg,//详细时间
        duration: 8 //持续时间
    });
    return;
}

// 系统错误信息-中间模态框
export function sysErrorInfo(msg:String) {
    // 清除掉过多的errorInfo
    message.error(msg);
}
export function sysSuccessInfo(msg:String) {
    // 清除掉过多的errorInfo
    message.success(msg);
}
// 右上角弹出成功消息通知
export function successInfo(msg:String) {
    notification.destroy()
    notification["success"]({
        message: msg, //标题
        // description: msg,//详细信息
        duration: 5 //持续时间
    });
}

// 右上角弹出错误消息通知
export function errorInfo(msg:String) {
    notification.destroy()
    notification["error"]({
        message: msg, //标题
        // description: msg,//详细信息
        duration: 5 //持续时间
    });
    return;
}
