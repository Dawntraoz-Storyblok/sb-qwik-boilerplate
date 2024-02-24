import { component$ } from '@builder.io/qwik';
import StoryblokComponent from "~/components/storyblok/component";
// Editing experience
import { storyblokEditable } from "@storyblok/js";

interface PageProps {
  blok: {
    body: [];
  };
}

export default component$<PageProps>((props) => {
  return (
    <main {...storyblokEditable(props.blok)} class="px-4">
    {props.blok.body.map((block) => {
      return (
        <StoryblokComponent key={block._uid} blok={block} />
      )
    })}
    </main>
  );
});