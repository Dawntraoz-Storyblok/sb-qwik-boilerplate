import { component$ } from '@builder.io/qwik';
// Editing experience
import { storyblokEditable } from "@storyblok/js";

interface TeaserProps {
  blok: {
    headline: string;
  };
}
export default component$<TeaserProps>((props) => {
  return <h2 {...storyblokEditable(props.blok)} class="py-32 text-6xl text-[#50b0ae] font-bold text-center">{props.blok.headline}</h2>;
});