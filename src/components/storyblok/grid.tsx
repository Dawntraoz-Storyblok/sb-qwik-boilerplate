import { component$ } from '@builder.io/qwik';
import StoryblokComponent from "~/components/storyblok/component";
// Editing experience
import { storyblokEditable } from "@storyblok/js";

interface GridProps {
  blok: {
    columns: []
  };
}

export default component$<GridProps>((props) => {
  return (
    <div {...storyblokEditable(props.blok)} class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-center">
      {props.blok.columns.map((block) => {
        return (
          <StoryblokComponent blok={block} />
        )
      })}
    </div>
  );
});