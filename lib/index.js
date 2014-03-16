var bind = require('bind')
  , modal = require('modal')
  , reactive = require('reactive')
  , shortcuts = require('shortcuts')
  , template = require('./index.html');

module.exports = ShortcutsModal;

function ShortcutsModal (triggerKey, target) {
  if (!(this instanceof ShortcutsModal)) return new ShortcutsModal(triggerKey, target);

  var template = '<ul><li each="people">{name} - {keycombo}</li></ul>';
  this.model = { people: [{name: 'Sally', keycombo: 'hai'}, {name: 'Billy', keycombo: 'herro'}] };
  this.view = reactive(template, this.model);
  
  this.target = target || document.body;
  this.bind(triggerKey || "?");
  return this;
}

ShortcutsModal.prototype.show = function () {
  this.modal = modal(this.view.el).addClass('shortcuts_modal');
  this.modal.show();
  return this;
}

ShortcutsModal.prototype.bind = function (triggerKey) {
  this.shortcuts = shortcuts(document, this);
  this.bindKey(triggerKey, bind(this, this.show));
  return this;
}

ShortcutsModal.prototype.bindKey = function (key, func) {
  // Have to wrap in helper so we can
  // pass the key string through as well 
  this.bindHelper = function (e) {
    if (func) func(key);
    this.handleShortcut(key, e)
  }
  this.shortcuts.bind(key, "bindHelper");
}

ShortcutsModal.prototype.handleShortcut = function (key, event) {
  console.log(key, event);
  return this;
}