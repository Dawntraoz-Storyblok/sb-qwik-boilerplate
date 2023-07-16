import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from '@builder.io/qwik-city';

// [Start] Define dynamic components (Part 1)
import StoryblokComponent from "~/components/storyblok/component";
// [End]

// [Start] Storyblok Initial Setup
import type { ISbStoryData } from "@storyblok/js";
import { storyblokInit, apiPlugin, loadStoryblokBridge, registerStoryblokBridge } from "@storyblok/js";

const { storyblokApi } = storyblokInit({
  accessToken: import.meta.env.PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  bridge: true,
});

export const useStory = routeLoader$(async () => {
  if (!storyblokApi) throw new Error('Not Storyblok plugin found to make the API calls');

  const { data } = await storyblokApi.get("cdn/stories/home", { version: "draft" });
  return data.story as ISbStoryData;
});
// [End]

export default component$(() => {
  const story = useSignal(useStory().value);

  useVisibleTask$(async () => {
    await loadStoryblokBridge();
    const sbBridge = new window.StoryblokBridge();

    sbBridge.on(["published", "change"], () => {
      window.location.reload();
    });

    registerStoryblokBridge(story.value.id, (storySB) => (story.value = storySB));    
  });
  
  return (
    <>
      <StoryblokComponent blok={story.value.content} />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik with Storyblok",
  meta: [
    {
      name: "description",
      content: "Qwik & Storyblok site description",
    },
  ],
};
