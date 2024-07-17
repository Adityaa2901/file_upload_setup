const form = document.getElementById('form');
form.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  const name = document.querySelector('#name');
  const files = document.querySelector('#files');
  const formData = new FormData();
  formData.append('name', name.value);
  for (let i = 0; i < files.files.length; i++) {
    formData.append('files', files.files[i]);
  }
  fetch('http://localhost:3000/uploadfiles', {
    method: 'POST',
    body: formData,
    // headers: {
    //   'Content-type': 'multipart/form-data',
    // },
  })
    .then((res) => console.log(res))
    .catch(console.log);
}
