/*
Single-page React app with client-side routing and back4ap backend.
Stefan Korecko, 2020

partially inspired by 
https://reactjs.org/docs/faq-ajax.html
https://reactjs.org/docs/forms.html
https://bezkoder.com/react-crud-web-api/
*/

import React from "react";

/*
This is a function component as it is defined as
a function that returns JSX to be rendered.
If a component has jus the render() method,
it is reccomended to define it in this way.
Read more at:
https://reactjs.org/docs/components-and-props.html
*/
export function Welcome() {
  return (
    <main>
      <article>
        <h2>Welcome!</h2>

        <p>
          Welcome to my page. My name is <b>Ján ŠK. Trieska</b>. I live in{" "}
          <i>Woodly Woodens</i>. I am a <i>woodcutter</i>. I love trees and I
          would like to tell you something about my most favourite ones.
        </p>
      </article>
    </main>
  );
}

export function Articles() {
  return (
    <main>
      <article>
        <h2>Pine</h2>
        <figure>
          <img
            src="./fig/pineBw.png"
            height="150"
            title="fig.pine"
            alt="pine"
          />
        </figure>

        <p>Pine is a softwood coniferous tree.</p>

        <dl>
          <dt>Latin name:</dt>
          <dd>Pinus</dd>
          <dt>Division:</dt>
          <dd>Pinophyta</dd>
          <dt>Class:</dt>
          <dd>Pinopsida</dd>
        </dl>
      </article>
      <article>
        <h2>Oak</h2>
        <figure>
          <img src="./fig/oak.png" height="150" title="fig.oak" alt="oak" />
        </figure>
        <p>
          Oak is a deciduous tree with hardwood. It lives long and grows slowly.
          Its leaves are simple, lobate and fall off before the winter.
        </p>
      </article>
    </main>
  );
}

//The rest is not used in the final application.

export function Opinions() {
  return (
    <main>
      <article>
        <h2>Visitor Opinions</h2>
      </article>
    </main>
  );
}

export function AddOpinion() {
  return (
    <main>
      <article>
        <h2>Add Opinion</h2>
      </article>
    </main>
  );
}
