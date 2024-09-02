cmake_minimum_required(VERSION 3.15)

set(CMAKE_BINARY_DIR "${CMAKE_CURRENT_LIST_DIR}/dist")

project(ESNATIVE)

include(CMakeJS)

cmakejs_create_napi_addon(
    addon
    src/lib/addon.cpp
    NAMESPACE ESNATIVE
)
