cmake_minimum_required(VERSION 3.15)

set(CMAKE_BINARY_DIR "${CMAKE_CURRENT_LIST_DIR}/dist")

project(ESNATIVE)

include(CMakeJS)

configure_file("include/addon/addon.hpp" "include/addon/addon.hpp")

cmakejs_create_napi_addon(
    addon
    src/addon/addon.cpp include/addon/addon.hpp
    NAMESPACE ESNATIVE
)
