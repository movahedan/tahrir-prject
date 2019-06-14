## **Tahrir project**
Tahrir is a English/Persian translator.

## **How to Start Development**

* ### 1 - getting the code
```
git clone https://github.com/movahedan/tahrir-project.git
```

* ### Step 2 - setup client
in client directory:
```
tahrir-project/client/
```
install client packages.
```
yarn
```
and run the client.
```
yarn start
```
Client should be available in http://localhost:3000/

* ### Step 3 - setup server
in server directory:
```
tahrir-project/server/
```
activate pipenv environment.
```
pipenv shell
```
install server packages.
```
pipenv install
```

after that run these commands:
```
python manage.py migrate
python manage.py runserver
```
Now django should be available in http://localhost:8000 but it has no templates, client side running through 3000 port. You can login at http://localhost:8000/admin
```
user: 'admin'
password: 'admin'
```