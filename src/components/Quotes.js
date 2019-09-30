import React from "react";
import $ from "jquery"
import { Card, Button } from "react-bootstrap";

export default class Quotes extends React.Component {
  constructor() {
    super();
    this.current = null;
  }

  state = {
    quotes: null,
    current: null
  };

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(data => data.json())
      .then(data => this.setState({ quotes: data.quotes }));
  }

  getRandomColor() {
    /* let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    } */
    document.body.style.setProperty(
      "--var-back",
      `rgb(${this.getRandomNumber(0, 255)}, ${this.getRandomNumber(
        0,
        255
      )}, ${this.getRandomNumber(0, 255)})`
    );
    document.body.style.setProperty(
      "--primary",
      `rgb(${this.getRandomNumber(0, 255)}, ${this.getRandomNumber(
        0,
        255
      )}, ${this.getRandomNumber(0, 255)})`
    );
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getCurrentQuote() {
    this.current = this.state.quotes[this.getRandomNumber(0, 101)];
    $("#tweet-quote").on("click", function() {
      window.open("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
      encodeURIComponent('"' + this.current.quote + '" ' + this.current.author), 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
    });
  }

  changeQuote = () => {
    this.getCurrentQuote();
    this.forceUpdate();
  };

  render() {
    console.log(this.state);
    if (this.state.quotes !== null) {
      this.getCurrentQuote();
      return (
        <Card id="quote-box" border="dark" text="secondary">
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p id="text"> {this.current.quote} </p>
              <footer id="author" className="blockquote-footer">
                {this.current.author}
              </footer>
            </blockquote>
            {this.getRandomColor()}
          </Card.Body>
          <Card.Footer
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              id="new-quote"
              className="btn_for_background"
              onClick={this.changeQuote}
            >
              Get new quote
            </Button>
            <a
              id="tweet-quote"
              className="btn_for_background_link"
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent('"' + this.current.quote + '" ' + this.current.author)}`}
              target="_blank"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </Card.Footer>
        </Card>
      );
    }
    return null;
  }
}
