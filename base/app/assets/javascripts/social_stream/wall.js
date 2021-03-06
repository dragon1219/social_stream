//= require jquery.autosize
//
//= require social_stream/callback
//= require social_stream/object

SocialStream.Wall = (function(SS, $, undefined){
  var callback = new SS.Callback();


  var initInputAutosize = function() {
    $('.wall_input [name="post[text]"]').autosize();
  };

  var resetWallInput = function(){
    $('#post_text').val('');
  };

  var changeAction = function(path) {
    var form = $('.wall_input form');

    if (path === undefined) {
      form.attr('action', form.data('actions').pop());
    } else {
      if (form.data('actions') === undefined) {
        form.data('actions', []);
      }

      form.data('actions').push(form.attr('action'));
      form.attr('action', path);
    }
  };

  var changeParams = function(type) {
    SS.Object.changeOwner(type, $('.wall_input form'));
    SS.Object.changeRelationSelect(type, $('.wall_input form'));
  };

  callback.register('show',
                    initInputAutosize,
                    SS.Object.new_);

  callback.register('new_',
                    resetWallInput);

  return callback.extend({
    changeAction: changeAction,
    changeParams: changeParams 
  });
}) (SocialStream, jQuery);
