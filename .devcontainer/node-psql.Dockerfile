FROM ubuntu:latest

SHELL [ "/bin/bash" , "-c" ]

# ubuntu basics programming c++ and python
RUN apt update && \
    apt upgrade -y 
RUN apt install vim -y
RUN apt install build-essential -y
RUN apt install -y python3
RUN apt install python3-pip -y
RUN apt-get update && apt-get install -y sudo curl
RUN pip3 install beautifulsoup4 requests --break-system-packages

# postgresql 
RUN apt install -y postgresql
RUN locale-gen en_US.UTF-8
RUN update-locale LANG=en_US.UTF-8
RUN echo "export LANG=en_US.UTF-8" >> ~/.bashrc
RUN echo "export LANGUAGE=en_US.UTF-8" >> ~/.bashrc
RUN echo "export LC_ALL=en_US.UTF-8" >> ~/.bashrc

# node 
RUN apt install nodejs -y
RUN apt install npm -y

# visualization with windows
RUN echo "LIBGL_ALWAYS_INDIRECT=0" >> ~/.bashrc
