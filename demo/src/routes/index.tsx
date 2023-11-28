import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <p>
        Excited to take you on this journey to building  <br /> blazing fast applications with QwikJs
        <br />
       
      </p>
      <p>
     Happy Qwik-ing.
       
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Building Faster Websites with QwikJs",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
