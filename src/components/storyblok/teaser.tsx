import { component$ } from '@builder.io/qwik';
// Editing experience
import { storyblokEditable } from "@storyblok/js";

interface TeaserProps {
  blok: {
    headline: string;
  };
}
export default component$<TeaserProps>((props) => {
  return <h2 {...storyblokEditable(props.blok)}>{props.blok.headline}</h2>;
});