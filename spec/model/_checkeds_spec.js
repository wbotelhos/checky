describe('#checkeds', function() {
  'use strict';

  beforeEach(function() {
    this.el = Helper.create();
  });

  afterEach(function() {
    Helper.clear();
  });

  it ('returns the checked items', function() {
    // given
    var instance = new Checky('.painel');

    instance.items[0].checked = true;

    // when
    var total = instance._checkeds().length;

    // then
    expect(total).toEqual(1);
  });
});
