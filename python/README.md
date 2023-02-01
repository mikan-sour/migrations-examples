# Python migrations

## Before start
** ensure that venv is activated if doing locally **

### Virtual Env
** do from project folder (python)
> python3 -m venv

#### Activate
> source bin/activate

#### Deactivate
> deactivate

### Requirements
> pip install -r requirements.txt

## Start
** one time **
> yoyo init --database postgres://postgres:postgres@localhost/mig_demo?schema=app migrations

## Create
### new
> yoyo new -m "Create users and posts tables"

### add 
Add the up and down sql per the [file](./migrations/20230201_01_WJBik-create-users-and-posts-table.py)

## Apply
> yoyo apply ./migrations 

## Rollback
> yoyo rollback ./migrations   

## Reference
[tutorial](https://github.com/medwig/yoyo-migration-tutorial)
[docs](https://ollycope.com/software/yoyo/latest/)
