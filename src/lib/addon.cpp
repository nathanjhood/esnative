/**
 * @file addon.cpp
 * @brief A quick 'hello world' Napi Addon in C++
*/

// Required header and C++ flag
#if __has_include(<napi.h>) && BUILDING_NODE_EXTENSION

#include <napi.h>

#ifndef STRINGIFY
# define STRINGIFY_HELPER(n) #n
# define STRINGIFY(n) STRINGIFY_HELPER(n)
#endif

#include "addon.hpp"

namespace Napi
{
namespace NAPI_CPP_CUSTOM_NAMESPACE
{

Napi::Value Hello(const Napi::CallbackInfo& info) {
  using namespace Napi;
  return String::New(info.Env(), STRINGIFY(CMAKEJS_ADDON_NAME)".node is online!");
}

Napi::Value Version(const Napi::CallbackInfo& callbackInfo) {
  using namespace Napi;
  const auto& env = callbackInfo.Env();
  return Number::New(env, NAPI_VERSION);
}

Napi::Value GetNapiVersion(const Napi::CallbackInfo& callbackInfo) {
  using namespace Napi;
  const auto& env = callbackInfo.Env();
  return Number::New(env, VersionManagement::GetNapiVersion(env));
}

Napi::Value GetNodeVersion(const Napi::CallbackInfo& callbackInfo) {
  using namespace Napi;
  const auto& env = callbackInfo.Env();
  const Object version = Object::New(env);
  const auto major = version.Set(String::New(env, "major"), VersionManagement::GetNodeVersion(env)->major);
  const auto minor = version.Set(String::New(env, "minor"), VersionManagement::GetNodeVersion(env)->minor);
  const auto patch = version.Set(String::New(env, "patch"), VersionManagement::GetNodeVersion(env)->patch);
  const auto release = version.Set(String::New(env, "release"), VersionManagement::GetNodeVersion(env)->release);
  return version;
}

Napi::Value Global(const Napi::CallbackInfo &info) {
  using namespace Napi;
  const Env env = info.Env();
  return env.Global();
}

Napi::Value Undefined(const Napi::CallbackInfo &info) {
  using namespace Napi;
  const Env env = info.Env();
  return env.Undefined();
}

Napi::Value Null(const Napi::CallbackInfo &info) {
  using namespace Napi;
  const Env env = info.Env();
  return env.Null();
}

auto initialize = [](Napi::Env env, Napi::Object exports) {
  using namespace Napi;
  // Export a chosen C++ function under a given Javascript key/value pair
  exports.Set(
    String::New(env, "hello"), // Name of function on Javascript side...
    Function::New(env, Hello)  // Name of function on C++ side...
  );

    exports.Set(
    String::New(env, "version"),
    Function::New(env, Version)
  );

  exports.Set(
    String::New(env, "getNapiVersion"),
    Function::New(env, GetNapiVersion)
  );

  exports.Set(
    String::New(env, "getNodeVersion"),
    Function::New(env, GetNodeVersion)
  );

  exports.Set(
    String::New(env, "global"),
    Function::New(env, Global)
  );

  exports.Set(
    String::New(env, "undefined"),
    Function::New(env, Undefined)
  );

    exports.Set(
    String::New(env, "null"),
    Function::New(env, Null)
  );

  const bool isFrozen = exports.Freeze();

  return exports;
};

// Register a new addon with the intializer function defined above
NODE_API_MODULE(CMAKEJS_ADDON_NAME, initialize) // (name to use, initializer to use)

} // namespace NAPI_CPP_CUSTOM_NAMESPACE
} // namespace Napi

// Export your custom namespace to outside of the Napi namespace, providing an
// alias to the Napi Addon API; e.g., '<vendor>::<addon>::Object()', along with the
// functions defined above, such as '<vendor>::<addon>::Hello()'.
namespace NAPI_CPP_CUSTOM_NAMESPACE::CMAKEJS_ADDON_NAME {
  using namespace Napi::NAPI_CPP_CUSTOM_NAMESPACE;
}

#else // !__has_include(<napi.h>) || !BUILDING_NODE_EXTENSION
 #warning "Warning: Cannot find '<napi.h>' - try running 'npm -g install cmake-js'..."
#endif
