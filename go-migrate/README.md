# GO-Migrate

## Install
> brew install golang-migrate

## Reference
- [Docs](https://github.com/golang-migrate/migrate/blob/master/GETTING_STARTED.md)
- [PKG Go doc](https://pkg.go.dev/github.com/golang-migrate/migrate/v4)
  
## Make a new file
> migrate -source file://path/to/migrations -database postgres://localhost:5432/database up 2 
example: 
> migrate create -dir ./migrations -seq -ext sql create_table

## Run
> migrate -path ./migrations -database "$(cat ./config.json | jq -r '.database')" up
> migrate -path ./migrations -database "$(cat ./config.json | jq -r '.database')" down
