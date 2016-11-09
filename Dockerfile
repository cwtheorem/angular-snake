FROM angular-snake

RUN apt-get install -y nginx

COPY *.html /usr/share/nginx/html
COPY *.js /usr/share/nginx/html
