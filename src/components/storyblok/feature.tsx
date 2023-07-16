import { component$ } from '@builder.io/qwik';
// Editing experience
import { storyblokEditable } from "@storyblok/js";
 
interface FeatureProps {
  blok: {
    name: string;
  };
}

export default component$<FeatureProps>((props) => {
  return <div {...storyblokEditable(props.blok)} class="w-full p-12 bg-[#f7f6fd] rounded-[5px] text-center">
      <h3 class="text-2xl text-[#1d243d] font-bold">
        {props.blok.name}
      </h3>
    </div>;
});