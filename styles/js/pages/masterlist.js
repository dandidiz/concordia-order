/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {

  charadex.tools.loadIncludedFiles();
  console.log('initializing masterlist...');
  let dex = await charadex.initialize.page(
    null,
    charadex.page.masterlist,
    null, 
    async (listData) => {

      if (listData.type == 'profile') {

        // Create the log dex
        if (charadex.tools.checkArray(listData.profileArray[0].masterlistlog)) {
          let logs = await charadex.initialize.page(
            listData.profileArray[0].masterlistlog,
            charadex.page.masterlist.relatedData['masterlist log']
          );
        }

        // Set the player url
        let pageUrl = charadex.url.getPageUrl(charadex.page.inventory.sitePage);
        $('.playerlink').attr('href', charadex.url.addUrlParameters(pageUrl, { profile: listData.profileArray[0].player }));

      }

    }
  );
  console.log('✅');
  
  console.log('soft loading page...');
  charadex.tools.loadPage('.softload', 500);
  console.log('✅');
  
});