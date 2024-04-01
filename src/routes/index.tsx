import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import pjs from "@jsr/patrickjs__test-package";

export default component$(() => {
  const message = useSignal(pjs(" I'm from the Server"));
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    message.value = pjs(" I'm visible on the Client");
  });
  return (
    <>
      <h1>Hi 👋</h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        {message.value}
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
