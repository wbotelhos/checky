describe('#_min', function() {
  'use strict';

  beforeEach(function() {
    this.el = Helper.create();
  });

  afterEach(function() {
    Helper.clear();
  });

  context('with more items than min', function() {
    it ('return true', function() {
      // given
      var instance = new Checky('.painel');

      instance.opt.min          = 1;
      instance.items[0].checked = true;
      instance.items[1].checked = true;

      // when
      var result = instance._min();

      // then
      expect(result).toBeFalsy();
    });
  });

  context('with equal items than min', function() {
    it ('return false', function() {
      // given
      var instance = new Checky('.painel');

      instance.opt.min          = 1;
      instance.items[0].checked = true;

      // when
      var result = instance._min();

      // then
      expect(result).toBeFalsy();
    });
  });

  context('with less items than min', function() {
    it ('return false', function() {
      // given
      var instance = new Checky('.painel');

      instance.opt.min = 1;

      // when
      var result = instance._min();

      // then
      expect(result).toBeTruthy();
    });
  });
});
