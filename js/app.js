function matches(v){
    return /^box.*|^po.*box.*|^p\.o\..*box.*/i.test(v);
}
function invertOffset(offset){
    var str;
    if( /^-/i.test(offset) ){
        str = offset.toString().slice(1, offset.length);
        return parseInt(str);
    }else{
        str = offset.toString();
        str = '-' + str;
        return parseInt(str);
    }
}