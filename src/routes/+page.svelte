<script lang="ts">
  import type { PageData } from "./$types";
  import Seo from '$lib/components/seo.svelte';
  import Blog from '$lib/components/blog.svelte';
  import Work from '$lib/components/work.svelte';
  import Play from '$lib/components/play.svelte';
  import Hero from '$lib/components/hero.svelte';
  import About from '$lib/components/about.svelte';
  import Contact from '$lib/components/contact.svelte';
  import {cleanBodyStyles} from '$lib/utils/styles.utils';

  export let data: PageData;

  let work;
  let play;
  let blog;

  $: ({ work, play, blog } = data);

  const onScroll = () => {
    const scrolledSize = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrolledSize > 0) {
      return;
    }

    cleanBodyStyles();
  };
</script>

<svelte:head>
  <Seo />

  <style>
    body {
      color: var(--section-color, var(--color-highlight-contrast));
      background: var(--section-background, var(--color-highlight));
      --menu-color: var(--color-highlight-contrast);
      transition: background 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  </style>
</svelte:head>

<svelte:window on:scroll={onScroll} />

<Hero />

<Work projects={work} />

<Play projects={play} />

<About />

<Blog more={true} posts={blog} />

<Contact />
