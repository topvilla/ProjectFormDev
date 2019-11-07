export const cpf = (input,key)=>{
    if(input.length === 3 && key !== "Backspace"){
        return input+"."
    }
    if(input.length === 7 && key !== "Backspace"){
        return input+"."
    }
    if(input.length === 11 && key !== "Backspace"){
        return input+"-"
    }
    if(input.length === 14 && key !== "Backspace"){
        return input;
    }
    return input;
}
// //19260-000
// export const cep = (input,event)=>{
//     if(input.length === 5 && event.key !== "Backspace"){
//         return input+"-"
//     }
//     return input;
// }

// export const telPhone = (input,event)=>{
// if(input.length === 1 && event.key !== "Backspace"){
//     return "("+input;
// }
// if(input.length === 3 && event.key !== "Backspace"){
//     return input+") "
// }
// if(input.length === 9 && event.key !== "Backspace"){
//     return input+"-"
// }
// return input;
// }

export const phone = (input,key)=>{
    console.log(input.length === 1 && key === "Backspace");
    if(input.length === 1 && key !== "Backspace"){
        return "("+input;
    }
    if(input.length === 1 && key === "Backspace"){
        return "";
    }
    if(input.length === 3 && key !== "Backspace"){
        return input+") "
    }
    if(input.length === 10 && key !== "Backspace"){
        return input+"-"
    }
    return input;
}

// export const ie = (input,event)=>{
//     if(input.length === 3 && event.key !== "Backspace"){
//         return input+"."
//     }
//     if(input.length === 7 && event.key !== "Backspace"){
//         return input+"."
//     }
//     if(input.length === 11 && event.key !== "Backspace"){
//         return input+"."
//     }
//     if(input.length === 16 && event.key !== "Backspace"){
//         return input;
//     }
//     return input;
// }
// export const date = (data)=>{
// const regDate = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
// if(regDate.test(data)){
//     const vetDate = data.split('-');
//     return vetDate[2]+"/"+vetDate[1]+"/"+vetDate[0];
// }
// return "";
// }