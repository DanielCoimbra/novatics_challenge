const f = require('./list_manipulation');

var list_valid = (list) => {
    list = list.filter(item => item!=='.');
    filtered_size=list.length;
    if(f.remove_duplicate(list).length === filtered_size){
        return true;
    }
    return false;
};

var reset_list = () => {
    return {
        1:false,
        2:false,
        3:false,
        4:false,
        5:false,
        6:false,
        7:false,
        8:false,
        9:false,
    }
}

var box_bounds = [[0,0],[0,3],[0,6],[3,0],[3,3],[3,6],[6,0],[6,3],[6,6]];

var box_check = (board)=>{
    for(var i=0;i<9;i++){
        var num_list = reset_list();
        b_x = box_bounds[i][0], b_y = box_bounds[i][1];

        for(var x=b_x;x<=b_x+2;x++){
            for(var y=b_y;y<=b_y+2;y++){

                if(board[x][y]===".")
                    continue;
                if(num_list[board[x][y]] === false){
                    num_list[board[x][y]] = true;
                }
                else{
                    return false;
                }
            }
        }
    }
    return true;
};

var lines_check = (board) => {
    for(let i=0;i<9;i++){
        if (!list_valid(board[i]))
        return false;
    }
    return true;
};

var column_check = (board) => {
    let column;
    for(var i=0;i<9;i++){
        column=[]
        for(var j=0;j<9;j++){
            column.push(board[j][i]);
        }
        if(!list_valid(column)) return false;   
    }
    return true;
};