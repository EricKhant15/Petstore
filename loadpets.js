const pets = [
    { name: "Buddy", type: "Dog", age: 1, img: "img/dogs/dog01.jpg" },
    { name: "James", type: "Dog", age: 1, img: "img/dogs/dog02.jpg" },
    { name: "Sally", type: "Dog", age: 1, img: "img/dogs/dog03.jpg" },
    { name: "Mittens", type: "Cat", age: 1, img: "img/cats/cat01.jpg" },
    { name: "Kitten", type: "Cat", age: 3, img: "img/cats/cat02.jpg" },
    { name: "Sweeten", type: "Cat", age: 2, img: "img/cats/cat03.jpg" },
    { name: "Danny", type: "Capybara", age: 2, img: "img/capybaras/capybara01.jpg" },
    { name: "Tummy", type: "Capybara", age: 3, img: "img/capybaras/capybara02.jpg" },
    { name: "Billy", type: "Bird", age: 1, img: "img/birds/bird01.jpg" },
    { name: "Yuppy", type: "Bird", age: 1, img: "img/birds/bird02.jpg" }

  ];
  
  var ap = document.getElementById("all-pets");
  
  for (let i = 0; i < pets.length; i++) {
    var aPet = ap.appendChild(document.createElement("div"));
    aPet.className = "pet";
    aPet.innerHTML = `
      <img src="${pets[i].img}" alt="${pets[i].name}">
      <h3>${pets[i].name}</h3>
      <p>Type: ${pets[i].type}</p>
      <p>Age: ${pets[i].age} years</p>
      <button onclick="adoptPet()">Adopt Now</button>
    `;
  }
  function adoptPet() {
    alert("Thank you for your interest in adopting! Our team will contact you soon.");
  }
  