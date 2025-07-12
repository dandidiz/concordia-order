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

      }
  });

  charadex.tools.loadPage('.softload', 500);
});