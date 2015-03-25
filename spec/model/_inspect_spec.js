describe('#_inspect', function() {
  'use strict';

  beforeEach(function() {
    this.el = Helper.create();
  });

  afterEach(function() {
    Helper.clear();
  });

  context('with more than max', function() {
    context('with more', function() {
      context('when style is unselect', function() {
        it ('calls unselect method', function() {
          // given
          var instance = new Checky('.painel'),
            items    = instance.items,
            first    = items[0],
            second   = items[1];

          instance.opt.max   = 1;
          instance.opt.style = 'unselect';

          spyOn(instance, '_unselect');

          first.checked  = true;
          second.checked = true;

          // when
          instance._inspect();

          // then
          expect(instance._unselect).toHaveBeenCalled();
        });
      });

      context('when style is disable', function() {
        it ('calls disable method', function() {
          // given
          var
            instance = new Checky('.painel'),
            items    = instance.items,
            first    = items[0],
            second   = items[1];

          instance.opt.max   = 1;
          instance.opt.style = 'disable';

          spyOn(instance, '_disable');

          first.checked  = true;
          second.checked = true;

          // when
          instance._inspect();

          // then
          expect(instance._disable).toHaveBeenCalled();
        });
      });
    });
  });

  context('with less then min', function() {
    it ('puts the first unchecked on queue', function() {
      // given
      var
        instance = new Checky('.painel'),
        items    = instance.items,
        first    = items[0],
        second   = items[1];

      second.checked    = true;
      instance.checkeds = [second];
      instance.opt.min  = 2;

      // when
      instance._inspect();

      // then
      expect(instance.checkeds).toEqual([second, first]);
    });

    it ('checks the first unchecked one', function() {
      // given
      var
        instance = new Checky('.painel'),
        items    = instance.items,
        first    = items[0];

      instance.opt.min = 2;

      // when
      instance._inspect();

      // then
      expect(instance.checkeds[0].checked).toBeTruthy();
    });
  });
});
