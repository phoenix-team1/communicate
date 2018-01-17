// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_FBCLIENTFANSGETSYSMSGRS_OFFCIALPACK_H_
#define FLATBUFFERS_GENERATED_FBCLIENTFANSGETSYSMSGRS_OFFCIALPACK_H_

#include "flatbuffers/flatbuffers.h"

#include "common_generated.h"
#include "fb_offcial_msg_generated.h"

namespace offcialpack {

struct T_CLIENT_FANS_GET_SYS_MSG_RS;

struct T_CLIENT_FANS_GET_SYS_MSG_RS FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_S_RS_HEAD = 4,
    VT_IS_FINISH = 6,
    VT_LIST_SYS_MSG_RESPONSE = 8,
    VT_LIST_PRIVATE_MSG_RESPONSE = 10
  };
  const commonpack::S_RS_HEAD *s_rs_head() const { return GetStruct<const commonpack::S_RS_HEAD *>(VT_S_RS_HEAD); }
  int8_t is_finish() const { return GetField<int8_t>(VT_IS_FINISH, 0); }
  const flatbuffers::Vector<flatbuffers::Offset<offcialpack::T_OFFCIAL_MESSAGE>> *list_sys_msg_response() const { return GetPointer<const flatbuffers::Vector<flatbuffers::Offset<offcialpack::T_OFFCIAL_MESSAGE>> *>(VT_LIST_SYS_MSG_RESPONSE); }
  const flatbuffers::Vector<flatbuffers::Offset<offcialpack::T_OFFCIAL_MESSAGE>> *list_private_msg_response() const { return GetPointer<const flatbuffers::Vector<flatbuffers::Offset<offcialpack::T_OFFCIAL_MESSAGE>> *>(VT_LIST_PRIVATE_MSG_RESPONSE); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<commonpack::S_RS_HEAD>(verifier, VT_S_RS_HEAD) &&
           VerifyField<int8_t>(verifier, VT_IS_FINISH) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_LIST_SYS_MSG_RESPONSE) &&
           verifier.Verify(list_sys_msg_response()) &&
           verifier.VerifyVectorOfTables(list_sys_msg_response()) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_LIST_PRIVATE_MSG_RESPONSE) &&
           verifier.Verify(list_private_msg_response()) &&
           verifier.VerifyVectorOfTables(list_private_msg_response()) &&
           verifier.EndTable();
  }
};

struct T_CLIENT_FANS_GET_SYS_MSG_RSBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_s_rs_head(const commonpack::S_RS_HEAD *s_rs_head) { fbb_.AddStruct(T_CLIENT_FANS_GET_SYS_MSG_RS::VT_S_RS_HEAD, s_rs_head); }
  void add_is_finish(int8_t is_finish) { fbb_.AddElement<int8_t>(T_CLIENT_FANS_GET_SYS_MSG_RS::VT_IS_FINISH, is_finish, 0); }
  void add_list_sys_msg_response(flatbuffers::Offset<flatbuffers::Vector<flatbuffers::Offset<offcialpack::T_OFFCIAL_MESSAGE>>> list_sys_msg_response) { fbb_.AddOffset(T_CLIENT_FANS_GET_SYS_MSG_RS::VT_LIST_SYS_MSG_RESPONSE, list_sys_msg_response); }
  void add_list_private_msg_response(flatbuffers::Offset<flatbuffers::Vector<flatbuffers::Offset<offcialpack::T_OFFCIAL_MESSAGE>>> list_private_msg_response) { fbb_.AddOffset(T_CLIENT_FANS_GET_SYS_MSG_RS::VT_LIST_PRIVATE_MSG_RESPONSE, list_private_msg_response); }
  T_CLIENT_FANS_GET_SYS_MSG_RSBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_CLIENT_FANS_GET_SYS_MSG_RSBuilder &operator=(const T_CLIENT_FANS_GET_SYS_MSG_RSBuilder &);
  flatbuffers::Offset<T_CLIENT_FANS_GET_SYS_MSG_RS> Finish() {
    auto o = flatbuffers::Offset<T_CLIENT_FANS_GET_SYS_MSG_RS>(fbb_.EndTable(start_, 4));
    return o;
  }
};

inline flatbuffers::Offset<T_CLIENT_FANS_GET_SYS_MSG_RS> CreateT_CLIENT_FANS_GET_SYS_MSG_RS(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RS_HEAD *s_rs_head = 0,
    int8_t is_finish = 0,
    flatbuffers::Offset<flatbuffers::Vector<flatbuffers::Offset<offcialpack::T_OFFCIAL_MESSAGE>>> list_sys_msg_response = 0,
    flatbuffers::Offset<flatbuffers::Vector<flatbuffers::Offset<offcialpack::T_OFFCIAL_MESSAGE>>> list_private_msg_response = 0) {
  T_CLIENT_FANS_GET_SYS_MSG_RSBuilder builder_(_fbb);
  builder_.add_list_private_msg_response(list_private_msg_response);
  builder_.add_list_sys_msg_response(list_sys_msg_response);
  builder_.add_s_rs_head(s_rs_head);
  builder_.add_is_finish(is_finish);
  return builder_.Finish();
}

inline flatbuffers::Offset<T_CLIENT_FANS_GET_SYS_MSG_RS> CreateT_CLIENT_FANS_GET_SYS_MSG_RSDirect(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RS_HEAD *s_rs_head = 0,
    int8_t is_finish = 0,
    const std::vector<flatbuffers::Offset<offcialpack::T_OFFCIAL_MESSAGE>> *list_sys_msg_response = nullptr,
    const std::vector<flatbuffers::Offset<offcialpack::T_OFFCIAL_MESSAGE>> *list_private_msg_response = nullptr) {
  return CreateT_CLIENT_FANS_GET_SYS_MSG_RS(_fbb, s_rs_head, is_finish, list_sys_msg_response ? _fbb.CreateVector<flatbuffers::Offset<offcialpack::T_OFFCIAL_MESSAGE>>(*list_sys_msg_response) : 0, list_private_msg_response ? _fbb.CreateVector<flatbuffers::Offset<offcialpack::T_OFFCIAL_MESSAGE>>(*list_private_msg_response) : 0);
}

inline const offcialpack::T_CLIENT_FANS_GET_SYS_MSG_RS *GetT_CLIENT_FANS_GET_SYS_MSG_RS(const void *buf) {
  return flatbuffers::GetRoot<offcialpack::T_CLIENT_FANS_GET_SYS_MSG_RS>(buf);
}

inline bool VerifyT_CLIENT_FANS_GET_SYS_MSG_RSBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<offcialpack::T_CLIENT_FANS_GET_SYS_MSG_RS>(nullptr);
}

inline void FinishT_CLIENT_FANS_GET_SYS_MSG_RSBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<offcialpack::T_CLIENT_FANS_GET_SYS_MSG_RS> root) {
  fbb.Finish(root);
}

}  // namespace offcialpack

#endif  // FLATBUFFERS_GENERATED_FBCLIENTFANSGETSYSMSGRS_OFFCIALPACK_H_
