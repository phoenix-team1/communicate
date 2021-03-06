// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_FBSINGLECHATSTATUSRS_SCPACK_H_
#define FLATBUFFERS_GENERATED_FBSINGLECHATSTATUSRS_SCPACK_H_

#include "flatbuffers/flatbuffers.h"

#include "common_generated.h"

namespace scpack {

struct T_SINGLE_CHAT_STATUS_RS;

struct T_SINGLE_CHAT_STATUS_RS FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_S_RS_HEAD = 4,
    VT_OP_USER_ID = 6,
    VT_CHAT_STATUS = 8
  };
  const commonpack::S_RS_HEAD *s_rs_head() const { return GetStruct<const commonpack::S_RS_HEAD *>(VT_S_RS_HEAD); }
  uint64_t op_user_id() const { return GetField<uint64_t>(VT_OP_USER_ID, 0); }
  int8_t chat_status() const { return GetField<int8_t>(VT_CHAT_STATUS, 0); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<commonpack::S_RS_HEAD>(verifier, VT_S_RS_HEAD) &&
           VerifyField<uint64_t>(verifier, VT_OP_USER_ID) &&
           VerifyField<int8_t>(verifier, VT_CHAT_STATUS) &&
           verifier.EndTable();
  }
};

struct T_SINGLE_CHAT_STATUS_RSBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_s_rs_head(const commonpack::S_RS_HEAD *s_rs_head) { fbb_.AddStruct(T_SINGLE_CHAT_STATUS_RS::VT_S_RS_HEAD, s_rs_head); }
  void add_op_user_id(uint64_t op_user_id) { fbb_.AddElement<uint64_t>(T_SINGLE_CHAT_STATUS_RS::VT_OP_USER_ID, op_user_id, 0); }
  void add_chat_status(int8_t chat_status) { fbb_.AddElement<int8_t>(T_SINGLE_CHAT_STATUS_RS::VT_CHAT_STATUS, chat_status, 0); }
  T_SINGLE_CHAT_STATUS_RSBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_SINGLE_CHAT_STATUS_RSBuilder &operator=(const T_SINGLE_CHAT_STATUS_RSBuilder &);
  flatbuffers::Offset<T_SINGLE_CHAT_STATUS_RS> Finish() {
    auto o = flatbuffers::Offset<T_SINGLE_CHAT_STATUS_RS>(fbb_.EndTable(start_, 3));
    return o;
  }
};

inline flatbuffers::Offset<T_SINGLE_CHAT_STATUS_RS> CreateT_SINGLE_CHAT_STATUS_RS(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RS_HEAD *s_rs_head = 0,
    uint64_t op_user_id = 0,
    int8_t chat_status = 0) {
  T_SINGLE_CHAT_STATUS_RSBuilder builder_(_fbb);
  builder_.add_op_user_id(op_user_id);
  builder_.add_s_rs_head(s_rs_head);
  builder_.add_chat_status(chat_status);
  return builder_.Finish();
}

inline const scpack::T_SINGLE_CHAT_STATUS_RS *GetT_SINGLE_CHAT_STATUS_RS(const void *buf) {
  return flatbuffers::GetRoot<scpack::T_SINGLE_CHAT_STATUS_RS>(buf);
}

inline bool VerifyT_SINGLE_CHAT_STATUS_RSBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<scpack::T_SINGLE_CHAT_STATUS_RS>(nullptr);
}

inline void FinishT_SINGLE_CHAT_STATUS_RSBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<scpack::T_SINGLE_CHAT_STATUS_RS> root) {
  fbb.Finish(root);
}

}  // namespace scpack

#endif  // FLATBUFFERS_GENERATED_FBSINGLECHATSTATUSRS_SCPACK_H_
