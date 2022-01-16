let name="default";

function setName(newName){
    name = newName;    
}

function setName(newName){
    console.log(name);    
}

// exports = { setName, showName };
//這個寫法是錯的
// 因為{}，使程式已經新增了一個記憶體，以至於傳出是空的

module.exports = { setName, showName };

//return module.exports;