/**
 * @file addon.hpp
 * @brief A quick 'hello world' Napi Addon in C++
 */

// Required header and C++ flag
#if __has_include(<napi.h>) && BUILDING_NODE_EXTENSION

#include <napi.h>

#ifndef STRINGIFY
#define STRINGIFY_HELPER(n) #n
#define STRINGIFY(n) STRINGIFY_HELPER(n)
#endif

namespace Napi {
namespace NAPI_CPP_CUSTOM_NAMESPACE {

Value Hello(const CallbackInfo& callbackInfo);
Value Version(const CallbackInfo& callbackInfo);
Value GetNapiVersion(const CallbackInfo& callbackInfo);
Value GetNodeVersion(const CallbackInfo& callbackInfo);

} // namespace NAPI_CPP_CUSTOM_NAMESPACE
} // namespace Napi

namespace NAPI_CPP_CUSTOM_NAMESPACE::CMAKEJS_ADDON_NAME {
using namespace Napi::NAPI_CPP_CUSTOM_NAMESPACE;
/**
 * This code block exports your custom namespace to outside of the N-Api
 * namespace, providing an alias to the Node Addon API.
 *
 * e.g.:
 *
 * '<vendor>::<addon>::Object()',
 *
 * ...along with the functions defined in the addon itself, such as:
 *
 * '<vendor>::<addon>::Hello()'.
 */
}


#else // !__has_include(<napi.h>) || !BUILDING_NODE_EXTENSION
#warning                                                                       \
    "Warning: Cannot find '<napi.h>' - try running 'npm -g install cmake-js'..."
#endif
