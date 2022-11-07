# This script generates a JSON-LD context from the TreeLDR files in `spec/tldr`.
echo "🧪 building JSON-LD context from TreeLDR specification..." >&2

mkdir -p `dirname $1`

# Generate a JSON-LD context.
# See <https://github.com/spruceid/treeldr/pull/36#issuecomment-1236915122>
# about the use of the `--rdf-type-to-layout-name` option.
# The <https://www.w3.org/> prefix is bound to the `spec/extern/www.w3.org` dir.
tldrc \
	-i spec/tldr/extern/schema.org.tldr \
	-i spec/tldr/extern/odrl.tldr \
	-i spec/tldr/extern/credentials.tldr \
	-i spec/tldr/rebase.tldr \
	-i spec/tldr/common/github.tldr \
	json-ld-context --rdf-type-to-layout-name \
	-m https://www.w3.org/=spec/extern/www.w3.org/ \
	-c https://www.w3.org/2018/credentials/v1.jsonld \
	https://w3id.org/rebase#GitHubVerification \
	https://w3id.org/rebase#GitHubVerificationMessage \
> $1