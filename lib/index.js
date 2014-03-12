var domify = require('domify')
  , modal = require('modal')
  , reactive = require('reactive')
  , shortcuts = require('shortcuts')
  , template = require('./index.html');

module.exports = ShortcutsModal;

function ShortcutsModal (target) { 
  if (!(this instanceof ShortcutsModal)) return new ShortcutsModal(target);
  this.dictionary = {};
  this.view = reactive('<p>Hello {name}!</p>');
  this.target = target || document.body;
  return this;
}

ShortcutsModal.prototype.show = function () {
  this.modal = modal(this.view.el).addClass('shortcuts_modal');
  this.modal.show();
  return this;
}