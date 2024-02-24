import { storyblokInit, apiPlugin } from "@storyblok/js";

export const { storyblokApi } = storyblokInit({
  accessToken: import.meta.env.PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  bridge: true,
});
