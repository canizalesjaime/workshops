# Use an official Haskell image as the base
FROM haskell:latest

# # Set the working directory in the container
# WORKDIR /app

# # Copy your project files into the container
# COPY . .

# Install any additional tools or dependencies (if needed)
# For example, you might add:
# RUN apt-get update && apt-get install -y <additional-package>

# Install Stack (if not included in the base image)
# RUN curl -sSL https://get.haskellstack.org/ | sh

# # Install project dependencies (optional, depends on your project setup)
# RUN stack setup && stack build --only-dependencies

# # Set the default command (change as necessary for your project)
# CMD ["stack", "build"]
