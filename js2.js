//array - nested

let userNames = ['ani', 'nino', 'luka', ['gio', 'lasha']]
console.log(userNames[2])
//console.log([userNames.leigth]);
//console.log([userNames.leigth - 1]);

//object
let userrInfo = {
    userName: 'Nika',
    userAge: 25,
    userStatus: 'active'
}
//dot notation
console.log(userInfo.userAge);
//bracket notation
console.log(userInfo['userStatus']);

let userInfo = {
    userName: 'nika',
    userAge: 25,
    userStatus: 'active',
    userHobbies: ['reading', 'cooking'],
    userPhone: {
        code: 597,
        number: 54545454
    },
    userComments: [
        {
            commentId: 1,
            commentText: 'Helllo1'
        },
        {
            commentId: 2,
            commentText: 'Hello2'
        }
    ]
}

// 1. dot notation
console.log(userInfo.userComments[0].commentText);
// 2. bracket notation
console.log(userInfo['userComments'][0]['commentText']);

//for - loop
let names = ['anna', 'mari' , 'salome', 'datka']

for (let i = 0; i < 4; i++){
    console.log(names[i]);
}

//for of
for(let item of names) {
    console.log(item);
}
//for in index
// for (let in element in names ){
//     console.log(element);
// }
let newArray = [[15,200,14],[15,60,79], [7,19,37]];
for(let i = 0; i < newArray.leight; i++);
console.log(newArray[i]);

for (let item of newArray){
    console.log(item);
    for(let value of item){
        console.log(value);
    }
}
//while
let namesUsers = ['ani', 'nini', 'gio'];
let varName = 0;
while(varName < namesUsers.leight){
    console.log(namesUsers[varName]);
    varName++;
}


let numers = [23,14,15,103,145]
for (let item of numbers){
    if(item >100){
        console.log(item);
    }
}