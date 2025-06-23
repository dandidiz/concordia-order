/* ==================================================================== */
/* Charadex
=======================================================================  /

  The charadex namespace. You can use it if you like, but this should
  prevent charadex from messing with any other imported code.
    
======================================================================= */
let charadex = {};

/* ==================================================================== */
/* Site
/* If you don't want to hard code your site information, you
/* can fill this out instead
/* Any preview links will still show Charadex's information
/* ==================================================================== */
charadex.site = {
  title: "Concordia Order",
  url: "https://dandidiz.github.io/concordia-order/",
  description: `"With one heart."`
}

/* ==================================================================== */
/* Sheet Config
/* Your sheet configuration
/* ==================================================================== */
charadex.sheet = {

  id: "11_fjnY9Ia8QEdUl4sfw_29Os-oIbp5PgFQZrnYdgQvg",

  pages: {
    masterlist:    "masterlist",
    masterlistLog: "masterlist log",
    inventory:     "inventory",
    inventoryLog:  "inventory log",
    items:         "items",
    traits:        "traits",
    prompts:       "prompts",
    timeline:      "timeline",
    staff:         "mods",
  },

  options: {

    designTypes: ['All', 'Story Character', 'Player Character', 'Side Character'],
    statuses: ['All', 'Active', 'Voided', 'Retired', 'Dead', 'WIP'],
    rarity: ['All', '🔷', '🔷🔷', '🔷🔷🔷', '⭐', '⭐⭐', '⭐⭐⭐', '👑'],
    inheritance: ['All', 'Earth', 'Heaven'],
    itemTypes: ['All', 'Currency', 'Voucher', 'Keepsakes', 'Gatcha', 'Misc'],
    traitTypes: ['All', 'Magic', 'Affiliation', 'Rank']

  }

}


/* ==================================================================== */
/* Page configuration
/* ==================================================================== */
charadex.page = {};


/* Item Catalogue
/* --------------------------------------------------------------- */
charadex.page.items = {

  sheetPage: charadex.sheet.pages.items,
  sitePage: 'items',
  dexSelector: 'item',
  profileProperty: 'item',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: true,
    parameters: {
      'Type': charadex.sheet.options.itemTypes,
      'Rarity': charadex.sheet.options.rarity,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Type',
    parameters: charadex.sheet.options.itemTypes,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Item', 'Rarity']
  },

  prevNext: {
    toggle: true,
  },

};


/* Traits
/* --------------------------------------------------------------- */
charadex.page.traits = {

  sheetPage: charadex.sheet.pages.traits,
  sitePage: 'traits',
  dexSelector: 'charadex',
  profileProperty: 'trait',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: true,
    parameters: {
      'Type': charadex.sheet.options.traitTypes,
      'Rarity': charadex.sheet.options.rarity,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Type',
    parameters: charadex.sheet.options.traitTypes,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Trait', 'Rarity']
  },

  prevNext: {
    toggle: true,
  },

  markdownColumns: [
    "description"
  ],

};


/* Prompts
/* --------------------------------------------------------------- */
charadex.page.prompts = {

  sheetPage: charadex.sheet.pages.prompts,
  sitePage: 'prompts',
  dexSelector: 'prompt',
  profileProperty: 'title',

  sort: {
    toggle: true,
    key: "enddate",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Title']
  },

  prevNext: {
    toggle: true,
  },

};


/* Staff
/* --------------------------------------------------------------- */
charadex.page.staff = {

  sheetPage: charadex.sheet.pages.staff,
  sitePage: 'inventories',
  dexSelector: 'charadex',
  profileProperty: 'username',

  sort: {
    toggle: false,
    key: "username",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: false,
    bottomToggle: false,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Username']
  },

  prevNext: {
    toggle: false,
  },

};


/* Timeline
/* --------------------------------------------------------------- */
charadex.page.timeline = {

  sheetPage: charadex.sheet.pages.timeline,
  sitePage: 'timeline',
  dexSelector: 'charadex',
  profileProperty: 'id',

  sort: {
    toggle: false,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Question', 'Answer', 'Tags']
  },

  prevNext: {
    toggle: false,
  },

}



/* Masterlist
/* --------------------------------------------------------------- */
charadex.page.masterlist = {

  sheetPage: charadex.sheet.pages.masterlist,
  sitePage: 'masterlist',
  dexSelector: 'charadex',
  profileProperty: 'name',

  sort: {
    toggle: true,
    key: "id",
    order: "desc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: true,
    parameters: {
      'Design Type': charadex.sheet.options.designTypes,
      'Status': charadex.sheet.options.statuses,
      'Rarity': charadex.sheet.options.rarity,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Inheritance',
    parameters: charadex.sheet.options.inheritance,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'ID', 'Name', 'Player', 'Traits']
  },

  prevNext: {
    toggle: true,
  },

  relatedData: {

    [charadex.sheet.pages.masterlistLog]: {

      sheetPage: charadex.sheet.pages.masterlistLog,
      primaryProperty: 'id',
      relatedProperty: 'id',
      dexSelector: 'log',
      profileProperty: 'name',
      profileToggle: false,

      sort: {
        toggle: true,
        key: "timestamp",
        order: "desc",
        parameters: []
      },

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 12,
      },

    }

  },

  markdownColumns: [
    "notes"
  ],

};

/* Inventory
/* --------------------------------------------------------------- */
charadex.page.inventory = {

  // Dex Set Up
  sheetPage: charadex.sheet.pages.inventory,
  sitePage: 'inventories',
  dexSelector: 'player',
  profileProperty: 'username',

  // Dex Options
  sort: {
    toggle: true,
    key: "username",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: false,
    parameters: {}
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Username']
  },

  prevNext: {
    toggle: false,
  },


  // Related Data
  relatedData: {

    [charadex.sheet.pages.inventoryLog]: {

      sheetPage: charadex.sheet.pages.inventoryLog,
      sitePage: 'inventories',
      primaryProperty: 'username',
      relatedProperty: 'username',
      dexSelector: 'log',
      profileProperty: 'id',
      profileToggle: false,

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 12,
      },

    },
    

    [charadex.sheet.pages.masterlist]: {

      // This imports the config from the masterlist
      // So you dont have to repeat yourself
      ...charadex.page.masterlist, 

      sheetPage: charadex.sheet.pages.masterlist,
      sitePage: 'masterlist',
      primaryProperty: 'username',
      relatedProperty: 'player',
      dexSelector: 'charadex',
      profileProperty: 'name',
      profileToggle: false,

    }

  },

  
  // This is a special config for their inventory
  inventoryConfig: {

    sheetPage: charadex.sheet.pages.items,
    sitePage: 'items',
    dexSelector: 'item',
    profileProperty: 'item',
    profileToggle: false,

    sort: {
      toggle: true,
      sortProperty: "item",
      order: "asc",
      parametersKey: 'type', 
      parameters: charadex.sheet.options.itemTypes
    },

    search: {
      toggle: true,
      filterToggle: false,
      parameters: ['Item']
    },

    filters: {
      toggle: true,
      parameters: {
        'Type': charadex.sheet.options.itemTypes,
        'Rarity': charadex.sheet.options.rarity,
      }
    },

  }

};


/* Index
/* --------------------------------------------------------------- */
charadex.page.index = {

  prompts: {
    ... charadex.page.prompts,
    dexSelector: 'prompt',
    amount: 2,
  },

  designs: {
    ... charadex.page.masterlist,
    dexSelector: 'charadex',
    amount: 4,
  }

};


export { charadex };