// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_FBGETUSERREMARKNAMERS_GROUPPACK_H_
#define FLATBUFFERS_GENERATED_FBGETUSERREMARKNAMERS_GROUPPACK_H_

#include "flatbuffers/flatbuffers.h"

#include "common_generated.h"

namespace grouppack {

struct T_GROUP_GET_USER_REMARK_NAME_RS;

struct T_GROUP_GET_USER_REMARK_NAME_RS FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_S_RS_HEAD = 4,
    VT_GROUP_ID = 6,
    VT_USER_REMARK_NAME = 8
  };
  const commonpack::S_RS_HEAD *s_rs_head() const { return GetStruct<const commonpack::S_RS_HEAD *>(VT_S_RS_HEAD); }
  uint64_t group_id() const { return GetField<uint64_t>(VT_GROUP_ID, 0); }
  const flatbuffers::String *user_remark_name() const { return GetPointer<const flatbuffers::String *>(VT_USER_REMARK_NAME); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<commonpack::S_RS_HEAD>(verifier, VT_S_RS_HEAD) &&
           VerifyField<uint64_t>(verifier, VT_GROUP_ID) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_USER_REMARK_NAME) &&
           verifier.Verify(user_remark_name()) &&
           verifier.EndTable();
  }
};

struct T_GROUP_GET_USER_REMARK_NAME_RSBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_s_rs_head(const commonpack::S_RS_HEAD *s_rs_head) { fbb_.AddStruct(T_GROUP_GET_USER_REMARK_NAME_RS::VT_S_RS_HEAD, s_rs_head); }
  void add_group_id(uint64_t group_id) { fbb_.AddElement<uint64_t>(T_GROUP_GET_USER_REMARK_NAME_RS::VT_GROUP_ID, group_id, 0); }
  void add_user_remark_name(flatbuffers::Offset<flatbuffers::String> user_remark_name) { fbb_.AddOffset(T_GROUP_GET_USER_REMARK_NAME_RS::VT_USER_REMARK_NAME, user_remark_name); }
  T_GROUP_GET_USER_REMARK_NAME_RSBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_GROUP_GET_USER_REMARK_NAME_RSBuilder &operator=(const T_GROUP_GET_USER_REMARK_NAME_RSBuilder &);
  flatbuffers::Offset<T_GROUP_GET_USER_REMARK_NAME_RS> Finish() {
    auto o = flatbuffers::Offset<T_GROUP_GET_USER_REMARK_NAME_RS>(fbb_.EndTable(start_, 3));
    return o;
  }
};

inline flatbuffers::Offset<T_GROUP_GET_USER_REMARK_NAME_RS> CreateT_GROUP_GET_USER_REMARK_NAME_RS(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RS_HEAD *s_rs_head = 0,
    uint64_t group_id = 0,
    flatbuffers::Offset<flatbuffers::String> user_remark_name = 0) {
  T_GROUP_GET_USER_REMARK_NAME_RSBuilder builder_(_fbb);
  builder_.add_group_id(group_id);
  builder_.add_user_remark_name(user_remark_name);
  builder_.add_s_rs_head(s_rs_head);
  return builder_.Finish();
}

inline flatbuffers::Offset<T_GROUP_GET_USER_REMARK_NAME_RS> CreateT_GROUP_GET_USER_REMARK_NAME_RSDirect(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RS_HEAD *s_rs_head = 0,
    uint64_t group_id = 0,
    const char *user_remark_name = nullptr) {
  return CreateT_GROUP_GET_USER_REMARK_NAME_RS(_fbb, s_rs_head, group_id, user_remark_name ? _fbb.CreateString(user_remark_name) : 0);
}

inline const grouppack::T_GROUP_GET_USER_REMARK_NAME_RS *GetT_GROUP_GET_USER_REMARK_NAME_RS(const void *buf) {
  return flatbuffers::GetRoot<grouppack::T_GROUP_GET_USER_REMARK_NAME_RS>(buf);
}

inline bool VerifyT_GROUP_GET_USER_REMARK_NAME_RSBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<grouppack::T_GROUP_GET_USER_REMARK_NAME_RS>(nullptr);
}

inline void FinishT_GROUP_GET_USER_REMARK_NAME_RSBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<grouppack::T_GROUP_GET_USER_REMARK_NAME_RS> root) {
  fbb.Finish(root);
}

}  // namespace grouppack

#endif  // FLATBUFFERS_GENERATED_FBGETUSERREMARKNAMERS_GROUPPACK_H_