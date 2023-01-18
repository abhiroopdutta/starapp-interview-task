const umbrellas = [
  {
    img: "blue.png",
    mainColor: "#00a3e0",
    bgColor: "#e6f6fc"
  },
  {
    img: "yellow.png",
    mainColor: "#fed040",
    bgColor: "#fefaec"
  },
  {
    img: "pink.png",
    mainColor: "#d0006f",
    bgColor: "#fae6f1"
  }
];

let listOfColors = document.querySelector("ul");
let uploadButton = document.querySelector("label");
let fileInput = document.querySelector("input");
let umbrellaImg = document.querySelector(".umbrella-img");
let loader = document.querySelector(".loader");
let productContainer = document.querySelector(".product-container");
let uploadButtonLabel = document.querySelector(".upload-button-label");

// Initial state set to 1st element of the array
document.body.style.backgroundColor = umbrellas[0].bgColor;
uploadButton.style.backgroundColor = umbrellas[0].mainColor;

//Generate the list of color buttons
for (let umbrella of umbrellas) {
  let newListItem = document.createElement("li");
  newListItem.textContent = "";
  newListItem.name = umbrella.mainColor;
  newListItem.style.backgroundColor = umbrella.mainColor;
  listOfColors.appendChild(newListItem);
}

listOfColors.addEventListener("click", handleChangeTheme);
fileInput.addEventListener("change", handleFileUpload);
umbrellaImg.addEventListener("load", handleImageLoad);

function handleChangeTheme(event) {
  if (event.target && event.target.matches("li")) {
    let umbrellaFound = umbrellas.find(
      (umbrella) => umbrella.mainColor === event.target.name
    );
    productContainer.classList.replace("show", "hide");
    loader.classList.replace("hide", "show");
    document.body.style.backgroundColor = umbrellaFound.bgColor;
    uploadButton.style.backgroundColor = umbrellaFound.mainColor;
    umbrellaImg.src = umbrellaFound.img;
  }
}

function handleImageLoad() {
  productContainer.classList.replace("hide", "show");
  loader.classList.replace("show", "hide");
}

function handleFileUpload(event) {
  const img = document.createElement("img");
  img.src = URL.createObjectURL(event.target.files[0]);
  img.height = 50;
  img.setAttribute("class", "logo");
  let logoFound = document.querySelector(".logo");
  if (logoFound) {
    logoFound.replaceWith(img);
  } else {
    productContainer.appendChild(img);
  }
  img.onload = () => {
    uploadButtonLabel.textContent = event.target.files[0].name;
  };
}
