FROM python:3.9-alpine

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.txt

# Install postgres client
RUN apk add --update postgresql-client

# Install individual dependencies
# so that we could avoid installing extra packages to the container
RUN apk add --update --virtual .tmp-build-deps \
	gcc libc-dev linux-headers postgresql-dev
RUN pip install -r /requirements.txt

# Remove dependencies
RUN apk del .tmp-build-deps

RUN mkdir /backend_app
WORKDIR /backend_app
COPY ./tours_backend_app /backend_app
