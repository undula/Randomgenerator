const API = "https://randomuser.me/api/";

const getUsers = async number => {
  const query = `?results=${number}`;
  const response = await fetch(API + query);
  if (response.status !== 200) {
    console.log("cannto fetch");
  }
  const data = await response.json();
  return data.results;
};
