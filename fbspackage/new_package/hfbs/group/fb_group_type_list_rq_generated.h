// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_FBGROUPTYPELISTRQ_GROUPPACK_H_
#define FLATBUFFERS_GENERATED_FBGROUPTYPELISTRQ_GROUPPACK_H_

#include "flatbuffers/flatbuffers.h"

#include "common_generated.h"

namespace grouppack {

struct T_GROUP_TYPE_LIST_RQ;

struct T_GROUP_TYPE_LIST_RQ FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
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

struct T_GROUP_TYPE_LIST_RQBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_s_rq_head(const commonpack::S_RQ_HEAD *s_rq_head) { fbb_.AddStruct(T_GROUP_TYPE_LIST_RQ::VT_S_RQ_HEAD, s_rq_head); }
  T_GROUP_TYPE_LIST_RQBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_GROUP_TYPE_LIST_RQBuilder &operator=(const T_GROUP_TYPE_LIST_RQBuilder &);
  flatbuffers::Offset<T_GROUP_TYPE_LIST_RQ> Finish() {
    auto o = flatbuffers::Offset<T_GROUP_TYPE_LIST_RQ>(fbb_.EndTable(start_, 1));
    return o;
  }
};

inline flatbuffers::Offset<T_GROUP_TYPE_LIST_RQ> CreateT_GROUP_TYPE_LIST_RQ(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RQ_HEAD *s_rq_head = 0) {
  T_GROUP_TYPE_LIST_RQBuilder builder_(_fbb);
  builder_.add_s_rq_head(s_rq_head);
  return builder_.Finish();
}

inline const grouppack::T_GROUP_TYPE_LIST_RQ *GetT_GROUP_TYPE_LIST_RQ(const void *buf) {
  return flatbuffers::GetRoot<grouppack::T_GROUP_TYPE_LIST_RQ>(buf);
}

inline bool VerifyT_GROUP_TYPE_LIST_RQBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<grouppack::T_GROUP_TYPE_LIST_RQ>(nullptr);
}

inline void FinishT_GROUP_TYPE_LIST_RQBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<grouppack::T_GROUP_TYPE_LIST_RQ> root) {
  fbb.Finish(root);
}

}  // namespace grouppack

#endif  // FLATBUFFERS_GENERATED_FBGROUPTYPELISTRQ_GROUPPACK_H_
