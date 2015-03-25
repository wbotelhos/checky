describe('#_addInitials', function() {
  'use strict';

  beforeEach(function() {
    this.el = Helper.create();
  });

  afterEach(function() {
    Helper.clear();
  });

  it ('adds to checked list all checked items', function() {
    // given
    var
      instance = new Checky('.painel'),
      first    = instance.items[0];

    first.checked = true;

    // when
    instance._addInitials();

    // then
    expect(instance.checkeds).toEqual([first]);
  });
});
