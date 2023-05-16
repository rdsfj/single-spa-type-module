Small reproduction for problems in single-spa and single-spa-layout using
- [`type: "module"`](https://nodejs.org/api/esm.html)
- TypeScript's `compilerOptions.module: "node16"`
- TypeScript's `compilerOptions.moduleResolution: "node16"`

### Reproduce
To see errors, run
```bash
npm ci
npm run build
```

### Expected behavior
TypeScript compiles successfully, and no error because of missing type declarations happens.
