'use strict';
removeAndCheck();
//adding a new item in the list
$('form#js-shopping-list-form').on('submit', e=>{
  e.preventDefault();
  let item = $('input#shopping-list-entry:input').val();
  removeAndCheck();

  $('.shopping-list').append(`
  <li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
  </li>
  `);
  
  removeAndCheck();
});
function removeAndCheck(){
//removing and checking off things from list
  $('button').on('click', e=>{
    switch($(e.currentTarget).attr('class')){
    case 'shopping-item-delete':
      $(e.currentTarget).parents('li').remove();
      break;
    case 'shopping-item-toggle':
      $(e.currentTarget).parents('div').siblings('.shopping-item').attr('class', (i,value)=>value.includes('shopping-item__checked')?'shopping-item':value+' shopping-item__checked' );
      break;
    }

  });
}
