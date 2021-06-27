/**
 * A custom-article web component
 * @param title - for custom title
 * @param excerpt - for custom excerpt
 * @param src - for custom image
 * otherwise uses default content
 */
const articleTemplate = document.createElement("template");

articleTemplate.innerHTML = `
    <style>
        @import "./src/custom-article-style.css";
    </style>

    <div class="container">
            <article>
                <img class="article-img"
                src="./src/img-example.jpg"/>
                <div class="text-wrapper">
                    <h3>Lorem Ipsum Title</h3>
                    <p>Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum Lorem Ipsum  Excerpt</p>
                </div>
            </article>
        </div>

`;

class CustomArticleComponent extends HTMLElement {
  constructor() {
    super();

    const title = this.getAttribute("title");
    const src = this.getAttribute("src");
    const excerpt = this.getAttribute("excerpt");

    const articleNode = articleTemplate.content.cloneNode(true);

    if (!!title) articleNode.querySelector("h3").innerHTML = title;
    if (!!src) articleNode.querySelector("img").setAttribute("src", src);
    if (!!excerpt) articleNode.querySelector("p").innerHTML = excerpt;

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(articleNode);
  }
}

customElements.define("custom-article", CustomArticleComponent);
