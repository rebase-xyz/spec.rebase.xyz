
cd ./spec

# Convert markdown to XML and HTML versions
docker run -v `pwd`:/data or13/markdown2rfc spec.md || exit 1

# Delete XML version
rm *.xml

# Rename the HTML version for hosting with GH pages
mkdir ../build
mv *.html ../build/index.html
cp * ../build;
cp -r openapi ../build/openapi;
rm ../build/*.md ../build/*.sh

mkdir -p ../build/contexts/v1

cd ..