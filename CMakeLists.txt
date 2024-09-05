cmake_minimum_required(VERSION 3.15)

set(CMAKE_BINARY_DIR "${CMAKE_CURRENT_LIST_DIR}/dist")

project(ESNATIVE)

include(CMakeJS)

configure_file("include/addon.hpp" "include/addon.hpp")

cmakejs_create_napi_addon(

    #[[ NAME         ]] "addon"
    #[[ SOURCES      ]] "src/lib/addon.cpp" "include/addon.hpp"
    #[[ OPTIONS      ]]
    NAMESPACE #[[    ]] "ESNATIVE"
    ALIAS #[[        ]] "ESNATIVE::addon"
    NAPI_VERSION #[[ ]] 9
)
