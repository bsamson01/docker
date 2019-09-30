FROM debian
ENV TSV=3.0.13.8
RUN DEBIAN_FRONTEND=noninteractive apt-get -y update && apt-get -y install bzip2 && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && apt-get autoremove -y && apt-get clean
ADD http://dl.4players.de/ts/releases/${TSV}/teamspeak3-server_linux_amd64-${TSV}.tar.bz2 ./
RUN tar jxf teamspeak3-server_linux_amd64-$TSV.tar.bz2 && mv teamspeak3-server_linux_amd64 /opt/teamspeak && rm teamspeak3-server_linux_amd64-$TSV.tar.bz2
ADD run.sh /run.sh
EXPOSE 9987/udp 10011 30033 
ENTRYPOINT [ "/run.sh" ]

#docker build -t ex01 .
#docker run -it --rm -p=9987:9987/udp  -p=10011:10011 -p=30033:30033 ex01