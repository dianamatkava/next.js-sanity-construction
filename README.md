
## Set up
```bash
# Open server directory
npx browser-sync start --server --no-open --no-notify --directory ./temp/

## in component-library dir
# Run React Project
npx run start

# Run Storybook in dev mode
npm run storybook -- --debug-webpack




# Configure Tailwind with Storybook
npm add -D @storybook/addon-styling postcss autoprefixer postcss-loader
```
<!-- # Mobile
only screen and (min-width: 480px)

# Tablet
only screen and (min-width: 768px) 

# Desktop
only screen and (min-width: 992px)

# Huge
only screen and (min-width: 1280px)  -->