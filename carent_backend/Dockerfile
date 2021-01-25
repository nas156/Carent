FROM gradle:6.3.0-jdk11 as builder
USER root
WORKDIR /builder

ADD . /builder
RUN gradle build

FROM openjdk:14-jdk-alpine
WORKDIR /app
EXPOSE 8085
COPY --from=builder /builder/build/libs/carent-0.0.1-SNAPSHOT.jar .
ENTRYPOINT ["java","-jar","carent-0.0.1-SNAPSHOT.jar"]
