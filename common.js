/* globals omitTerms, respecConfig, $, require */
/* exported linkCrossReferences, restrictReferences, fixIncludes */

var ccg = {
  // Add as the respecConfig localBiblio variable
  // Extend or override global respec references
  localBiblio: {
    "DID-RESOLUTION": {
      title: "Decentralized Identifier Resolution",
      href: "https://w3c-ccg.github.io/did-resolution/",
      authors: ["Markus Sabadello", "Dmitri Zagidulin"],
      status: "Draft Community Group Report",
      publisher: "Credentials Community Group",
    },
    "LD-PROOFS": {
      title: "Linked Data Proofs",
      href: "https://w3c-dvcg.github.io/ld-proofs/",
      authors: ["Manu Sporny", "Dave Longley"],
      status: "CG-DRAFT",
      publisher: "Digital Verification Community Group",
    },
  },
};
