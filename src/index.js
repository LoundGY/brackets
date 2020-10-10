module.exports = function check(str, bracketsConfig) {
    let open = [];
    let close = [];
    let stack = [];
    let result;

    for (let i = 0; i < bracketsConfig.length; i++){
        open.push(bracketsConfig[i][0]);
        close.push(bracketsConfig[i][1]);
    }

    for (let i = 0; i < str.length; i++){
        if (open.includes(str[i]) && close.indexOf(str[i]) === -1 || open.includes(str[i]) && close.includes(str[i]) && stack[stack.length - 1] !== str[i]) {
            stack.push(str[i]);
        }
        else if (open.indexOf(stack[stack.length - 1]) === close.indexOf(str[i])) {
            stack.pop();
        }
        else {
            result = false;
            stack.push(str[i]);
            break;
        }
    }
    if (stack.length === 0) {
        result = true;
    }
    else {
        result = false;
    }
    return result;

}
