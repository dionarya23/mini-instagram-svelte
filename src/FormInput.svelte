<script>
import { db } from './firebase.js'

export let uid;
export let displayName;
let photoURL = 'naon';

function change(event) {

    let file = event.srcElement.files[0]
     var reader  = new FileReader();

  reader.addEventListener("load", function () {
    photoURL = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

function upload() {
    db.collection('photos').add({
        uid,
        displayName,
        photo: photoURL,
        created: Date.now()
    })

    photoURL = 'naon'
}

</script>

{#if photoURL == 'naon'} 
<div class="field">
  <div class="file is-centered is-info is-boxed">
    <label class="file-label">
      <input class="file-input" on:change={change} type="file" name="resume">
      <span class="file-cta">
        <span class="file-icon">
          <i class="fas fa-cloud-upload-alt"></i>
        </span>
        <span class="file-label">
          Choose Photo
        </span>
      </span>
    </label>
  </div>
</div>

<hr />
{:else}
        <h2>Preview</h2>
        <img src={photoURL} />
{/if}

<button class="button is-centered" on:click={upload}>Upload</button>
