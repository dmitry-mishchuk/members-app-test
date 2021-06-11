export const verificationEmail = (emails, email) => {
    if(emails.length != 0){
      for(var i=0; i<emails.length; i+=1){
        if (compare(emails[i], email)){
          return false;
        }
      }
      return true;
    }
    else {
      return true;
    }
}

const compare = (str1, str2) => {
  return str1.toUpperCase() === str2.toUpperCase();
}

export const currentDate = () => {
  let date = new Date();
  let dd = String(date.getDate()).padStart(2, '0');
  let mm = String(date.getMonth()+1).padStart(2, '0');
  let yy = String(date.getFullYear());
  return dd.concat('.', mm, '.', yy);
}
