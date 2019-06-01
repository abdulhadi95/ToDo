var allItems = JSON.parse(localStorage.getItem('item')) || [];
var cardContainer = $('.card-container');
var submit = $('.submit-btn');submit.on("click", createNewUser);

function appendAllItems () {
  allItems.forEach(function(item) {
    cardContainer.append(`
    <div class="to-do-card">
      <p>${item.toDo}</p>
  <input type = "checkbox" class ="checkbox">
    </div>
        `);
  })
}
appendAllItems();



function createNewUser() {
  var toDo = $('.to-do').val();

  appendNewToDo(toDo);
  clearInputs();
}

function appendNewToDo(toDo) {
    cardContainer.append(`
    <div class="to-do-card">
      <p>${toDo}</p>
<input type = "checkbox" class ="checkbox">
    </div>
  `);

 var checkbox=$('.checkbox');
  checkbox.on("click", remove)
}



$('.to-do').val(" ");
allItems.push ({ toDo: toDo });
console.log(allItems);
var allItemsString = JSON.stringify(allItems);
localStorage.setItem('item', allItemsString);
console.log(localStorage);

function remove (){
  event.target.parentNode.remove();
}

function clearInputs() {
  $('.to-do').val(" ");
}
