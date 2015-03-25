describe('#_clean', function() {
  'use strict';

  beforeEach(function() {
    this.el = Helper.create();
  });

  afterEach(function() {
    Helper.clear();
  });

  it ('lets just the current changes item selected', function() {
    // given
    var
      instance = new Checky('.painel'),
      items    = instance.items,
      first    = items[0],
      second   = items[1],
      third    = items[2];

    instance.opt.type = 'radio';

    first.type     = 'radio';
    first.name     = 'first';
    first.checked  = true;

    second.type    = 'radio';
    second.name    = 'second';
    second.checked = true;

    third.type     = 'radio';
    third.name     = 'third';
    third.checked  = true;

    // when
    var result = instance._clean(second);

    // then
    expect(first.checked).toBeFalsy();
    expect(second.checked).toBeTruthy();
    expect(third.checked).toBeFalsy();
  });
});
