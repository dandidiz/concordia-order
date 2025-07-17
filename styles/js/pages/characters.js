/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {
  let dex = await charadex.initialize.page(
    null,
    charadex.page.masterlist,
    null,
    async (listData) => {

      console.log("LIST DATA:", listData); 
      if (listData.type == 'profile') {
        
        $('#gallery-card').addClass('cd-profile-card');
        $('#main-container').css('height','auto');
        $('#anchor-nav').show();

        let profile = listData.profileArray[0];

        // Logs
        if (charadex.tools.checkArray(profile.characterlog)) {
          let logs = await charadex.initialize.page(
            profile.characterlog,
            charadex.page.masterlist.relatedData['character log']
          );
          console.log('Initialized related logs!');
        }

        // Set the player url
        let pageUrl = charadex.url.getPageUrl(charadex.page.inventory.sitePage);
        $('.playerlink').attr('href', charadex.url.addUrlParameters(pageUrl, { profile: profile.player }));

        // Oh lordt, it's rels time
        if (profile.relationships && profile.relationships === 'string') {

          // our rels column has a textjoin of all relationships
          // we need to put it back into array form
          let relSplit = profile.relationships.split(';;;');
          // number of columns per row we anticipate
          const numCols = 5;

          for (let i = 0; i < relSplit.length; i += numCols) {
            // get the relationship
            let chunk = array.slice(i, i + numCols);
            // Create the DOM elements
            let relElement = `<div class="row">`
            for (let j = 0; j < chunk.length; j++) {
              relElement += `<div class="col">${chunk[j]}</div>`
            }
            relElement += `</div>`

            $('#rel-container').html(relElement);
          }
        }

      }
  });

  charadex.tools.loadPage('.softload', 500);
});