# source https://morioh.com/p/d8d9e7732952
# Derived from official mysql image (our base image)
FROM mysql
# Add a database
ENV MYSQL_DATABASE blogApp
# Add the content of the sql-scripts/ directory to your image
# All scripts in docker-entrypoint-initdb.d/ are automatically
# executed during container startup
COPY ./blog-app.sql /docker-entrypoint-initdb.d/