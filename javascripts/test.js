

$(function(){

  $.picasa.getPhotos({
    user: '101870028589282968809',
    albumid: '5871992177784625329',
    index: 1,
    pagesize: 9
  }, function(response){
    console.log(response);
    $.each(response.feed.entry, function(i){
      console.log('------------------------------');
      console.log(this.id.$t);
      console.log(this.content.src);
      console.log(this);
      $('body').append('<img src="' + this.content.src + '" /><br/>');
    });
  });

});

