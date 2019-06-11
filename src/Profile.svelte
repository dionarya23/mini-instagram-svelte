<script>
export let uid;
export let displayName;
export let photoURL;

</script>

<article class="media notification">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src={photoURL}>
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>{ displayName }</strong> <br /> <small>uid : { uid }</small> 
      </p>
    </div>
</article>