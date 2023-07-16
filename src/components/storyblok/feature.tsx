import { component$ } from '@builder.io/qwik';
// Editing experience
import { storyblokEditable } from "@storyblok/js";
 
interface FeatureProps {
  blok: {
    name: string;
  };
}

export default component$<FeatureProps>((props) => {
  return <p {...storyblokEditable(props.blok)}>{props.blok.name}</p>;
});