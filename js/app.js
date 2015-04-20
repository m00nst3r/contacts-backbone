function matches(v){
    return /^box.*|^po.*box.*|^p\.o\..*box.*/i.test(v);
}
function invertOffset(offset){
    if( /^-/i.test(offset) ){
        return parseInt(offset.toString().slice(1, offset.length));
    }else{
        return parseInt('-' + offset.toString());
    }
}