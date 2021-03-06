// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_FBREGRQ_SYSPACK_H_
#define FLATBUFFERS_GENERATED_FBREGRQ_SYSPACK_H_

#include "flatbuffers/flatbuffers.h"

#include "common_generated.h"

namespace syspack {

struct T_REG_RQ;

struct T_REG_RQ FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_S_RQ_HEAD = 4,
    VT_ACCOUNT_INFO = 6
  };
  const commonpack::S_RQ_HEAD *s_rq_head() const { return GetStruct<const commonpack::S_RQ_HEAD *>(VT_S_RQ_HEAD); }
  const commonpack::ACCOUNT_INFO *account_info() const { return GetPointer<const commonpack::ACCOUNT_INFO *>(VT_ACCOUNT_INFO); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<commonpack::S_RQ_HEAD>(verifier, VT_S_RQ_HEAD) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_ACCOUNT_INFO) &&
           verifier.VerifyTable(account_info()) &&
           verifier.EndTable();
  }
};

struct T_REG_RQBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_s_rq_head(const commonpack::S_RQ_HEAD *s_rq_head) { fbb_.AddStruct(T_REG_RQ::VT_S_RQ_HEAD, s_rq_head); }
  void add_account_info(flatbuffers::Offset<commonpack::ACCOUNT_INFO> account_info) { fbb_.AddOffset(T_REG_RQ::VT_ACCOUNT_INFO, account_info); }
  T_REG_RQBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_REG_RQBuilder &operator=(const T_REG_RQBuilder &);
  flatbuffers::Offset<T_REG_RQ> Finish() {
    auto o = flatbuffers::Offset<T_REG_RQ>(fbb_.EndTable(start_, 2));
    return o;
  }
};

inline flatbuffers::Offset<T_REG_RQ> CreateT_REG_RQ(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RQ_HEAD *s_rq_head = 0,
    flatbuffers::Offset<commonpack::ACCOUNT_INFO> account_info = 0) {
  T_REG_RQBuilder builder_(_fbb);
  builder_.add_account_info(account_info);
  builder_.add_s_rq_head(s_rq_head);
  return builder_.Finish();
}

inline const syspack::T_REG_RQ *GetT_REG_RQ(const void *buf) {
  return flatbuffers::GetRoot<syspack::T_REG_RQ>(buf);
}

inline bool VerifyT_REG_RQBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<syspack::T_REG_RQ>(nullptr);
}

inline void FinishT_REG_RQBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<syspack::T_REG_RQ> root) {
  fbb.Finish(root);
}

}  // namespace syspack

#endif  // FLATBUFFERS_GENERATED_FBREGRQ_SYSPACK_H_
