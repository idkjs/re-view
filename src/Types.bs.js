// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


function map(tag) {
  switch (tag) {
    case /* Component */0 :
        return "Component";
    case /* Host */1 :
        return "Host";
    case /* Root */2 :
        return "Root";
    case /* Fragment */3 :
        return "Fragment";
    case /* Basic */4 :
        return "Basic";
    case /* Memo */5 :
        return "Memo";
    case /* MemoBasic */6 :
        return "MemoBasic";
    case /* ErrorBoundary */7 :
        return "ErrorBoundary";
    case /* ContextProvider */8 :
        return "ContextProvider";
    case /* ContextConsumer */9 :
        return "ContextConsumer";
    
  }
}

var Fiber = {
  map: map
};

function map$1(tag) {
  switch (tag) {
    case /* None */0 :
        return "None";
    case /* Placement */1 :
        return "Placement";
    case /* Update */2 :
        return "Update";
    case /* Delete */3 :
        return "Delete";
    case /* Replace */4 :
        return "Replace";
    
  }
}

var Work = {
  map: map$1
};

function map$2(tag) {
  switch (tag) {
    case /* Callback */0 :
        return "Callback";
    case /* Constant */1 :
        return "Constant";
    case /* Context */2 :
        return "Context";
    case /* Dependency */3 :
        return "Dependency";
    case /* Effect */4 :
        return "Effect";
    case /* ForceUpdate */5 :
        return "ForceUpdate";
    case /* LayoutEffect */6 :
        return "LayoutEffect";
    case /* Memo */7 :
        return "Memo";
    case /* State */8 :
        return "State";
    case /* SetState */9 :
        return "SetState";
    case /* ReducerState */10 :
        return "ReducerState";
    case /* ReducerDispatch */11 :
        return "ReducerDispatch";
    case /* Mutable */12 :
        return "Mutable";
    
  }
}

var Hook = {
  map: map$2
};

var Tags = {
  Fiber: Fiber,
  Work: Work,
  Hook: Hook
};

var Reference = {};

var $$Element = {};

var Component = {};

var Children = {};

exports.Tags = Tags;
exports.Reference = Reference;
exports.$$Element = $$Element;
exports.Component = Component;
exports.Children = Children;
/* No side effect */
