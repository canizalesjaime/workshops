###############################################################################
# Below is pulling a pre-existing opencv image from ubuntu 18
# FROM matimoreyra/opencv:latest
# RUN echo "/usr/local/lib" > /etc/ld.so.conf.d/opencv.conf && ldconfig
###############################################################################
# Below is pulling a pre-existing opencv image from ubuntu 24 that I wrote
FROM jaimec21/opencv-docker:latest
###############################################################################
# Below is the dockerfile for the docker image: jaimec21/opencv-docker:latest
# # Use the latest Ubuntu image as the base image
# FROM ubuntu:latest

# # Set non-interactive mode for the installation
# ENV DEBIAN_FRONTEND=noninteractive

# # Update the package list and install dependencies
# RUN apt-get update && apt-get install -y \
#     build-essential \
#     cmake \
#     git \
#     wget \
#     unzip \
#     pkg-config \
#     libjpeg-dev \
#     libpng-dev \
#     libtiff-dev \
#     libavcodec-dev \
#     libavformat-dev \
#     libswscale-dev \
#     libv4l-dev \
#     libxvidcore-dev \
#     libx264-dev \
#     libgtk2.0-dev \
#     libgtk-3-dev \
#     libcanberra-gtk* \
#     libatlas-base-dev \
#     gfortran \
#     python3-dev \
#     && rm -rf /var/lib/apt/lists/*

# # Set working directory
# WORKDIR /root

# # Clone OpenCV and OpenCV contrib repositories
# RUN git clone https://github.com/opencv/opencv.git && \
#     git clone https://github.com/opencv/opencv_contrib.git

# # Create a build directory
# WORKDIR /root/opencv/build

# # Configure and build OpenCV with contrib modules
# RUN cmake -D CMAKE_BUILD_TYPE=Release \
#           -D CMAKE_INSTALL_PREFIX=/usr/local \
#           -D OPENCV_EXTRA_MODULES_PATH=/root/opencv_contrib/modules \
#           -D BUILD_EXAMPLES=ON \
#           .. && \
#     make -j$(nproc) && \
#     make install && \
#     ldconfig

# # Clean up unnecessary files
# WORKDIR /root
# RUN rm -rf opencv opencv_contrib

# # Set the default command
# CMD ["bash"]
