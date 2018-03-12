$(document).ready(readyNow)


let clicks = 0;

function readyNow() {
generateClick();
toggleColor();
deleteClick();
}

function generateClick(){
  $('.btn1').on('click', function(){
    // let clicks = 0;
    let div1 = $('<div class="divOne"></div>');
    $('.container').append(div1);
    $('.divOne').empty();
    $('.divOne').append('<p class="pTag"></p>');
    $('.divOne').append('<button class="btnSwap">Swap</button>', '<button class="btnDelete">Delete</button>');
    $('.pTag').append(clicks++);
  });
}
console.log('js');
console.log('jQuery ready');

function toggleColor(){//Trying to get color to switch to Yellow when Swap is clicked
  $('.btnSwap').on('click', function(){
    // $('.btnSwap').parent().addClass('div1');
    $(this).parent().addClass(div1);
  })
}

function deleteClick(){
  $('.btnDelete').on('click', function(){
    $(this).parent().remove();
  })

}
