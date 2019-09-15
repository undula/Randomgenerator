const userForm = document.querySelector("form");
const details = document.querySelector(".userdetails");
updateUI = data => {
  const userdata = data.userData;
  console.log(userdata);

  userdata.map(result => {
    let firstname = result.name.first.slice(0, 1).toUpperCase();
    let lastname = result.name.last.slice(0, 1).toUpperCase();
    createUI(
      `${firstname + result.name.first.slice(1)} ${lastname +
        result.name.last.slice(1)}`,
      `${result.gender}`,
      `+${result.phone}`,
      `${result.picture.medium}`
    );
  });
};

createUI = (name, gender, phone, img) => {
  const html = `<li
  class="list-group-item d-flex justify-content-between align-items-center">${name}
  <i class="fas fa-venus-mars"></i>
  ${gender}
  <i class="fas fa-phone"></i>
  ${phone}
  <img src="${img}" alt="" class="" />
  </li>`;
  details.innerHTML += html;
};

updateListOfUsers = async user => {
  const userData = await getUsers(user);
  return {
    userData: userData
  };
};

userForm.addEventListener("submit", e => {
  e.preventDefault();
  const inputvalue = userForm.user.value.trim();
  userForm.reset();
  details.innerHTML = "";

  updateListOfUsers(inputvalue)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});
