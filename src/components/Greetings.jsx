import React from "react";

export default function Greetings(props) {
  let greetingText;
  if (props.lang === "de") {
    greetingText = "Hallo";
  } else if (props.lang === "fr") {
    greetingText = "Bonjour";
  } else {
    greetingText = "Hello";
  }
  return (
    <h3>
      {greetingText} {props.children}
    </h3>
  );
}
