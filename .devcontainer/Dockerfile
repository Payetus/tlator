FROM node:20

# Install necessary system dependencies
RUN apt-get update && \
    apt-get install -y \
    build-essential \
    libx11-xcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxi6 \
    libxtst6 \
    libnss3 \
    libgtk-3-0 \
    libatk-bridge2.0-0 \
    libdrm2 \
    libglib2.0-0 \
    dbus \
    libgl1-mesa-glx \
    libgtk2.0-0 \
    libnotify4 \
    libgconf-2-4 \
    libasound2 \
    libsecret-1-0 \
    libudev1 \
    libgbm-dev\
    && rm -rf /var/lib/apt/lists/*
