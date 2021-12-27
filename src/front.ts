const button = document.querySelector('.sendButton');

async function sendData () {
  const dataToServer = {
    firstName : '',
    lastName : '',
    phone : '',
    email : '',
    adress : '',
  };

  if ((/[a-z]/gmi).test(document.querySelector('.formToServer')[0].value)) {
    dataToServer.firstName = document.querySelector('.formToServer')[0].value;
  } else {
    alert('Wrong First Name')
  }
  if ((/[a-z]/gmi).test(document.querySelector('.formToServer')[1].value)) {
    dataToServer.lastName = document.querySelector('.formToServer')[1].value;
  } else {
    alert('Wrong Last Name')
  }
  if ((/[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/).test(document.querySelector('.formToServer')[2].value)) {
    dataToServer.phone = document.querySelector('.formToServer')[2].value;
  } else {
    alert('Wrong Phone')
  }
  if (( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(document.querySelector('.formToServer')[3].value)) {
    dataToServer.email = document.querySelector('.formToServer')[3].value;
  } else {
    alert('Wrong Email')
  }
  if ((/[a-z]/).test(document.querySelector('.formToServer')[4].value)) {
    dataToServer.adress = document.querySelector('.formToServer')[4].value;
  } else {
    alert('Wrong Adress')
  }

  console.log(dataToServer);

  async function postData(url = 'http://localhost:8000/', data = dataToServer) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return await response.text();
  }

  document.querySelector('.response').textContent = await postData();
}

button.addEventListener('click', sendData);
