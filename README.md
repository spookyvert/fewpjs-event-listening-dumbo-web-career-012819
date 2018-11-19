# Interacting with the DOM via JavaScript Event Listeners - Codealong

## Learning Goals

- Demonstrate triggering event listeners on DOM nodes with `addEventListener()`

## Introduction

We know how to manipulate nodes in the DOM by using JavaScript. We also know
that events can be _handled_ and can do work inside _callback functions_ when the
event is triggered. JavaScript programmers often say we are "listening" for
an event in order to "execute" or "call" a _callback function_.

In order to teach nodes (or, "elements") to "listen" for an event, we use `addEventListener()`.
It allows us to associate "hearing" an event with executing a callback.

## Demonstrate Defining Event Listeners on DOM Nodes with `addEventListener()`

`addEventListener()` takes two arguments:

1. the name of the event
2. a _callback function_ to "handle" the event

Start by adding a listener for `click` event on the `main#main` element
in `index.html`.  Take a look at `index.html` in the browser. When you
click in the `main#main` area, nothing happens. Now let's set up
some _event handling_.

```js
const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});
```

### Demonstrate Preventing the Default Behavior for DOM Nodes with `preventDefault()`

Let's test out preventing the default behavior of the input by keeping it from
receiving the "g" character.

```js
const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    console.log('default prevented')
    return e.preventDefault()
  } else {
    console.log('Not a "g"')
  }
})
```

Now try to type "g" in the input — not working, right?

Every DOM `event` comes with a `preventDefault` property. `preventDefault` is a
function that, when called, will prevent the, well, default event from taking
place. It provides us an opportunity to intercept and tweak user interactions
(usually in more helpful ways than preventing them from typing "g").

Another, related event property is called `stopPropagation`. Like
`preventDefault`, `stopPropagation` is a function that, when called, interrupts
the event's normal behavior. In this case, it stops the event from triggering
other nodes in the DOM that might be listening for the same event. Yes, one
action can trigger multiple events!

### Explain the Difference Between Bubbling and Capturing Events

In JavaScript, all click events "bubble up" the DOM. The `document` object knows
about every event that is triggered on a page. When one element is nested inside
a second element, and both elements have registered a listener for the same
event (a "click", for example). In most cases, that's not the desired behavior.
Imagine if you had a large series of nested elements all with click events.
Firing the click event of the innermost child would trigger the click events of
every single parent.

DOM events propagate by bubbling (starting at the target node and moving up the
DOM tree to the root) and capturing (starting from the target node's parent
elements and propagating down the tree until it reaches the target) — by
default, events nowadays all bubble. We can verify this behavior by attaching
listeners to those nested `div`s in `index.html`.

```js
let divs = document.querySelectorAll('div');

function bubble(e) {
  // remember all of those fancy DOM node properties?
  // we're making use of them to get the number
  // in each div here!

  // if `this` is a bit confusing, don't worry —
  // for now, know that it refers to the div that
  // is triggering the current event handler.
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
```

Now click on the `div` containing "5". You should see

```js
5 bubbled
4 bubbled
3 bubbled
2 bubbled
1 bubbled
```

In the console, you can see the event starts at `div` 5, and then it bubbles up
to the topmost node. Along the way, it triggers any other nodes that are
listening for the event — in this case, `'click'`.
||||||| merged common ancestors
### Demonstrate Preventing the Default Behavior for DOM Nodes with `preventDefault()`

Let's test out preventing the default behavior of the input by keeping it from
receiving the "g" character.

```js
const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    console.log('default prevented');
    return e.preventDefault();
  } else {
    console.log('Not a "g"');
  }
});
```

Now try to type "g" in the input — not working, right?

Every DOM `event` comes with a `preventDefault` property. `preventDefault` is a
function that, when called, will prevent the, well, default event from taking
place. It provides us an opportunity to intercept and tweak user interactions
(usually in more helpful ways than preventing them from typing "g").

Another, related event property is called `stopPropagation`. Like
`preventDefault`, `stopPropagation` is a function that, when called, interrupts
the event's normal behavior. In this case, it stops the event from triggering
other nodes in the DOM that might be listening for the same event. Yes, one
action can trigger multiple events!

### Explain the Difference Between Bubbling and Capturing Events

In JavaScript, all click events "bubble up" the DOM. The `document` object knows
about every event that is triggered on a page. When one element is nested inside
a second element, and both elements have registered a listener for the same
event (a "click", for example). In most cases, that's not the desired behavior.
Imagine if you had a large series of nested elements all with click events.
Firing the click event of the innermost child would trigger the click events of
every single parent.

DOM events propagate by bubbling (starting at the target node and moving up the
DOM tree to the root) and capturing (starting from the target node's parent
elements and propagating down the tree until it reaches the target) — by
default, events nowadays all bubble. We can verify this behavior by attaching
listeners to those nested `div`s in `index.html`.

```js
let divs = document.querySelectorAll('div');

function bubble(e) {
  // remember all of those fancy DOM node properties?
  // we're making use of them to get the number
  // in each div here!

  // if `this` is a bit confusing, don't worry —
  // for now, know that it refers to the div that
  // is triggering the current event handler.
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
```

Now click on the `div` containing "5". You should see

```js
5 bubbled
4 bubbled
3 bubbled
2 bubbled
1 bubbled
```

In the console, you can see the event starts at `div` 5, and then it bubbles up
to the topmost node. Along the way, it triggers any other nodes that are
listening for the event — in this case, `'click'`.
=======
When you click inside of `main#main`, **_now_**, you will get an alert box.
>>>>>>> origin/master

Let's review the parts of this code:

1. The node that will be doing the listening. We store that node in the `main` constant
2. The invocation of `addEventListener` on the node that will be doing the listening
  1. The first argument is the event name to listen for
  2. The second argument is the _callback function_. It's work that will be executed
     when the node "hears" the event

## Conclusion

Edit `index.js` to rewrite your codealong JavaScript code.

## Resources

- [MDN - Web Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [StackOverflow - Bubbling and Capturing](http://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing)
- [QuirksMode - Event order](http://www.quirksmode.org/js/events_order.html)

[events]: https://developer.mozilla.org/en-US/docs/Web/Events
[instructions]: http://help.learn.co/workflow-tips/github/how-to-manually-open-a-lab
[stackoverflow]: http://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing
[quirks]: http://www.quirksmode.org/js/events_order.html
[help]: http://help.learn.co/the-learn-ide/common-ide-questions/viewing-html-pages-in-the-learn-ide

<p class='util--hide'>View <a href='https://learn.co/lessons/fewpjs-event-listening'>Interacting with the DOM via JavaScript Event Listeners</a> on Learn.co and start learning to code for free.</p>
