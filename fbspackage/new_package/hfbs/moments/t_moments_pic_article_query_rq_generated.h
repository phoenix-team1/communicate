// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_TMOMENTSPICARTICLEQUERYRQ_MOMENTSPACK_H_
#define FLATBUFFERS_GENERATED_TMOMENTSPICARTICLEQUERYRQ_MOMENTSPACK_H_

#include "flatbuffers/flatbuffers.h"

#include "common_generated.h"

namespace momentspack {

struct T_MOMENTS_PIC_ARTICLE_QUERY_RQ;

struct T_MOMENTS_PIC_ARTICLE_QUERY_RQ FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_S_RQ_HEAD = 4,
    VT_USER_ID = 6,
    VT_PAGE_SIZE = 8
  };
  const commonpack::S_RQ_HEAD *s_rq_head() const { return GetStruct<const commonpack::S_RQ_HEAD *>(VT_S_RQ_HEAD); }
  uint64_t user_id() const { return GetField<uint64_t>(VT_USER_ID, 0); }
  int32_t page_size() const { return GetField<int32_t>(VT_PAGE_SIZE, 0); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<commonpack::S_RQ_HEAD>(verifier, VT_S_RQ_HEAD) &&
           VerifyField<uint64_t>(verifier, VT_USER_ID) &&
           VerifyField<int32_t>(verifier, VT_PAGE_SIZE) &&
           verifier.EndTable();
  }
};

struct T_MOMENTS_PIC_ARTICLE_QUERY_RQBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_s_rq_head(const commonpack::S_RQ_HEAD *s_rq_head) { fbb_.AddStruct(T_MOMENTS_PIC_ARTICLE_QUERY_RQ::VT_S_RQ_HEAD, s_rq_head); }
  void add_user_id(uint64_t user_id) { fbb_.AddElement<uint64_t>(T_MOMENTS_PIC_ARTICLE_QUERY_RQ::VT_USER_ID, user_id, 0); }
  void add_page_size(int32_t page_size) { fbb_.AddElement<int32_t>(T_MOMENTS_PIC_ARTICLE_QUERY_RQ::VT_PAGE_SIZE, page_size, 0); }
  T_MOMENTS_PIC_ARTICLE_QUERY_RQBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_MOMENTS_PIC_ARTICLE_QUERY_RQBuilder &operator=(const T_MOMENTS_PIC_ARTICLE_QUERY_RQBuilder &);
  flatbuffers::Offset<T_MOMENTS_PIC_ARTICLE_QUERY_RQ> Finish() {
    auto o = flatbuffers::Offset<T_MOMENTS_PIC_ARTICLE_QUERY_RQ>(fbb_.EndTable(start_, 3));
    return o;
  }
};

inline flatbuffers::Offset<T_MOMENTS_PIC_ARTICLE_QUERY_RQ> CreateT_MOMENTS_PIC_ARTICLE_QUERY_RQ(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RQ_HEAD *s_rq_head = 0,
    uint64_t user_id = 0,
    int32_t page_size = 0) {
  T_MOMENTS_PIC_ARTICLE_QUERY_RQBuilder builder_(_fbb);
  builder_.add_user_id(user_id);
  builder_.add_page_size(page_size);
  builder_.add_s_rq_head(s_rq_head);
  return builder_.Finish();
}

inline const momentspack::T_MOMENTS_PIC_ARTICLE_QUERY_RQ *GetT_MOMENTS_PIC_ARTICLE_QUERY_RQ(const void *buf) {
  return flatbuffers::GetRoot<momentspack::T_MOMENTS_PIC_ARTICLE_QUERY_RQ>(buf);
}

inline bool VerifyT_MOMENTS_PIC_ARTICLE_QUERY_RQBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<momentspack::T_MOMENTS_PIC_ARTICLE_QUERY_RQ>(nullptr);
}

inline void FinishT_MOMENTS_PIC_ARTICLE_QUERY_RQBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<momentspack::T_MOMENTS_PIC_ARTICLE_QUERY_RQ> root) {
  fbb.Finish(root);
}

}  // namespace momentspack

#endif  // FLATBUFFERS_GENERATED_TMOMENTSPICARTICLEQUERYRQ_MOMENTSPACK_H_
