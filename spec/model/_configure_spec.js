describe('#_configure', function() {
  'use strict';

  beforeEach(function() {
    this.el = Helper.create();
  });

  afterEach(function() {
    Helper.clear();
  });

  context('with type is radio', function() {
    it ('sets min and max to 1', function() {
      // given
      var instance = new Checky('.painel');

      instance.opt.max  = 2;
      instance.opt.min  = 2;
      instance.opt.type = 'radio';

      // when
      instance._configure();

      // then
      expect(instance.opt.min).toEqual(0);
      expect(instance.opt.max).toEqual(1);
    });
  });

  context('with type is checkbox', function() {
    it ('keeps the default', function() {
      // given
      var instance = new Checky('.painel');

      instance.opt.max  = 2;
      instance.opt.min  = 2;
      instance.opt.type = 'checkbox';

      // when
      instance._configure();

      // then
      expect(instance.opt.min).toEqual(2);
      expect(instance.opt.max).toEqual(2);
    });
  });
});
