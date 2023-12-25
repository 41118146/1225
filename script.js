function adjustText() {
  document.querySelector('h1').style.color = 'blue';
  document.querySelector('h1').style.fontFamily = 'Arial';
}

function adjustProfile() {
  const profilePic = document.getElementById('profile-pic');
  profilePic.style.borderRadius = '50%';
  profilePic.style.border = '2px solid red';
}

function changePhoto() {
  const profilePic = document.getElementById('profile-pic');
  profilePic.src = '456';
}
