// GLIDE.JS initalisieren

const glide = new Glide('.glide', {
  type: 'carousel',
}).mount();

// REZEPT VORHER EINKLAPPEN
glide.on('run.before', function () {
  $('.recipe-info').slideUp();
})

// REZEPT ERWEITERN BUTTON
$('.expand-recipe-info').click((e)=>{

  const buttonParent = e.target.parentNode;

  if ($(buttonParent).hasClass('glide__slide--active')) {
      const recipeInfo = e.target.nextElementSibling;

      $(recipeInfo).slideToggle();
  }    
})