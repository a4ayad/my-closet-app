// get the HTML element. See line 15 on index.html
const closetForm = document.querySelector("#library-form");

// get the input HTML element. See line 17 on index.html
const brand = document.querySelector("#brand");

// get the input HTML element. See line 19 on index.html
const maker = document.querySelector("#maker");

// get the div HTML element. See line 23 on index.html
const closetResult = document.querySelector("#closet-result");

// Our Closet Array
let closet = [];

closetForm.addEventListener("submit", function (e) {
  // prevent the form for submit (the default action)
  e.preventDefault();

  // add the user input to the array
  closet.push({
    // generating a random number as this item's ID
    id: Math.floor(Math.random() * 109),
    brand: brand.value,
    maker: maker.value
  });

  // sets the inpuot values to empty
  brand.value = "";
  maker.value = "";

  // puts the focus on the brand input
  brand.focus();

  // we get the current state of the "closet result".
  // See line 23 in `indesx.html`
  closetResult.innerHTML = '<div id="closet-result"></div>';

  // we loop through the array using the array forEach
  // See line 65 as an alternative way to write this
  closet.forEach(function (item) {
    // we create a new "div" on the fly
    const div = document.createElement("div");
    // we get that div and add the current item in our array
    // as a string literal
    div.innerHTML = `ID: <b>#${item.id}</b> | Brand:<b> ${item.brand}</b>  |  Maker: <b>${item.maker}</b>`;
    // we add that item to the DOM, from line 28
    closetResult.appendChild(div);

    // this is a helper
    // let us see the content of the array as we add it
    console.log(item);
  });

  // The current content of the array
  console.log(closet);
});

// @TODO: Books tracker. Emulate lines 1 - 27
//        write a groceries list app
//        so as you add items to the shelf,
//        it shows what items you've added
let shelf = [];

// @TODO: Groceries tracker. Emulate lines 1 - 27
//        write a groceries list app
//        so as you add items to the shelf,
//        it shows what items you've added
let groceries = [];

// Another way to write line 32 - 44
// creste an non-existing array to not conflict with the above
const dummyCloset = [];

dummyCloset.forEach((item) => {
  const div = document.createElement("div");
  div.innerHTML = `<b>${item.brand} - ${item.maker}</b>`;
  closetResult.appendChild(div);
  console.log(item);
});
