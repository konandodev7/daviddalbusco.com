<script>
  import Section from '$lib/components/section.svelte';
  import Button from '$lib/components/button.svelte';
  import IconOpen from "$lib/icons/IconOpen.svelte";
</script>

<Section background="white" color="black">
  <h1 id="contact">Contact</h1>

  <p>Get in touch through this form and let's work together!</p>

  <form action="https://formspree.io/david@fluster.io" method="POST">
    <input aria-label="Your name" name="name" placeholder="Your name" type="text" />
    <input aria-label="Your email" name="_replyto" placeholder="Your email" type="email" />
    <input aria-label="Your phone" name="phone" placeholder="Your phone" type="tel" />
    <textarea aria-label="Your message" name="message" placeholder="Your message" rows="4" />

    <input name="_gotcha" style="display: none" type="text" />
    <input name="_next" type="hidden" value="https://daviddalbusco.com" />

    <Button type="submit">Send</Button>
  </form>

  <p class="newsletter">
    * From time to time, I send out a <a href="http://eepurl.com/giun5j" target="_blank" rel="external noopener noreferrer">Newsletter<IconOpen /></a> that highlights the side projects I develop for fun, as well as my latest blog posts.
  </p>
</Section>

<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
  }

  input,
  textarea {
    box-shadow: 3px 3px black;
    border: 1px solid black;

    margin: 0.45rem 0;
    padding: 0.25rem 0.45rem;

    outline: none;

    transition: box-shadow 0.15s ease-out;

    &:focus {
      box-shadow: 3px 3px var(--color-highlight);
    }
  }

  textarea {
    resize: none;
  }

  .newsletter {
    padding: 5.45rem 0 0;
  }
</style>
