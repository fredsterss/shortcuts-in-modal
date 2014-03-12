var domify = require('domify')
  , modal = require('modal')
  , reactive = require('reactive')
  , shortcuts = require('shortcuts')
  , template = require('./index.html');

module.exports = ShortcutsModal;

function ShortcutsModal (target) { 
  if (!(this instanceof ShortcutsModal)) return new ShortcutsModal(target);
  this.target = target || document.body;
  this.model = {
    people: []
  };
  this.view = {};
  return this;
}

ShortcutsModal.prototype.show = function () {
  var template = '<ul><li each="people">{name} - {keycombo}</li></ul>';
  this.view = reactive(template, this.model);
  this.modal = modal(this.view.el).addClass('shortcuts_modal');
  this.modal.show();
  return this;
}