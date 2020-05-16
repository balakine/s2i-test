FROM registry.access.redhat.com/ubi8/nodejs-12
USER 1001
CMD bash -c "while true; do echo test; sleep 5; done"
