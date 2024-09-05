/**
 * @file addon.cpp
 * @brief A quick 'hello world' Napi Addon in C++
 */


// Required header and C++ flag
#if __has_include(<napi.h>) && BUILDING_NODE_EXTENSION

#include <napi.h>

#include "addon.hpp"

namespace Napi {
namespace NAPI_CPP_CUSTOM_NAMESPACE {

Value Hello(const CallbackInfo &callbackInfo) {
  using namespace Napi;
  const auto &env = callbackInfo.Env();
  return String::New(env, STRINGIFY(CMAKEJS_ADDON_NAME) ".node is online!");
}

Value Version(const CallbackInfo &callbackInfo) {
  using namespace Napi;
  const auto &env = callbackInfo.Env();
  return Number::New(env, NAPI_VERSION);
}

Value GetNapiVersion(const CallbackInfo &callbackInfo) {
  using namespace Napi;
  const auto &env = callbackInfo.Env();
  return Number::New(env, VersionManagement::GetNapiVersion(env));
}

Value GetNodeVersion(const CallbackInfo &callbackInfo) {
  using namespace Napi;
  const auto &env = callbackInfo.Env();
  const Object version = Object::New(env);

  const auto major = version.Set(                   //
      String::New(env, "major"),                    //
      VersionManagement::GetNodeVersion(env)->major //
  );

  const auto minor = version.Set(                   //
      String::New(env, "minor"),                    //
      VersionManagement::GetNodeVersion(env)->minor //
  );

  const auto patch = version.Set(                   //
      String::New(env, "patch"),                    //
      VersionManagement::GetNodeVersion(env)->patch //
  );

  const auto release = version.Set(                   //
      String::New(env, "release"),                    //
      VersionManagement::GetNodeVersion(env)->release //
  );
  return version;
}

Value Global(const CallbackInfo &callbackInfo) {
  using namespace Napi;
  const auto &env = callbackInfo.Env();
  return env.Global();
}

Value Undefined(const CallbackInfo &callbackInfo) {
  using namespace Napi;
  const auto &env = callbackInfo.Env();
  return env.Undefined();
}

Value Null(const CallbackInfo &callbackInfo) {
  using namespace Napi;
  const auto &env = callbackInfo.Env();
  return env.Null();
}
const auto &initialize = [](Env env, Object exports) {
  // using namespace Napi;

  exports.Set(                            //
      String::New(env, "hello"),          //
      Function::New<Hello>(env)           //
  );

  exports.Set(                              //
      String::New(env, "version"),          //
      Function::New<Version>(env)           //
  );

  exports.Set(                                     //
      String::New(env, "getNapiVersion"),          //
      Function::New<GetNapiVersion>(env)           //
  );

  exports.Set(                                     //
      String::New(env, "getNodeVersion"),          //
      Function::New<GetNodeVersion>(env)           //
  );

  exports.Set(                             //
      String::New(env, "global"),          //
      Function::New<Global>(env)           //
  );

  exports.Set(                                //
      String::New(env, "undefined"),          //
      Function::New<Undefined>(env)           //
  );

  exports.Set(                           //
      String::New(env, "null"),          //
      Function::New<Null>(env)           //
  );

  const bool isFrozen = exports.Freeze();

  return exports;
};

/**
 * Register a new addon with the intializer function defined above
 */
NODE_API_MODULE(CMAKEJS_ADDON_NAME, initialize)

} // namespace NAPI_CPP_CUSTOM_NAMESPACE
} // namespace Napi


#else // !__has_include(<napi.h>) || !BUILDING_NODE_EXTENSION
#warning                                                                       \
    "Warning: Cannot find '<napi.h>' - try running 'npm -g install cmake-js'..."
#endif
