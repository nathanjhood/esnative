cmake_minimum_required(VERSION 3.15)

project(ESNATIVE)

include(CMakeJS)

cmakejs_create_napi_addon(
    addon
    src/lib/addon.cpp
    NAMESPACE ESNATIVE
)
