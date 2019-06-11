<script>
import { db } from './firebase.js'
import { collectionData } from 'rxfire/firestore'; 
import { startWith } from 'rxjs/operators';

const query = db.collection('photos').orderBy('created')
const photos = collectionData(query, 'id').pipe(startWith([]))

    photos.forEach(e => console.log(e))
</script>
{#each $photos as photo}
    <div class="columns is-mobile">
<div class="column is-half is-offset-one-quarter">

<div class="card ">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={photo.photo} alt="Placeholder image">
    </figure>
  </div>

  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{photo.displayName}</p>
      </div>
    </div>
  </div>
</div>
  
</div>
</div>

<hr />
{/each}
