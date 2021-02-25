// Name: Elya Denysova 
// User name: ed18xy
// St Numner: 6667596
function loadstate(){
    if(localStorage.getItem('wishlistState')){
        wishlist = JSON.parse(localStorage.getItem('wishlistState'));
   }
    else{
        wishlist=[];
    }
    return wishlist;
}
function update(){
   localStorage.setItem("wishlistState",JSON.stringify(state));
}
//list of products 
let light = {name: "Light Pink Rose", cost: "30", ID: "0"}
let pink = {name: "Pink Rose", cost: "25", ID: "1"}
let white = {name: "Pink-White Rose", cost: "20", ID: "2"}
let orange = {name: "Light Orange Rose", cost: "30", ID: "3"}
let fulllist = [light,pink,white,orange];

function toggleicon(event) {
    icon=event.target;
    newstate=icon.classList.toggle('like');
    //find a product in the list
    aproduct = fulllist.find(finder);
    // add product to the wishlist 
    if(newstate){state.push(aproduct);}
    // remove product from the list
    else{
        indexRemove = state.findIndex(finderI);
        state.splice(indexRemove,1);
    }
    //update the localStorage
    update();
   }

   function finder(value, index, array){
       return value.ID==icon.id;
   }
   function finderI(value, index, array){
    return value.ID==icon.id;
   }

function updateIcons(loc){ 
    for(k=0;k<state.length;k++){
    if(state[k].ID==loc){document.getElementById(loc).classList.toggle('like');}
    }
  }