/* eslint-disable operator-linebreak */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
const fs = require("fs");
const path = require("path");

const getAllJsonFilesFromDirectory = (targetDirectory) => {
  const files = fs
    .readdirSync(targetDirectory)
    .filter((f) => f.indexOf(".yml") !== -1);
  return files;
};

(async () => {
  console.log("🧪 building open api from components directory...");
  const newSchemas = getAllJsonFilesFromDirectory(
    path.resolve(__dirname, "../spec/openapi/schemas/common")
  );

  const template = `
openapi: 3.0.0
info:
  title: Rebase Schemas
  version: 1.0.0
servers:
  - url: https://w3id.org/rebase/openapi
`;

  const endpoints = [];
  newSchemas.forEach((sname) => {
    if (sname === "Context.yml") {
      return;
    }
    const endpoint = `
  /schemas/common/${sname}:
    get:
      tags:
      - Common
      responses:
        '200':
          content:
            application/yml:
              schema:
                $ref: './schemas/common/${sname}'
    `;
    endpoints.push(endpoint);
  });

  const finalAPI = `${template}\npaths:${endpoints.join("\n")}`;

  fs.writeFileSync(
    path.resolve(__dirname, "../spec/openapi/openapi.yml"),
    finalAPI
  );
})();
