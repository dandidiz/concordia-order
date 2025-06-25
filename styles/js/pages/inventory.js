/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {
  try {
    let dex = await charadex.initialize.page(
      null,
      charadex.page.inventory,
      null, 
      async (listData) => {

        console.log("LIST DATA:", listData); 
        if (listData.type == 'profile') {

          let profile = listData.profileArray[0];
          
          // Inventory
          let fixedData = await charadex.manageData.inventoryFix(profile)
            .then( () => {
              charadex.initialize.groupGallery(
                charadex.page.inventory.inventoryConfig,
                fixedData,
                'type',
                charadex.url.getPageUrl('items')
              );
              console.log('Initialized inventory! Fixed data:', fixedData);
            });

          // Designs
          if (charadex.tools.checkArray(profile.characters)) {
            let designs = await charadex.initialize.page(
              profile.characters,
              charadex.page.inventory.relatedData['characters'],
            ).then( () => {
              console.log('Initialized related characters!', designs);
            });
          }

          // Logs
          if (charadex.tools.checkArray(profile.inventorylog)) {
            let logs = await charadex.initialize.page(
              profile.inventorylog,
              charadex.page.inventory.relatedData['inventory log'],
            ).then( () => {
              console.log('Initialized related logs!', logs);
            });
          }

        }
    });
  } catch(err) {
    console.log('Failed to initialize the page.', err);
  } finally {
    console.log('Initialized the page!', dex);
    charadex.tools.loadPage('.softload', 500);
  }
  
});