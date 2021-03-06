// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_FBFRIENDUPDATERS_FRIENDPACK_H_
#define FLATBUFFERS_GENERATED_FBFRIENDUPDATERS_FRIENDPACK_H_

#include "flatbuffers/flatbuffers.h"

#include "common_generated.h"

namespace friendpack {

struct T_FRIEND_UPDATE_RS;

struct T_FRIEND_UPDATE_RS FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_S_RS_HEAD = 4,
    VT_PEER_USER_ID = 6,
    VT_TOKEN = 8
  };
  const commonpack::S_RS_HEAD *s_rs_head() const { return GetStruct<const commonpack::S_RS_HEAD *>(VT_S_RS_HEAD); }
  uint64_t peer_user_id() const { return GetField<uint64_t>(VT_PEER_USER_ID, 0); }
  uint64_t token() const { return GetField<uint64_t>(VT_TOKEN, 0); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<commonpack::S_RS_HEAD>(verifier, VT_S_RS_HEAD) &&
           VerifyField<uint64_t>(verifier, VT_PEER_USER_ID) &&
           VerifyField<uint64_t>(verifier, VT_TOKEN) &&
           verifier.EndTable();
  }
};

struct T_FRIEND_UPDATE_RSBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_s_rs_head(const commonpack::S_RS_HEAD *s_rs_head) { fbb_.AddStruct(T_FRIEND_UPDATE_RS::VT_S_RS_HEAD, s_rs_head); }
  void add_peer_user_id(uint64_t peer_user_id) { fbb_.AddElement<uint64_t>(T_FRIEND_UPDATE_RS::VT_PEER_USER_ID, peer_user_id, 0); }
  void add_token(uint64_t token) { fbb_.AddElement<uint64_t>(T_FRIEND_UPDATE_RS::VT_TOKEN, token, 0); }
  T_FRIEND_UPDATE_RSBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_FRIEND_UPDATE_RSBuilder &operator=(const T_FRIEND_UPDATE_RSBuilder &);
  flatbuffers::Offset<T_FRIEND_UPDATE_RS> Finish() {
    auto o = flatbuffers::Offset<T_FRIEND_UPDATE_RS>(fbb_.EndTable(start_, 3));
    return o;
  }
};

inline flatbuffers::Offset<T_FRIEND_UPDATE_RS> CreateT_FRIEND_UPDATE_RS(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RS_HEAD *s_rs_head = 0,
    uint64_t peer_user_id = 0,
    uint64_t token = 0) {
  T_FRIEND_UPDATE_RSBuilder builder_(_fbb);
  builder_.add_token(token);
  builder_.add_peer_user_id(peer_user_id);
  builder_.add_s_rs_head(s_rs_head);
  return builder_.Finish();
}

inline const friendpack::T_FRIEND_UPDATE_RS *GetT_FRIEND_UPDATE_RS(const void *buf) {
  return flatbuffers::GetRoot<friendpack::T_FRIEND_UPDATE_RS>(buf);
}

inline bool VerifyT_FRIEND_UPDATE_RSBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<friendpack::T_FRIEND_UPDATE_RS>(nullptr);
}

inline void FinishT_FRIEND_UPDATE_RSBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<friendpack::T_FRIEND_UPDATE_RS> root) {
  fbb.Finish(root);
}

}  // namespace friendpack

#endif  // FLATBUFFERS_GENERATED_FBFRIENDUPDATERS_FRIENDPACK_H_
