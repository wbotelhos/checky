describe('#_bindItems', function() {
  'use strict';

  beforeEach(function() {
    this.el = Helper.create();
  });

  afterEach(function() {
    Helper.clear();
  });

  it ('binds change on items with inspection o selecteds as callback', function() {
    // given
    var instance = new Checky('.painel');

    spyOn(instance.items, 'on');

    // when
    instance._bindItems();

    // then
    expect(instance.items.on).toHaveBeenCalledWith('change', jasmine.any(Function));
  });

  context('on change', function() {
    context('when type is checkbox', function() {
      it ('inpects the items state', function() {
        // given
        var
          instance = new Checky('.painel'),
          first    = instance.items.first();

        instance._bindItems();

        spyOn(instance, '_inspect');

        // when
        first.trigger('change');

        // then
        expect(instance._inspect).toHaveBeenCalled();
      });

      it ('adds or remove items checked list', function() {
        // given
        var
          instance = new Checky('.painel'),
          first    = instance.items.first();

        instance._bindItems();

        spyOn(instance, '_addOrRemove');

        // when
        first.trigger('change');

        // then
        expect(instance._addOrRemove).toHaveBeenCalledWith(first[0]);
      });
    });

    context('when type is radio', function() {
      it ('does not inpects the items state', function() {
        // given
        var
          instance = new Checky('.painel'),
          first    = instance.items.first();

        first.attr('type', 'radio');

        instance.opt.type = 'radio';

        instance._bindItems();

        spyOn(instance, '_inspect');

        // when
        first.trigger('change');

        // then
        expect(instance._inspect).not.toHaveBeenCalled();
      });

      it ('adds or remove items checked list', function() {
        // given
        var
          instance = new Checky('.painel'),
          first    = instance.items.first();

        first.attr('type', 'radio');

        instance.opt.type = 'radio';

        instance._bindItems();

        spyOn(instance, '_addOrRemove');

        // when
        first.trigger('change');

        // then
        expect(instance._addOrRemove).not.toHaveBeenCalled();
      });

      it ('cleans', function() {
        // given
        var
          instance = new Checky('.painel'),
          first    = instance.items.first();

        first.attr('type', 'radio');

        instance.opt.type = 'radio';

        instance._bindItems();

        spyOn(instance, '_clean');

        // when
        first.trigger('change');

        // then
        expect(instance._clean).toHaveBeenCalledWith(first[0]);
      });
    });
  });
});
