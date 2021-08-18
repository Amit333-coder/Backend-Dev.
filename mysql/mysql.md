## create db, user,grant access
```sql
CREATE DATABASE mytestdb;
CREATE USER myuser IDENTIFIED BY 'mypass';

USE mytestdb;
GRANT ALL PRIVILEGES ON mytestdb.* TO myuser;

FLUSH PRIVILEGES;
```
## Login using the new user
make changes in the "target" from the properties , which is opened by right clicking the mysql client cmd
make changes from root to user you want.
