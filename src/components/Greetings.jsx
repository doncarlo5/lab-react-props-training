import React from "react";

export default function Greetings(props) {
  // let greetingText;
  // if (props.lang === "de") {
  //   greetingText = "Hallo";
  // } else if (props.lang === "fr") {
  //   greetingText = "Bonjour";
  // } else {
  //   greetingText = "Hello";
  // }

  const languages = {
    de: "Halo",
    fr: "Salut",
    en: "Hi",
  };

  return (
    <h3>
      {languages[lang]} {props.children}
    </h3>
  );
}
