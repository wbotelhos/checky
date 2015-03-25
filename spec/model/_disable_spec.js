describe('#_disable', function() {
  'use strict';

  beforeEach(function() {
    this.el = Helper.create();
  });

  afterEach(function() {
    Helper.clear();
  });

  context('without parameter', function() {
    xit ('disables the item outside the quee', function() {
      // given
      var
        instance = new Checky('.painel'),
        items    = instance.items,
        first    = items[0],
        second   = items[1],
        third    = items[2];

      first.checked      = true;
      instance.checkeds  = [first];
      instance.opt.max   = 1;
      instance.opt.style = 'disable';

      // when
      instance._disable();

      // then
      expect(instance.checkeds).toEqual([first]);
      expect(first.disabled).toBeFalsy();
      expect(second.disabled).toBeTruthy();
      expect(third.disabled).toBeTruthy();
    });
  });

  context('with parameter as true', function() {
    xit ('disables the item outside the quee', function() {
      // given
      var
        instance = new Checky('.painel'),
        items    = instance.items,
        first    = items[0],
        second   = items[1],
        third    = items[2];

      first.checked      = true;
      instance.checkeds  = [first];
      instance.opt.max   = 1;
      instance.opt.style = 'disable';

      // when
      instance._disable(true);

      // then
      expect(instance.checkeds).toEqual([first]);
      expect(first.disabled).toBeFalsy();
      expect(second.disabled).toBeTruthy();
      expect(third.disabled).toBeTruthy();
    });
  });

  context('with parameter as false', function() {
    it ('enables the item outside the quee', function() {
      // given
      var
        instance = new Checky('.painel'),
        items    = instance.items,
        first    = items[0],
        second   = items[1],
        third    = items[2];

      first.checked      = true;
      instance.checkeds  = [first];
      instance.opt.max   = 1;
      instance.opt.style = 'disable';
      second.disabled    = true;
      third.disabled     = true;

      // when
      instance._disable(false);

      // then
      expect(first.disabled).toBeFalsy();
      expect(second.disabled).toBeFalsy();
      expect(third.disabled).toBeFalsy();
    });
  });
});
