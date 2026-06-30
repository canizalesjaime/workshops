CXX = g++
# CXXFLAGS = -std=c++17 `pkg-config --cflags opencv4`
# LDFLAGS = `pkg-config --libs opencv4`

# Replace these with the paths to your OpenCV installation
OPENCV_INCLUDE = /usr/local/include/opencv4
OPENCV_LIB = /usr/local/lib

CXXFLAGS = -std=c++17 -I$(OPENCV_INCLUDE)
LDFLAGS = -L$(OPENCV_LIB) -lopencv_core -lopencv_imgproc -lopencv_highgui -lopencv_imgcodecs

SRC = test_opencv.cpp
TARGET = my_program

all: $(TARGET)

$(TARGET): $(SRC)
	$(CXX) $(CXXFLAGS) -o $@ $^ $(LDFLAGS)

clean:
	rm -f $(TARGET)
