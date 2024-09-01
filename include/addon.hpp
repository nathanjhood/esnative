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

Napi::Value Hello(const Napi::CallbackInfo &info);

Napi::Value Version(const Napi::CallbackInfo &info);

Napi::Object Init(Napi::Env env, Napi::Object exports);

} // namespace NAPI_CPP_CUSTOM_NAMESPACE
} // namespace Napi

// Export your custom namespace to outside of the Napi namespace, providing an
// alias to the Napi Addon API; e.g., '<vendor>::<addon>::Object()', along with
// the functions defined above, such as '<vendor>::<addon>::Hello()'.
namespace NAPI_CPP_CUSTOM_NAMESPACE::CMAKEJS_ADDON_NAME {
using namespace Napi::NAPI_CPP_CUSTOM_NAMESPACE;
}

#else // !__has_include(<napi.h>) || !BUILDING_NODE_EXTENSION
#warning                                                                       \
    "Warning: Cannot find '<napi.h>' - try running 'npm -g install cmake-js'..."
#endif
