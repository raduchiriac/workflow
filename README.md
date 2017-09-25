## Workflow API

Manage your running jobs and triggers using Angular 4.x (with ngrx/store)

### Start the mock SocketIO server
```sh
$ cd backend && yarn start
```

### Start the frontend (in HMR mode)
```sh
$ yarn start:hmr
```

### [Nice to Have] deploy on Github Pages
```sh
$ yarn build -- --base-href https://raduchiriac.github.io/workflow/
$ angular-cli-ghpages --no-silent
```
