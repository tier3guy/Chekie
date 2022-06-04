const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const greetMessage = () => {
  const date = new Date();
  const time = date.getHours();

  if (time <= 12) return "Good Morning !";
  else if (time <= 17) return "Good Afternoon !";
  else if (time <= 19) return "Good Evening !";
  return "Good Night !";
}

export const date = () => {
  const date = new Date();
  return `${days[date.getDay()-1]}, ${months[date.getMonth()-1]} ${date.getDate()}, ${date.getFullYear()}`
}

export const getTime = () => {
  const date = new Date();
  const hr = date.getHours();
  const min = date.getMinutes();
  return `${hr} : ${min} ${(hr <= 12)? 'AM' : 'PM'}`;
}