# Python migrations

## Before start
** ensure that venv is activated if doing locally **
> pip install -r requirements.txt

## Start
> yoyo init --database postgres://postgres:postgres@localhost/mig_demo?schema=app migrations

## Create
> yoyo new -m "Create users and posts tables"

## Apply
> yoyo apply ./migrations 

## Rollback
> yoyo rollback ./migrations   

## Reference
[tutorial](https://github.com/medwig/yoyo-migration-tutorial)
[docs](https://ollycope.com/software/yoyo/latest/)
