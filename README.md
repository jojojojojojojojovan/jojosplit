We first need to check if docker is installed and run postgreSQL to initialise the DB.
CMD: docker --version
CMD: docker info
If not found: install docker desktop (https://www.docker.com/products/docker-desktop/)
VSCODE Ctrl+Shift+X: Install SQLTools + SQLTools PostgreSQL Driver

CMD: 
docker run --name jojosplit-db \\
  -e POSTGRES_DB=jojosplit \\
  -e POSTGRES_USER=admin \\
  -e POSTGRES_PASSWORD=secret \\
  -p 5432:5432 \\
  -d postgres:16

Verify if it is running
CMD: docker ps

SQLTools icon in the left sidebar:
Click Add New Connection → select PostgreSQL

Host: localhost
Port: 5432
Database: jojosplit
Username: admin
Password: secret

Click Test Connection → then Save

To run: ./gradlew bootRun
