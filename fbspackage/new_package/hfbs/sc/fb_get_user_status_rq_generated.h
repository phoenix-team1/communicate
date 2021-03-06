// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_FBGETUSERSTATUSRQ_SCPACK_H_
#define FLATBUFFERS_GENERATED_FBGETUSERSTATUSRQ_SCPACK_H_

#include "flatbuffers/flatbuffers.h"

#include "common_generated.h"

namespace scpack {

struct T_GET_USER_STATUS_RQ;

struct T_GET_USER_STATUS_RQ FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_S_RQ_HEAD = 4
  };
  const commonpack::S_RQ_HEAD *s_rq_head() const { return GetStruct<const commonpack::S_RQ_HEAD *>(VT_S_RQ_HEAD); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<commonpack::S_RQ_HEAD>(verifier, VT_S_RQ_HEAD) &&
           verifier.EndTable();
  }
};

struct T_GET_USER_STATUS_RQBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_s_rq_head(const commonpack::S_RQ_HEAD *s_rq_head) { fbb_.AddStruct(T_GET_USER_STATUS_RQ::VT_S_RQ_HEAD, s_rq_head); }
  T_GET_USER_STATUS_RQBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_GET_USER_STATUS_RQBuilder &operator=(const T_GET_USER_STATUS_RQBuilder &);
  flatbuffers::Offset<T_GET_USER_STATUS_RQ> Finish() {
    auto o = flatbuffers::Offset<T_GET_USER_STATUS_RQ>(fbb_.EndTable(start_, 1));
    return o;
  }
};

inline flatbuffers::Offset<T_GET_USER_STATUS_RQ> CreateT_GET_USER_STATUS_RQ(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RQ_HEAD *s_rq_head = 0) {
  T_GET_USER_STATUS_RQBuilder builder_(_fbb);
  builder_.add_s_rq_head(s_rq_head);
  return builder_.Finish();
}

inline const scpack::T_GET_USER_STATUS_RQ *GetT_GET_USER_STATUS_RQ(const void *buf) {
  return flatbuffers::GetRoot<scpack::T_GET_USER_STATUS_RQ>(buf);
}

inline bool VerifyT_GET_USER_STATUS_RQBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<scpack::T_GET_USER_STATUS_RQ>(nullptr);
}

inline void FinishT_GET_USER_STATUS_RQBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<scpack::T_GET_USER_STATUS_RQ> root) {
  fbb.Finish(root);
}

}  // namespace scpack

#endif  // FLATBUFFERS_GENERATED_FBGETUSERSTATUSRQ_SCPACK_H_
