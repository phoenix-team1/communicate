// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_FBCLIENTGETOFFLINEMESSAGERS_SCPACK_H_
#define FLATBUFFERS_GENERATED_FBCLIENTGETOFFLINEMESSAGERS_SCPACK_H_

#include "flatbuffers/flatbuffers.h"

#include "common_generated.h"
#include "fb_offline_msg_generated.h"

namespace scpack {

struct T_CHAT_GET_OFFLINE_MESSAGE_RS;

struct T_CHAT_GET_OFFLINE_MESSAGE_RS FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_S_RS_HEAD = 4,
    VT_NEXT_MESSAGE_ID = 6,
    VT_S_OFFLINE_MSG_LIST = 8
  };
  const commonpack::S_RS_HEAD *s_rs_head() const { return GetStruct<const commonpack::S_RS_HEAD *>(VT_S_RS_HEAD); }
  uint64_t next_message_id() const { return GetField<uint64_t>(VT_NEXT_MESSAGE_ID, 0); }
  const flatbuffers::Vector<flatbuffers::Offset<scpack::T_OFFLINE_MSG>> *s_offline_msg_list() const { return GetPointer<const flatbuffers::Vector<flatbuffers::Offset<scpack::T_OFFLINE_MSG>> *>(VT_S_OFFLINE_MSG_LIST); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<commonpack::S_RS_HEAD>(verifier, VT_S_RS_HEAD) &&
           VerifyField<uint64_t>(verifier, VT_NEXT_MESSAGE_ID) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_S_OFFLINE_MSG_LIST) &&
           verifier.Verify(s_offline_msg_list()) &&
           verifier.VerifyVectorOfTables(s_offline_msg_list()) &&
           verifier.EndTable();
  }
};

struct T_CHAT_GET_OFFLINE_MESSAGE_RSBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_s_rs_head(const commonpack::S_RS_HEAD *s_rs_head) { fbb_.AddStruct(T_CHAT_GET_OFFLINE_MESSAGE_RS::VT_S_RS_HEAD, s_rs_head); }
  void add_next_message_id(uint64_t next_message_id) { fbb_.AddElement<uint64_t>(T_CHAT_GET_OFFLINE_MESSAGE_RS::VT_NEXT_MESSAGE_ID, next_message_id, 0); }
  void add_s_offline_msg_list(flatbuffers::Offset<flatbuffers::Vector<flatbuffers::Offset<scpack::T_OFFLINE_MSG>>> s_offline_msg_list) { fbb_.AddOffset(T_CHAT_GET_OFFLINE_MESSAGE_RS::VT_S_OFFLINE_MSG_LIST, s_offline_msg_list); }
  T_CHAT_GET_OFFLINE_MESSAGE_RSBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_CHAT_GET_OFFLINE_MESSAGE_RSBuilder &operator=(const T_CHAT_GET_OFFLINE_MESSAGE_RSBuilder &);
  flatbuffers::Offset<T_CHAT_GET_OFFLINE_MESSAGE_RS> Finish() {
    auto o = flatbuffers::Offset<T_CHAT_GET_OFFLINE_MESSAGE_RS>(fbb_.EndTable(start_, 3));
    return o;
  }
};

inline flatbuffers::Offset<T_CHAT_GET_OFFLINE_MESSAGE_RS> CreateT_CHAT_GET_OFFLINE_MESSAGE_RS(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RS_HEAD *s_rs_head = 0,
    uint64_t next_message_id = 0,
    flatbuffers::Offset<flatbuffers::Vector<flatbuffers::Offset<scpack::T_OFFLINE_MSG>>> s_offline_msg_list = 0) {
  T_CHAT_GET_OFFLINE_MESSAGE_RSBuilder builder_(_fbb);
  builder_.add_next_message_id(next_message_id);
  builder_.add_s_offline_msg_list(s_offline_msg_list);
  builder_.add_s_rs_head(s_rs_head);
  return builder_.Finish();
}

inline flatbuffers::Offset<T_CHAT_GET_OFFLINE_MESSAGE_RS> CreateT_CHAT_GET_OFFLINE_MESSAGE_RSDirect(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RS_HEAD *s_rs_head = 0,
    uint64_t next_message_id = 0,
    const std::vector<flatbuffers::Offset<scpack::T_OFFLINE_MSG>> *s_offline_msg_list = nullptr) {
  return CreateT_CHAT_GET_OFFLINE_MESSAGE_RS(_fbb, s_rs_head, next_message_id, s_offline_msg_list ? _fbb.CreateVector<flatbuffers::Offset<scpack::T_OFFLINE_MSG>>(*s_offline_msg_list) : 0);
}

inline const scpack::T_CHAT_GET_OFFLINE_MESSAGE_RS *GetT_CHAT_GET_OFFLINE_MESSAGE_RS(const void *buf) {
  return flatbuffers::GetRoot<scpack::T_CHAT_GET_OFFLINE_MESSAGE_RS>(buf);
}

inline bool VerifyT_CHAT_GET_OFFLINE_MESSAGE_RSBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<scpack::T_CHAT_GET_OFFLINE_MESSAGE_RS>(nullptr);
}

inline void FinishT_CHAT_GET_OFFLINE_MESSAGE_RSBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<scpack::T_CHAT_GET_OFFLINE_MESSAGE_RS> root) {
  fbb.Finish(root);
}

}  // namespace scpack

#endif  // FLATBUFFERS_GENERATED_FBCLIENTGETOFFLINEMESSAGERS_SCPACK_H_
