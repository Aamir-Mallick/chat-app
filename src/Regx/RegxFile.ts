// it should vaild email
export const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
//password should contain atleast one number and one special character
export const regexPassword =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export const regexName = /^[a-zA-Z ]{2,30}$/;
