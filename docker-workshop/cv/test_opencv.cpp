// g++ test_opencv.cpp -o test_program -I/usr/local/include/opencv4 -L/usr/local/lib -lopencv_core -lopencv_imgproc -lopencv_highgui -lopencv_imgcodecs


#include <opencv2/opencv.hpp>
#include <iostream>

int main() {
    // Create a blank image
    cv::Mat image = cv::Mat::zeros(300, 300, CV_8UC3);
    cv::putText(image, "OpenCV Test", cv::Point(50, 150), cv::FONT_HERSHEY_SIMPLEX, 1, cv::Scalar(255, 255, 255), 2);

    // Save the image
    //cv::imwrite("output.jpg", image);
    
    cv::imshow("Display Window", image);

    // Wait for a key press indefinitely
    cv::waitKey(0);

    std::cout << "Image created and saved as output.jpg" << std::endl;
    return 0;
}