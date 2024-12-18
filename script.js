console.log('Hello!');
const username = document.getElementById('username');
const useremail = document.getElementById('useremail');
const registerBtn = document.getElementById('registerBtn');
const output = document.getElementById('output');
const tsize = document.getElementById('tsize');
registerBtn.addEventListener('click', () => {
  const arr = [];
  const uName = username.value;
  const uEmail = useremail.value;
  // if (uEmail.includes('@') && uEmail.includes('.')) {
  //   if (uEmail.indexOf('.') > uEmail.indexOf('@')) {
  //     useremail.style.background.color = 'red';
  //   }
  // }
  const userEvent = document.querySelector(
    'input[name="uevent"]:checked'
  ).value;
  const diet = document.getElementsByName('diet');
  for (let i = 0; i < diet.length; i++) {
    if (diet[i].checked) {
      arr.push(diet[i].value);
    }
  }
  const utsize = tsize.value;
  const udetails = `<h2>Regestraion Details:</h2>
  <p><strong>Name:</strong>${uName}</p>
  <p><strong>Email:</strong>${uEmail}</p>
  <p><strong>Event Type:</strong>${userEvent}</p>
  <p><strong>Dietary Restrictions:</strong>${arr.join(', ')}</p>
  <p><strong>T-Shirt Size:</strong>${utsize}</p>
  `;
  output.innerHTML = udetails;
  console.log(uName, uEmail, userEvent, arr, utsize);
});
