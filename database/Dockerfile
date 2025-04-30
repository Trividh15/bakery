FROM postgres:13

ENV POSTGRES_USER=devansh
ENV POSTGRES_PASSWORD=password
ENV POSTGRES_DB=bakery_db

COPY init_db.sql /docker-entrypoint-initdb.d/
