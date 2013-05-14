(function($) {

  var picasa = $.picasa = {};

  picasa.url = 'http://picasaweb.google.com/data/feed/base/user/{user}/albumid/{albumid}?alt=json-in-script&start-index={index}&max-results={pagesize}&hl=en_US&kind=photo'

  picasa.getPhotos = function (props, callback) {
    $.ajax({
      url: picasa.url.replace('{user}', props.user).replace('{albumid}', props.albumid).replace('{index}', props.index ? props.index : '1').replace('{pagesize}', props.pagesize ? props.pagesize : '1000') ,
      dataType: 'jsonp'
    }).done(function(response) {
      if(callback) {
        callback(response);
      }
    });
  };

})(jQuery);