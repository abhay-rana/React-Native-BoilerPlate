#!/bin/bash
export SENTRY_ORG="hksmanpower"
export SENTRY_PROJECT="react-native"
export SENTRY_TOKEN=58f3244249c142fc9992c7a5768f78fb84704034acf94419b96d9a7f75d75359

RELEASE_NAME_PREFIX=$(cat android/app/build.gradle | grep -o "applicationId \".*" | cut -d " " -f 2 | sed -e "s/\"//g")
RELEASE_NAME=$(cat android/app/build.gradle | grep -o "versionName \".*" | cut -d " " -f 2 | sed -e "s/\"//g")
# DISTRIBUTION_NAME=$(cat android/app/build.gradle | grep -o "versionCode .*" | cut -d " " -f 2)
# updated distibution name 
DISTRIBUTION_NAME=3

node_modules/.bin/react-native bundle \
    --dev false \
    --platform android \
    --entry-file index.js \
    --bundle-output index.android.bundle \
    --sourcemap-output index.android.bundle.packager.map \
    --minify false


node_modules/react-native/sdks/hermesc/win64-bin/hermesc -O -emit-binary -output-source-map -out=index.android.bundle.hbc index.android.bundle
rm -f index.android.bundle
mv index.android.bundle.hbc index.android.bundle

node node_modules/react-native/scripts/compose-source-maps.js index.android.bundle.packager.map index.android.bundle.hbc.map -o index.android.bundle.map


node_modules/@sentry/cli/bin/sentry-cli --auth-token ${SENTRY_TOKEN} \
    releases \
    --org=${SENTRY_ORG} \
    --project=${SENTRY_PROJECT} \
    files "${RELEASE_NAME_PREFIX}@${RELEASE_NAME}+${DISTRIBUTION_NAME}" \
    upload-sourcemaps \
    ./index.android.bundle.map ./index.android.bundle \
    --dist ${DISTRIBUTION_NAME} \
    --rewrite

