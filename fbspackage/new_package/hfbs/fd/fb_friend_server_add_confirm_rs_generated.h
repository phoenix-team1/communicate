// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_FBFRIENDSERVERADDCONFIRMRS_FRIENDPACK_H_
#define FLATBUFFERS_GENERATED_FBFRIENDSERVERADDCONFIRMRS_FRIENDPACK_H_

#include "flatbuffers/flatbuffers.h"

#include "common_generated.h"

namespace friendpack {

struct T_FRIEND_SERVER_CONFIRM_RS;

struct T_FRIEND_SERVER_CONFIRM_RS FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_S_RS_HEAD = 4
  };
  const commonpack::S_RS_HEAD *s_rs_head() const { return GetStruct<const commonpack::S_RS_HEAD *>(VT_S_RS_HEAD); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<commonpack::S_RS_HEAD>(verifier, VT_S_RS_HEAD) &&
           verifier.EndTable();
  }
};

struct T_FRIEND_SERVER_CONFIRM_RSBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_s_rs_head(const commonpack::S_RS_HEAD *s_rs_head) { fbb_.AddStruct(T_FRIEND_SERVER_CONFIRM_RS::VT_S_RS_HEAD, s_rs_head); }
  T_FRIEND_SERVER_CONFIRM_RSBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_FRIEND_SERVER_CONFIRM_RSBuilder &operator=(const T_FRIEND_SERVER_CONFIRM_RSBuilder &);
  flatbuffers::Offset<T_FRIEND_SERVER_CONFIRM_RS> Finish() {
    auto o = flatbuffers::Offset<T_FRIEND_SERVER_CONFIRM_RS>(fbb_.EndTable(start_, 1));
    return o;
  }
};

inline flatbuffers::Offset<T_FRIEND_SERVER_CONFIRM_RS> CreateT_FRIEND_SERVER_CONFIRM_RS(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RS_HEAD *s_rs_head = 0) {
  T_FRIEND_SERVER_CONFIRM_RSBuilder builder_(_fbb);
  builder_.add_s_rs_head(s_rs_head);
  return builder_.Finish();
}

inline const friendpack::T_FRIEND_SERVER_CONFIRM_RS *GetT_FRIEND_SERVER_CONFIRM_RS(const void *buf) {
  return flatbuffers::GetRoot<friendpack::T_FRIEND_SERVER_CONFIRM_RS>(buf);
}

inline bool VerifyT_FRIEND_SERVER_CONFIRM_RSBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<friendpack::T_FRIEND_SERVER_CONFIRM_RS>(nullptr);
}

inline void FinishT_FRIEND_SERVER_CONFIRM_RSBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<friendpack::T_FRIEND_SERVER_CONFIRM_RS> root) {
  fbb.Finish(root);
}

}  // namespace friendpack

#endif  // FLATBUFFERS_GENERATED_FBFRIENDSERVERADDCONFIRMRS_FRIENDPACK_H_
