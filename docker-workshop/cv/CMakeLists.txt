cmake_minimum_required(VERSION 3.10)
project(OpenCVExample)

# Find OpenCV package
find_package(OpenCV REQUIRED)

# Add executable
add_executable(OpenCVExample test_opencv.cpp)

# Link OpenCV libraries
target_link_libraries(OpenCVExample ${OpenCV_LIBS})
