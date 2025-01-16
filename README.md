# fastboot-file-override-embroider-reproduction

This reproduces an issue where FastBoot runs a runtime error under a very specific set of circumstances:

- The app must be using Embroider
- The app must be built for production
- You must be overriding a file with a fastboot specific version
- The file that you are overriding must be importing .css
- No other files must be importing css (including dependencies)

Once all conditions are met, FastBoot will throw the following error:

```
Error: Could not find module `fastboot-embroider-repro/app` imported from `~fastboot/app-factory`
```

## To reproduce

- run `npm install`
- run `npm start`
