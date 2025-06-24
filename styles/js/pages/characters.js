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

      if (listData.type == 'profile') {

        // Create the log dex
        if (charadex.tools.checkArray(listData.profileArray[0].masterlistlog)) {
          let logs = await charadex.initialize.page(
            listData.profileArray[0].masterlistlog,
            charadex.page.masterlist.relatedData[charadex.sheet.pages.masterlistLog]
          ).then(console.log('Character Logs:', logs));
        }

        // Set the player url
        let pageUrl = charadex.url.getPageUrl(charadex.page.inventory.sitePage);
        $('.playerlink').attr('href', charadex.url.addUrlParameters(pageUrl, { profile: listData.profileArray[0].player }));

      }

    }
  ).then(charadex.tools.loadPage('.softload', 500));

});