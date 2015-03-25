describe('#_toSelect', function() {
  'use strict';

  beforeEach(function() {
    this.el = Helper.create();
  });

  afterEach(function() {
    Helper.clear();
  });

  it ('returns the number of items need to be select based on min value', function() {
    // given
    var instance = new Checky('.painel');

    instance.opt.min          = 2;
    instance.items[0].checked = true;

    // when
    var result = instance._toSelect();

    // then
    expect(result).toEqual(1);
  });

  context('when there is no min', function() {
    it ('returns 0', function() {
      // given
      var instance = new Checky('.painel');

      // when
      var result = instance._toSelect();

      // then
      expect(result).toEqual(0);
    });
  });
});
