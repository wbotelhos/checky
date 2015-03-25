/*!
 * jQuery Checky - A Checkbox Restrictor
 *
 * The MIT License
 *
 * @author  : Washington Botelho
 * @doc     : http://wbotelhos.com/checky
 * @version : 0.1.0
 *
 */

// done
function Checky(element, options) {
  'use strict';

  this.element  = element;
  this.self     = $(element);
  this.opt      = $.extend(true, {}, $.fn.checky.defaults, options);

  this.items    = this.self.find(this.opt.item);
  this.total    = this.items.length;
  this.checkeds = [];
}

// done
Checky.prototype._addInitials = function() {
  'use strict';

  var that = this;

  this._checkeds().each(function() {
    that.checkeds.push(this);
  });
};

// done
Checky.prototype._addOrRemove = function(item) {
  'use strict';

  if (item.checked) {
    this.checkeds.push(item);
  } else {
    var index = this.checkeds.indexOf(item);

    if (index >= 0) {
      this.checkeds.splice(index, 1);
    }

    this._enableOrDisable();
  }
};

// done
Checky.prototype._bindItems = function() {
  'use strict';

  var that = this;

  that.items.on('change', function() {
    if (that.opt.type === 'radio') {
      that._clean(this);
    } else {
      that._addOrRemove(this);
      that._inspect();
    }
  });
};

// done
Checky.prototype._clean = function(item) {
  'use strict';

  this.items.filter(function() {
    return this !== item;
  }).removeAttr('checked');
};

// done
Checky.prototype._configure = function() {
  'use strict';

  if (this.opt.type === 'radio') {
    this.opt.min = 0;
    this.opt.max = 1;
  }
};

// done
Checky.prototype._create = function() {
  'use strict';

  this._configure();
  this._bindItems();

  if (this.opt.type !== 'radio') {
    this._addInitials();
    this._inspect();
  }
};

// done
Checky.prototype._checkeds = function() {
  'use strict';

  return this.items.filter(':checked');
};

// done
Checky.prototype._disable = function(boo) {
  'use strict';

  boo = boo === undefined || boo;

  for (var i = 0; i < this.items.length; i++) {
    if (this.checkeds.indexOf(this.items[i]) < 0) {
      this.items[i].disabled = boo;
    }
  }
};

// done
Checky.prototype._enableOrDisable = function() {
  'use strict';

  if (this.opt.style === 'disable') {
    this._disable(false);
  }
};

// done
Checky.prototype._max = function() {
  'use strict';

  return this.opt.max && this._checkeds().length >= this.opt.max;
};

// done
Checky.prototype._min = function() {
  'use strict';

  return this.opt.min && this._checkeds().length < this.opt.min;
};

// done
Checky.prototype._select = function(item) {
  'use strict';

  item.checked = true;

  this.checkeds.push(item);
};

// done
Checky.prototype._inspect = function() {
  'use strict';

  if (this._max()) {
    this['_' + this.opt.style].call(this);
  } else if (this._min()) {
    var uncheckeds = this._uncheckeds();

    for (var i = 0; i < this._toSelect(); i++) {
      this._select(uncheckeds[i]);
    }
  }
};

// done
Checky.prototype._toSelect = function() {
  'use strict';

  if (!this.opt.min) {
    return 0;
  }

  return this.opt.min - this._checkeds().length;
};

// done
Checky.prototype._uncheckeds = function() {
  'use strict';

  return this.items.filter(':not(:checked)');
};

// done
Checky.prototype._unselect = function() {
  'use strict';

  var item = this.checkeds.shift();

  item.checked = false;
};

(function($) {
  'use strict';

  // done
  $.fn.checky = function(options) {
    var
      args   = Array.prototype.slice.call(arguments, 1),
      method = Checky.prototype[options];

    return this.each(function() {
      var
        self     = $(this),
        instance = self.data('checky');

      if (!instance) {
        instance = new Checky(this, options);

        instance._create();

        self.data('checky', instance);
      }

      if (method) {
        method.apply(instance, args);
      } else if (options && typeof options !== 'object') {
        $.error('Method ' + options + ' does not exist!');
      }
    });
  };

  // done
  $.fn.checky.defaults = {
    item  : '.checky',
    max   : undefined,
    min   : undefined,
    style : 'disable',
    type  : 'checkbox'
  };
})(jQuery);
