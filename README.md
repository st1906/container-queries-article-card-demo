# Container Queries Article Card Demo
Demo of using experimental tech container-queries to build an article feed layout.

NOTE: This demo uses the syntax and features supported by Chrome Canary on 26th June 2021.
Container-queries are still under development and subject to change, thus this code might/will get outdated.
For example, to define a container this demo uses `contain: layout style inline-width`. The proposal changed the keyword to `container: size | inline-size | block-size | etc...`, but that change isn’t implemented in Chrome Cannery at the time of writing of this doc. 

# Demo
You can check the deployed version of the demo on [Github Pages](https://st1906.github.io/container-queries-article-card-demo/)

# Starting

Clone this repositiory on your local machine. Then run:

```
yarn
```
```
yarn start
```
# Other

Container query is used for the `custom-article.js` component, in the corresponding stylesheet `custom-article-style.css`.

Best place for following Container Query standard development is ccswg project board on [Github](https://github.com/w3c/csswg-drafts/projects/18).
Work in progess draft standard can be accessed at [css-contain-3](https://drafts.csswg.org/css-contain-3/).
