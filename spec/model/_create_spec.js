describe('#_create', function() {
  'use strict';

  beforeEach(function() {
    this.el = Helper.create();
  });

  afterEach(function() {
    Helper.clear();
  });

  context('when is checkbox', function() {
    it ('calls the right binds', function() {
      // given
      var instance = new Checky('.painel');

      spyOn(instance, '_addInitials');
      spyOn(instance, '_bindItems');
      spyOn(instance, '_configure');
      spyOn(instance, '_inspect');

      // when
      instance._create();

      // then
      expect(instance._addInitials).toHaveBeenCalled();
      expect(instance._bindItems).toHaveBeenCalled();
      expect(instance._configure).toHaveBeenCalled();
      expect(instance._inspect).toHaveBeenCalled();
    });
  });

  context('when is radio', function() {
    it ('calls the right binds', function() {
      // given
      var instance = new Checky('.painel');

      instance.opt.type = 'radio';

      spyOn(instance, '_addInitials');
      spyOn(instance, '_bindItems');
      spyOn(instance, '_configure');
      spyOn(instance, '_inspect');

      // when
      instance._create();

      // then
      expect(instance._addInitials).not.toHaveBeenCalled();
      expect(instance._bindItems).toHaveBeenCalled();
      expect(instance._configure).toHaveBeenCalled();
      expect(instance._inspect).not.toHaveBeenCalled();
    });
  });
});
