// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_FBFRIENDREMARKRS_FRIENDPACK_H_
#define FLATBUFFERS_GENERATED_FBFRIENDREMARKRS_FRIENDPACK_H_

#include "flatbuffers/flatbuffers.h"

#include "common_generated.h"

namespace friendpack {

struct T_FRIEND_REMARK_RS;

struct T_FRIEND_REMARK_RS FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_S_RS_HEAD = 4,
    VT_PEER_USER_ID = 6,
    VT_PEER_REMARK_NAME = 8,
    VT_TOKEN = 10
  };
  const commonpack::S_RS_HEAD *s_rs_head() const { return GetStruct<const commonpack::S_RS_HEAD *>(VT_S_RS_HEAD); }
  uint64_t peer_user_id() const { return GetField<uint64_t>(VT_PEER_USER_ID, 0); }
  const flatbuffers::String *peer_remark_name() const { return GetPointer<const flatbuffers::String *>(VT_PEER_REMARK_NAME); }
  uint64_t token() const { return GetField<uint64_t>(VT_TOKEN, 0); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<commonpack::S_RS_HEAD>(verifier, VT_S_RS_HEAD) &&
           VerifyField<uint64_t>(verifier, VT_PEER_USER_ID) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_PEER_REMARK_NAME) &&
           verifier.Verify(peer_remark_name()) &&
           VerifyField<uint64_t>(verifier, VT_TOKEN) &&
           verifier.EndTable();
  }
};

struct T_FRIEND_REMARK_RSBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_s_rs_head(const commonpack::S_RS_HEAD *s_rs_head) { fbb_.AddStruct(T_FRIEND_REMARK_RS::VT_S_RS_HEAD, s_rs_head); }
  void add_peer_user_id(uint64_t peer_user_id) { fbb_.AddElement<uint64_t>(T_FRIEND_REMARK_RS::VT_PEER_USER_ID, peer_user_id, 0); }
  void add_peer_remark_name(flatbuffers::Offset<flatbuffers::String> peer_remark_name) { fbb_.AddOffset(T_FRIEND_REMARK_RS::VT_PEER_REMARK_NAME, peer_remark_name); }
  void add_token(uint64_t token) { fbb_.AddElement<uint64_t>(T_FRIEND_REMARK_RS::VT_TOKEN, token, 0); }
  T_FRIEND_REMARK_RSBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_FRIEND_REMARK_RSBuilder &operator=(const T_FRIEND_REMARK_RSBuilder &);
  flatbuffers::Offset<T_FRIEND_REMARK_RS> Finish() {
    auto o = flatbuffers::Offset<T_FRIEND_REMARK_RS>(fbb_.EndTable(start_, 4));
    return o;
  }
};

inline flatbuffers::Offset<T_FRIEND_REMARK_RS> CreateT_FRIEND_REMARK_RS(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RS_HEAD *s_rs_head = 0,
    uint64_t peer_user_id = 0,
    flatbuffers::Offset<flatbuffers::String> peer_remark_name = 0,
    uint64_t token = 0) {
  T_FRIEND_REMARK_RSBuilder builder_(_fbb);
  builder_.add_token(token);
  builder_.add_peer_user_id(peer_user_id);
  builder_.add_peer_remark_name(peer_remark_name);
  builder_.add_s_rs_head(s_rs_head);
  return builder_.Finish();
}

inline flatbuffers::Offset<T_FRIEND_REMARK_RS> CreateT_FRIEND_REMARK_RSDirect(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RS_HEAD *s_rs_head = 0,
    uint64_t peer_user_id = 0,
    const char *peer_remark_name = nullptr,
    uint64_t token = 0) {
  return CreateT_FRIEND_REMARK_RS(_fbb, s_rs_head, peer_user_id, peer_remark_name ? _fbb.CreateString(peer_remark_name) : 0, token);
}

inline const friendpack::T_FRIEND_REMARK_RS *GetT_FRIEND_REMARK_RS(const void *buf) {
  return flatbuffers::GetRoot<friendpack::T_FRIEND_REMARK_RS>(buf);
}

inline bool VerifyT_FRIEND_REMARK_RSBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<friendpack::T_FRIEND_REMARK_RS>(nullptr);
}

inline void FinishT_FRIEND_REMARK_RSBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<friendpack::T_FRIEND_REMARK_RS> root) {
  fbb.Finish(root);
}

}  // namespace friendpack

#endif  // FLATBUFFERS_GENERATED_FBFRIENDREMARKRS_FRIENDPACK_H_
