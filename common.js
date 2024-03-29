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
    "DATA-AGREEMENTS": {
      title: "Data Agreements",
      href: "https://identity.foundation.github.io/vui/dataAgreements",
      authors: ["José San Juan"],
      status: "unofficial",
      publisher: "GATACA",
    },
    "VUI-PRESENTATION-EXCHANGE": {
      title: "Vui presentation exchange extension",
      href: "https://identity.foundation.github.io/vui/presentationExchange",
      authors: ["José San Juan"],
      status: "unofficial",
      publisher: "GATACA",
    },
    "VERIFIABLE-CONSENTS": {
      title: "Verifier APIS - Verifiable consents",
      href: "https://identity.foundation.github.io/vui/v0#verifiable-consent",
      authors: ["José San Juan"],
      status: "unofficial",
      publisher: "GATACA",
    },
    "ISSUER-RESOLUTION": {
      title: "Issuer Resolution",
      href: "https://identity.foundation.github.io/vui/issuerResolution",
      authors: ["José San Juan"],
      status: "unofficial",
      publisher: "GATACA",
    },
    "DIF-PRESENTATION-EXCHANGE": {
      title: "Issuer Resolution",
      href: "https://identity.foundation/presentation-exchange",
      publisher: "DIF",
      authors: [
        "Daniel Buchner",
        "Brent Zundel",
        "Martin Riedel",
        "Kim Hamilton Duffy",
      ],
    },
    ADA: {
      title: "Automated Data Agreements",
      href: "https://github.com/decentralised-dataexchange/automated-data-agreements/blob/main/docs/data-agreement-specification.md",
      authors: ["Jan Linquist", "Lotta Lundin", "Lal Chandran"],
      publisher: "IGrantio",
    },
    "KANTARA-CONSENTS": {
      title: "Consent receipt specification",
      href: "https://github.com/decentralised-dataexchange/automated-data-agreements/blob/main/docs/data-agreement-specification.md",
      authors: ["Mark Lizar", "David Turner"],
      publisher: "Kantara",
    },
    VUI: {
      title: "Verifier Universal Interface",
      href: "https://identity.foundation/github.io/vui",
      authors: ["José San Juan"],
      status: "unofficial",
      publisher: "GATACA",
    },
  },
};
