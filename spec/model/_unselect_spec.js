describe('#_unselect', function() {
  'use strict';

  beforeEach(function() {
    this.el = Helper.create();
  });

  afterEach(function() {
    Helper.clear();
  });

  it ('removes and unchecks the first of the quee', function() {
    // given
    var
      instance = new Checky('.painel'),
      first    = instance.items[0];

    instance.checkeds = [first];

    // when
    instance._unselect();

    // then
    expect(instance.checkeds).toEqual([]);
    expect(first.checked).toBeFalsy();
  });
});
