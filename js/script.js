let nameInput = document.querySelector(".nameInput");
let captionInput = document.querySelector(".captionInput");
let postbtn = document.querySelector(".postbtn");
let mainPost = document.querySelector(".mainPost");
let crossOne = document.querySelector(".cross-one");
let crossTwo = document.querySelector(".cross-two");
let editbtn = document.querySelector(".editbtn");
let storeUpdate;
let array = [];

editbtn.addEventListener("click", function () {
  //  console.log(array[storeUpdate].name);
  //  console.log(array[storeUpdate].caption);

  // console.log(nameInput.value);
  // console.log(captionInput.value);

  array[storeUpdate].name = nameInput.value;
  array[storeUpdate].caption = captionInput.value;
  display();
  nameInput.value = "";
  captionInput.value = "";
  editbtn.style.display = "none";
  postbtn.style.display = "block";
});

postbtn.addEventListener("click", function () {
  if (!nameInput.value) {
    crossOne.style.display = "block";
  } else if (!captionInput.value) {
    crossTwo.style.display = "block";
  } else {
    crossOne.style.display = "none";
    crossTwo.style.display = "none";
    array.push({
      name: nameInput.value,
      caption: captionInput.value,
    });
    display();

    nameInput.value = "";
    captionInput.value = "";
  }
});

function display() {
  mainPost.innerHTML = "";

  array.map((items) => {
    mainPost.innerHTML += ` <div class="card" style="width: 20rem">
          <div class="card-body">
            <h5 class="card-title">${items.name}</h5>
            <p class="card-text">${items.caption}</p>
           <div class="d-flex flex-cols  gap-4">
             <button class="btn btn-success  upbtn">Update</button>
            <button class="btn btn-danger deletebtn">Delete</button>
           </div>
          </div>
        </div>`;
  });
  let deletebtn = document.querySelectorAll(".deletebtn");
  let deleteArr = Array.from(deletebtn);
  deleteArr.map((items, index) => {
    items.addEventListener("click", function () {
      array.splice(index, 1);
      mainPost.innerHTML = "";
      display();
    });
  });

  let upbtn = document.querySelectorAll(".upbtn");

  let arrUpbtn = Array.from(upbtn);

  arrUpbtn.map((items, index) => {
    items.addEventListener("click", function () {
      nameInput.value = array[index].name;
      captionInput.value = array[index].caption;
      editbtn.style.display = "block";
      postbtn.style.display = "none";
      storeUpdate = index;
    });
  });
}
