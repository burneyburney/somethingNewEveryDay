"use strict";

// because 'let' was used instead of 'var', it is only visiable for lines 13-15
for(let i = 0; i < 5; i++){
        console.log('inside of for loop, i = ' + i);
};

// which means line 18 has no clue what the variable 'i' represents
console.log('outside of for loop, i = ' + i);
