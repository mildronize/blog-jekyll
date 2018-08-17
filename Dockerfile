# Custom from https://hub.docker.com/r/grahamc/jekyll/
# Modify from https://github.com/ibotdotout/ibotdotout.github.io/blob/jekyll/Dockerfile

FROM ruby:2.3
MAINTAINER Thada Wangthammang <mildronize@gmail.com>


RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get update -y && \
    apt-get install -y nodejs npm python-pygments locales build-essential && \
    apt-get clean

# for html-proofer
RUN echo "en_US UTF-8" > /etc/locale.gen
RUN locale-gen en_US.UTF-8

WORKDIR /src
ADD Gemfile /src/Gemfile
ADD Gemfile.lock /src/Gemfile.lock

# Fix a problem following http://stackoverflow.com/questions/29020478/error-installing-nokogiri-on-bundle-install-but-already-installed
RUN bundle config build.nokogiri --use-system-libraries && \
    bundle install

# nvm install
# RUN ln -s /usr/bin/nodejs /usr/bin/node;
RUN npm install -g yarn
ADD package.json /src/package.json
ADD yarn.lock /src/yarn.lock
RUN yarn

VOLUME /src
EXPOSE 4000

# Setup timezone
ENV TIMEZONE Asia/Bangkok
RUN cp /usr/share/zoneinfo/${TIMEZONE} /etc/localtime && \
    echo "${TIMEZONE}" > /etc/timezone
