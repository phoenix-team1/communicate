// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_TMOMENTSSETTINGBLACKNOTCARELISTMODIFYNOTIFY_MOMENTSPACK_H_
#define FLATBUFFERS_GENERATED_TMOMENTSSETTINGBLACKNOTCARELISTMODIFYNOTIFY_MOMENTSPACK_H_

#include "flatbuffers/flatbuffers.h"

#include "common_generated.h"
#include "t_moments_common_generated.h"

namespace momentspack {

struct T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY;

struct T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_USER_ID = 4,
    VT_LIST = 6
  };
  uint64_t user_id() const { return GetField<uint64_t>(VT_USER_ID, 0); }
  const flatbuffers::Vector<const momentspack::T_SETTING_LIST_DTO *> *list() const { return GetPointer<const flatbuffers::Vector<const momentspack::T_SETTING_LIST_DTO *> *>(VT_LIST); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<uint64_t>(verifier, VT_USER_ID) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_LIST) &&
           verifier.Verify(list()) &&
           verifier.EndTable();
  }
};

struct T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFYBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_user_id(uint64_t user_id) { fbb_.AddElement<uint64_t>(T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY::VT_USER_ID, user_id, 0); }
  void add_list(flatbuffers::Offset<flatbuffers::Vector<const momentspack::T_SETTING_LIST_DTO *>> list) { fbb_.AddOffset(T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY::VT_LIST, list); }
  T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFYBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFYBuilder &operator=(const T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFYBuilder &);
  flatbuffers::Offset<T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY> Finish() {
    auto o = flatbuffers::Offset<T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY>(fbb_.EndTable(start_, 2));
    return o;
  }
};

inline flatbuffers::Offset<T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY> CreateT_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY(flatbuffers::FlatBufferBuilder &_fbb,
    uint64_t user_id = 0,
    flatbuffers::Offset<flatbuffers::Vector<const momentspack::T_SETTING_LIST_DTO *>> list = 0) {
  T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFYBuilder builder_(_fbb);
  builder_.add_user_id(user_id);
  builder_.add_list(list);
  return builder_.Finish();
}

inline flatbuffers::Offset<T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY> CreateT_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFYDirect(flatbuffers::FlatBufferBuilder &_fbb,
    uint64_t user_id = 0,
    const std::vector<const momentspack::T_SETTING_LIST_DTO *> *list = nullptr) {
  return CreateT_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY(_fbb, user_id, list ? _fbb.CreateVector<const momentspack::T_SETTING_LIST_DTO *>(*list) : 0);
}

inline const momentspack::T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY *GetT_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY(const void *buf) {
  return flatbuffers::GetRoot<momentspack::T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY>(buf);
}

inline bool VerifyT_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFYBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<momentspack::T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY>(nullptr);
}

inline void FinishT_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFYBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<momentspack::T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY> root) {
  fbb.Finish(root);
}

}  // namespace momentspack

#endif  // FLATBUFFERS_GENERATED_TMOMENTSSETTINGBLACKNOTCARELISTMODIFYNOTIFY_MOMENTSPACK_H_
