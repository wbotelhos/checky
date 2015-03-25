describe('#_max', function() {
  'use strict';

  beforeEach(function() {
    this.el = Helper.create();
  });

  afterEach(function() {
    Helper.clear();
  });

  context('with more items than max', function() {
    it ('return true', function() {
      // given
      var instance = new Checky('.painel');

      instance.opt.max          = 1;
      instance.items[0].checked = true;
      instance.items[1].checked = true;

      // when
      var result = instance._max();

      // then
      expect(result).toBeTruthy();
    });
  });

  context('with equal items than max', function() {
    it ('return true', function() {
      // given
      var instance = new Checky('.painel');

      instance.opt.max          = 1;
      instance.items[0].checked = true;

      // when
      var result = instance._max();

      // then
      expect(result).toBeTruthy();
    });
  });

  context('with less items than max', function() {
    it ('return false', function() {
      // given
      var instance = new Checky('.painel');

      instance.opt.max = 1;

      // when
      var result = instance._max();

      // then
      expect(result).toBeFalsy();
    });
  });
});
