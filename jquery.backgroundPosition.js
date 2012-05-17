(function($){
  var stripos = function (f_haystack, f_needle, f_offset) {
    // http://kevin.vanzonneveld.net
    // +     original by: Martijn Wieringa
    // +      revised by: Onno Marsman
    // *         example 1: stripos('ABC', 'a');
    // *         returns 1: 0
    var haystack = (f_haystack + '').toLowerCase();
    var needle = (f_needle + '').toLowerCase();
    var index = 0;

    if ((index = haystack.indexOf(needle, f_offset)) !== -1) {
        return index;
    }
    return false;
  };

  $.fn.backgroundPosition = function() {
    var pos = $.trim($(this).css('background-position'));
    if ( pos == '' ) {
      return false;
    }
    var _pos = pos.split(' ');
    var typeX = 'px';
    var typeY = 'px';
    if ( stripos(_pos[0], '%') !== false ) {
      typeX = '%';
      _pos[0] = _pos[0].substring(0, _pos[0].length -1);
    } else  {
      _pos[0] = _pos[0].substring(0, _pos[0].length -2);
    }

    if ( stripos(_pos[1], '%') !== false ) {
      typeX = '%';
      _pos[1] = _pos[1].substring(1, _pos[1].length -1);
    } else  {
      _pos[1] = _pos[1].substring(1, _pos[1].length -2);
    }
    _pos[0] = parseFloat(_pos[0]) || 0;
    _pos[1] = parseFloat(_pos[1]) || 0;

    return {
      x:{val:_pos[0], type:typeX},
      y:{val:_pos[1], type:typeY}
    };
  };

})(jQuery);
