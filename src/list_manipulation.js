var remove_duplicate = (list) => {
    list.sort();
    return list.filter((value, index)=>{
        return list.indexOf(value) === index;
    });
}

module.exports = { remove_duplicate };
