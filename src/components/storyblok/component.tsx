import { component$ } from '@builder.io/qwik';

// Components
import grid from "~/components/storyblok/grid";
import teaser from "~/components/storyblok/teaser";
import feature from "~/components/storyblok/feature";
import page from "~/components/storyblok/page";

interface Props {
  blok: {
    component: string;
  };
}

const Components = {
  'sb-grid': grid,
  'sb-teaser': teaser,
  'sb-feature': feature,
  'sb-page': page
};

export default component$<Props>((props) => {
  const Component = Components[`sb-${props.blok.component}`];
  return (
    <Component blok={props.blok} />
  );
});