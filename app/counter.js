"use strict";

import h from 'snabbdom/h';

const INC = Symbol('inc');
const INCTWO = Symbol('inc2');
const DEC = Symbol('dec');
const DECTWO = Symbol('dec2');

// model : Number
function view(count, handler) { 
  return h('div', [
    h('button', {
      on   : { click: handler.bind(null, {type: INC}) }
    }, '+'),
    h('button', {
      on   : { click: handler.bind(null, {type: DEC}) }
    }, '-'),
	
	h('button', {
      on   : { click: handler.bind(null, {type: INCTWO}) }
    }, '++'),
	h('button', {
      on   : { click: handler.bind(null, {type: DECTWO}) }
    }, '--'),
	
    h('div', `Count : ${count}`),
  ]); 
}


function update(count, action) {
  return  action.type === INC ? count + 1
        : action.type === DEC ? count - 1
		: action.type === INCTWO ? count + 2
		: action.type === DECTWO ? count - 2
        : count;
}

export default { view, update, actions : { INC, DEC } }