async function verifyUser() {
    const phoneNumber = document.getElementById('phone').value;
    const pin = document.getElementById('pin').value;
  
    const response = await fetch(`/verify?phone=${phone}&pin=${pin}`);
    const result = await response.json();
  
    const userDataDiv = document.getElementById('userData');
    if (result.success) {
      userDataDiv.innerHTML = `<p>User Data: ${result.userData}</p>`;
    } else {
      userDataDiv.innerHTML = `<p>${result.message}</p>`;
    }
  }
  