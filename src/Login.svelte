<script>
import Profile from './Profile.svelte'
import FormInput from './FormInput.svelte'
import Photo from './Photo.svelte'

import { auth, googleProvider, db } from './firebase.js'
import { authState } from 'rxfire/auth'
import { collectionData } from 'rxfire/firestore'; 
import { startWith } from 'rxjs/operators';

let user;

const unsubcribe = authState(auth).subscribe(u => user = u)
function login () {
    auth.signInWithPopup(googleProvider)
}

function logout() {
    auth.signOut()
}

</script>

    <div style="margin-top:20px" class="container is-widescreen">

{#if user}
    <div class="columns is-desktop">
   

    <div class="column">
            <FormInput displayName={user.displayName} uid={user.uid} />
    </div>

     <div class="column">
        <Profile {...user} />
        <button class="button is-danger is-centered" on:click={logout}>Logout</button>
    </div>

    </div>


    <div class="container">
  <div class="notification">
    Kumpulan Foto dari para netizen
  </div>
</div>
<br />

      <Photo />

        
{:else}
            <button class="button" on:click={login}>
            Sign With Google
            </button>
{/if}
    </div>

