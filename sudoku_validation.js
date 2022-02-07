const f = require('./list_manipulation');

var list_valid = (list) => {
    list = list.filter(item => item!=='.');
    filtered_size=list.length;
    if(f.remove_duplicate(list).length === filtered_size){
        return true;
    }
    return false;
};