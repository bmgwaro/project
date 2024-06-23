const myDetails = {
    Name: "Brian Gwaro",
    Email: "gwarobm@gmail.com",
    Phone: "+254 717 858 194",
    Address: "Ongata Rongai",
  };
  
  const footer = document.querySelector(".footer");
  
  function appendDetail(key, value) {
    const detailDiv = document.createElement("div");
    detailDiv.textContent = `${key}: ${value}`;
    footer.appendChild(detailDiv);
  }
  
  for (const key in myDetails) {
    if (myDetails.hasOwnProperty(key)) {
      appendDetail(key, myDetails[key]);
    }
  }