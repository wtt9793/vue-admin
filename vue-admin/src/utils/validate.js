/**
 * 过滤特殊字符
 */
export function stripscript(s) {
    var pattern = new RegExp("[`~!@#$^&*()=|{ }':;',\\[\\].<>/?~！@#￥……&*（）&;—|{}【】‘；：”“'。，、？]")
    var rs = "";
    for (var i = 0; i < s.length; i++) {
            rs = rs + s.substr(i, 1).replace(pattern, '');
        }
    return rs;
}
/**
 * 验证邮箱 
 */
export function validateEmail(value){
    let reg=/^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
    return !reg.test(value) ? true :false;
}

/**
 * 验证密码
 */
export function validatePass(value){
    let reg=/^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
    return !reg.test(value) ? true :false;
}

/**
 * 验证验证码
 */
export function validateCode1(value){
    let reg = /^[a-z0-9]{6}$/;
    return !reg.test(value) ? true :false;
}