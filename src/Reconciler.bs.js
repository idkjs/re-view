// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Node$ReView = require("./Node.bs.js");
var Utils$ReView = require("./Utils.bs.js");
var RenderContext$ReView = require("./RenderContext.bs.js");
var ModuleResolver$ReView = require("./ModuleResolver.bs.js");

function unmount(node, parent, index) {
  if (!Node$ReView.isUnmounted(node) && !node.unmountSchedule) {
    node.unmountSchedule = true;
    return Utils$ReView.scheduleAsync((function (param) {
                  node.unmountSchedule = false;
                  node.forEachState((function (param, state) {
                          if (state !== undefined) {
                            var match = state;
                            if (match.tag === /* EffectCleanup */7) {
                              var match$1 = match[0];
                              if (match$1 !== undefined) {
                                return Curry._1(match$1, /* () */0);
                              } else {
                                return /* () */0;
                              }
                            } else {
                              return /* () */0;
                            }
                          } else {
                            return /* () */0;
                          }
                        }));
                  var nodes = node.nodes;
                  List.iteri((function (i, child) {
                          return unmount(child, node, i);
                        }), nodes);
                  parent.clearNode(index);
                  node.unmount();
                  return /* () */0;
                }));
  } else {
    return 0;
  }
}

function request(node, parent, index, root) {
  if (!Node$ReView.isUnmounted(node) && !node.mountSchedule) {
    node.mountSchedule = true;
    return Utils$ReView.scheduleAsync((function (param) {
                  if (Node$ReView.isUnmounted(node)) {
                    return 0;
                  } else {
                    node.mountSchedule = false;
                    RenderContext$ReView.setContext({
                          node: node,
                          parent: parent,
                          root: root,
                          slot: {
                            contents: 0
                          },
                          index: index
                        });
                    node.mount(parent);
                    var component = node.component;
                    if (component !== undefined) {
                      var childNode = Curry._1(component.render, node.props);
                      var render = ModuleResolver$ReView.getModule("render");
                      if (childNode !== undefined) {
                        Curry._4(render, Caml_option.valFromOption(childNode), node, 0, Caml_option.some(root));
                      } else {
                        var match = node.getNode(0);
                        if (match !== undefined) {
                          unmount(Caml_option.valFromOption(match), node, 0);
                        }
                        
                      }
                    }
                    RenderContext$ReView.popContext(/* () */0);
                    parent.setNode(index, node);
                    node.forEachState((function (id, state) {
                            if (state !== undefined) {
                              var match = state;
                              if (match.tag === /* Effect */6) {
                                var cleanup = Curry._1(match[0], /* () */0);
                                node.setState(id, /* EffectCleanup */Block.__(7, [cleanup]));
                                return /* () */0;
                              } else {
                                return /* () */0;
                              }
                            } else {
                              return /* () */0;
                            }
                          }));
                    return /* () */0;
                  }
                }));
  } else {
    return 0;
  }
}

function render(node, parent, index, root) {
  var actualRoot = root !== undefined ? Caml_option.valFromOption(root) : parent;
  var actualIndex = index !== undefined ? index : 0;
  var renderedNode = parent.getNode(actualIndex);
  if (renderedNode !== undefined) {
    var actualNode = Caml_option.valFromOption(renderedNode);
    if (Caml_obj.caml_notequal(actualNode.component, node.component)) {
      unmount(actualNode, parent, actualIndex);
      return request(node, parent, actualIndex, actualRoot);
    } else if (Caml_obj.caml_notequal(Node$ReView.toEquatable(actualNode), Node$ReView.toEquatable(node))) {
      node.replicate(actualNode);
      return request(node, parent, actualIndex, actualRoot);
    } else {
      return 0;
    }
  } else {
    return request(node, parent, actualIndex, actualRoot);
  }
}

ModuleResolver$ReView.setModule("render", render);

exports.unmount = unmount;
exports.request = request;
exports.render = render;
/*  Not a pure module */
