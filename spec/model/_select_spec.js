describe('#_select', function() {
  'use strict';

  beforeEach(function() {
    this.el = Helper.create();
  });

  afterEach(function() {
    Helper.clear();
  });

  it ('selects the item and put it on selecteds list', function() {
    // given
    var
      instance = new Checky('.painel'),
      first    = instance.items[0];

    // when
    instance._select(first);

    // then
    expect(instance.checkeds).toEqual([first]);
    expect(instance.checkeds[0].checked).toBeTruthy();
  });
});
