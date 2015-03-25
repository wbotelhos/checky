describe('#options', function() {
  'use strict';

  it ('has the right default values', function() {
    // given

    // when
    var opt = $.fn.checky.defaults;

    // then
    expect(opt.item).toEqual('.checky');
    expect(opt.max).toBeUndefined();
    expect(opt.min).toBeUndefined();
    expect(opt.type).toEqual('checkbox');
  });
});
