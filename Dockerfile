# Custom from https://hub.docker.com/r/grahamc/jekyll/
# Modify from https://github.com/ibotdotout/ibotdotout.github.io/blob/jekyll/Dockerfile

FROM ruby:2.2
MAINTAINER mildronize

RUN apt-get update -y && apt-get install -y nodejs python-pygments && apt-get clean

WORKDIR /src
ADD Gemfile /src/Gemfile
ADD Gemfile.lock /src/Gemfile.lock

# Fix a problem following http://stackoverflow.com/questions/29020478/error-installing-nokogiri-on-bundle-install-but-already-installed
RUN bundle config build.nokogiri --use-system-libraries

RUN bundle install

VOLUME /src
EXPOSE 4000
