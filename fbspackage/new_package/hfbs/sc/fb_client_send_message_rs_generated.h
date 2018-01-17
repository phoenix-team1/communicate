// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_FBCLIENTSENDMESSAGERS_SCPACK_H_
#define FLATBUFFERS_GENERATED_FBCLIENTSENDMESSAGERS_SCPACK_H_

#include "flatbuffers/flatbuffers.h"

#include "common_generated.h"

namespace scpack {

struct T_CHAT_CLIENT_SEND_MESSAGE_RS;

struct T_CHAT_CLIENT_SEND_MESSAGE_RS FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_S_RS_HEAD = 4,
    VT_OP_USER_ID = 6,
    VT_MESSAGE_ID = 8,
    VT_S_MSG = 10,
    VT_B_ID = 12,
    VT_W_ID = 14,
    VT_C_ID = 16
  };
  const commonpack::S_RS_HEAD *s_rs_head() const { return GetStruct<const commonpack::S_RS_HEAD *>(VT_S_RS_HEAD); }
  uint64_t op_user_id() const { return GetField<uint64_t>(VT_OP_USER_ID, 0); }
  uint64_t message_id() const { return GetField<uint64_t>(VT_MESSAGE_ID, 0); }
  const commonpack::S_MSG *s_msg() const { return GetPointer<const commonpack::S_MSG *>(VT_S_MSG); }
  uint64_t b_id() const { return GetField<uint64_t>(VT_B_ID, 0); }
  uint64_t w_id() const { return GetField<uint64_t>(VT_W_ID, 0); }
  uint64_t c_id() const { return GetField<uint64_t>(VT_C_ID, 0); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<commonpack::S_RS_HEAD>(verifier, VT_S_RS_HEAD) &&
           VerifyField<uint64_t>(verifier, VT_OP_USER_ID) &&
           VerifyField<uint64_t>(verifier, VT_MESSAGE_ID) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_S_MSG) &&
           verifier.VerifyTable(s_msg()) &&
           VerifyField<uint64_t>(verifier, VT_B_ID) &&
           VerifyField<uint64_t>(verifier, VT_W_ID) &&
           VerifyField<uint64_t>(verifier, VT_C_ID) &&
           verifier.EndTable();
  }
};

struct T_CHAT_CLIENT_SEND_MESSAGE_RSBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_s_rs_head(const commonpack::S_RS_HEAD *s_rs_head) { fbb_.AddStruct(T_CHAT_CLIENT_SEND_MESSAGE_RS::VT_S_RS_HEAD, s_rs_head); }
  void add_op_user_id(uint64_t op_user_id) { fbb_.AddElement<uint64_t>(T_CHAT_CLIENT_SEND_MESSAGE_RS::VT_OP_USER_ID, op_user_id, 0); }
  void add_message_id(uint64_t message_id) { fbb_.AddElement<uint64_t>(T_CHAT_CLIENT_SEND_MESSAGE_RS::VT_MESSAGE_ID, message_id, 0); }
  void add_s_msg(flatbuffers::Offset<commonpack::S_MSG> s_msg) { fbb_.AddOffset(T_CHAT_CLIENT_SEND_MESSAGE_RS::VT_S_MSG, s_msg); }
  void add_b_id(uint64_t b_id) { fbb_.AddElement<uint64_t>(T_CHAT_CLIENT_SEND_MESSAGE_RS::VT_B_ID, b_id, 0); }
  void add_w_id(uint64_t w_id) { fbb_.AddElement<uint64_t>(T_CHAT_CLIENT_SEND_MESSAGE_RS::VT_W_ID, w_id, 0); }
  void add_c_id(uint64_t c_id) { fbb_.AddElement<uint64_t>(T_CHAT_CLIENT_SEND_MESSAGE_RS::VT_C_ID, c_id, 0); }
  T_CHAT_CLIENT_SEND_MESSAGE_RSBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_CHAT_CLIENT_SEND_MESSAGE_RSBuilder &operator=(const T_CHAT_CLIENT_SEND_MESSAGE_RSBuilder &);
  flatbuffers::Offset<T_CHAT_CLIENT_SEND_MESSAGE_RS> Finish() {
    auto o = flatbuffers::Offset<T_CHAT_CLIENT_SEND_MESSAGE_RS>(fbb_.EndTable(start_, 7));
    return o;
  }
};

inline flatbuffers::Offset<T_CHAT_CLIENT_SEND_MESSAGE_RS> CreateT_CHAT_CLIENT_SEND_MESSAGE_RS(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RS_HEAD *s_rs_head = 0,
    uint64_t op_user_id = 0,
    uint64_t message_id = 0,
    flatbuffers::Offset<commonpack::S_MSG> s_msg = 0,
    uint64_t b_id = 0,
    uint64_t w_id = 0,
    uint64_t c_id = 0) {
  T_CHAT_CLIENT_SEND_MESSAGE_RSBuilder builder_(_fbb);
  builder_.add_c_id(c_id);
  builder_.add_w_id(w_id);
  builder_.add_b_id(b_id);
  builder_.add_message_id(message_id);
  builder_.add_op_user_id(op_user_id);
  builder_.add_s_msg(s_msg);
  builder_.add_s_rs_head(s_rs_head);
  return builder_.Finish();
}

inline const scpack::T_CHAT_CLIENT_SEND_MESSAGE_RS *GetT_CHAT_CLIENT_SEND_MESSAGE_RS(const void *buf) {
  return flatbuffers::GetRoot<scpack::T_CHAT_CLIENT_SEND_MESSAGE_RS>(buf);
}

inline bool VerifyT_CHAT_CLIENT_SEND_MESSAGE_RSBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<scpack::T_CHAT_CLIENT_SEND_MESSAGE_RS>(nullptr);
}

inline void FinishT_CHAT_CLIENT_SEND_MESSAGE_RSBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<scpack::T_CHAT_CLIENT_SEND_MESSAGE_RS> root) {
  fbb.Finish(root);
}

}  // namespace scpack

#endif  // FLATBUFFERS_GENERATED_FBCLIENTSENDMESSAGERS_SCPACK_H_