/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
const fs = require("fs");
const path = require("path");

const jsonldSchema = require("@transmute/jsonld-schema");
const { schemas } = require("./schemas");

const contextPath = path.resolve(__dirname, "../build/contexts/v1/index.json");

(async () => {
  console.log("🧪 build context from api");
  const context = jsonldSchema.schemasToContext(schemas, {
    version: 1.1,
    vocab: "https://w3id.org/rebase#undefined-term",
    id: "@id",
    type: "@type",
    rootTerms: {},
  });
  fs.writeFileSync(contextPath, JSON.stringify(context, null, 2));
})();
