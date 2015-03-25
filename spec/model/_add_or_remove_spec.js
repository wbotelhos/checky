describe('#add_or_remove', function() {
  'use strict';

  beforeEach(function() {
    this.el = Helper.create();
  });

  afterEach(function() {
    Helper.clear();
  });

  context('when checked', function() {
    it ('is added', function() {
      // given
      var
        instance = new Checky('.painel'),
        first    = instance.items[0];

      first.checked = true;

      // when
      instance._addOrRemove(first);

      // then
      expect(instance.checkeds).toEqual([first]);
    });
  });

  context('when unchecked', function() {
    it ('is removed', function() {
      // given
      var
        instance = new Checky('.painel'),
        items    = instance.items;

      instance.checkeds = [items[0], items[1], items[2]];

      // when
      instance._addOrRemove(items[1]);

      // then
      expect(instance.checkeds).toEqual([items[0], items[2]]);
    });
  });
});
