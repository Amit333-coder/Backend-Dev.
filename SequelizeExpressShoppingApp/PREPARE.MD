## CREATING DATABASE AND THE USER
1. CREATE DATABASE shopdb;
2. CREATE USER shopper identified by 'shoppass'
3. grant all privileges on shopdb.* to shopper;
4. flush privileges;
