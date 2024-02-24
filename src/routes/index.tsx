import { $, component$, useSignal, useOnWindow } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";

// [Start] Define dynamic components (Part 1)
import StoryblokComponent from "~/components/storyblok/component";
// [End]

// [Start] Storyblok Initial Setup
import type { ISbStoryData } from "@storyblok/js";
import { loadStoryblokBridge } from "@storyblok/js";
import { storyblokApi } from "~/routes/plugin@storyblok";

export const useStory = routeLoader$(async () => {
  if (!storyblokApi)
    throw new Error("Not Storyblok plugin found to make the API calls");

  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "draft",
  });
  return data.story as ISbStoryData;
});
// [End]

export default component$(() => {
  const story = useSignal(useStory().value);

  useOnWindow(
    "load",
    $(async () => {
      await loadStoryblokBridge();
      const { StoryblokBridge, location } = window;
      const storyblokInstance = new StoryblokBridge();

      storyblokInstance.on(["published", "change"], () => {
        // reload page if save or publish is clicked
        location.reload();
      });

      storyblokInstance.on("input", (event) => {
        // Access currently changed but not yet saved content via:
        story.value = event?.story as ISbStoryData;
      });
    })
  );

  return (
    <>
      <StoryblokComponent key={story.value.id} blok={story.value.content} />
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
