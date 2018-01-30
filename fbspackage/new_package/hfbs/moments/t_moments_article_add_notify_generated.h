// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_TMOMENTSARTICLEADDNOTIFY_MOMENTSPACK_H_
#define FLATBUFFERS_GENERATED_TMOMENTSARTICLEADDNOTIFY_MOMENTSPACK_H_

#include "flatbuffers/flatbuffers.h"

namespace momentspack {

struct T_MOMENTS_ARTICLE_ADD_NOTIFY;

struct T_MOMENTS_ARTICLE_ADD_NOTIFY FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_MOMENTS_CHANGE_AT = 4
  };
  uint64_t moments_change_at() const { return GetField<uint64_t>(VT_MOMENTS_CHANGE_AT, 0); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<uint64_t>(verifier, VT_MOMENTS_CHANGE_AT) &&
           verifier.EndTable();
  }
};

struct T_MOMENTS_ARTICLE_ADD_NOTIFYBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_moments_change_at(uint64_t moments_change_at) { fbb_.AddElement<uint64_t>(T_MOMENTS_ARTICLE_ADD_NOTIFY::VT_MOMENTS_CHANGE_AT, moments_change_at, 0); }
  T_MOMENTS_ARTICLE_ADD_NOTIFYBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_MOMENTS_ARTICLE_ADD_NOTIFYBuilder &operator=(const T_MOMENTS_ARTICLE_ADD_NOTIFYBuilder &);
  flatbuffers::Offset<T_MOMENTS_ARTICLE_ADD_NOTIFY> Finish() {
    auto o = flatbuffers::Offset<T_MOMENTS_ARTICLE_ADD_NOTIFY>(fbb_.EndTable(start_, 1));
    return o;
  }
};

inline flatbuffers::Offset<T_MOMENTS_ARTICLE_ADD_NOTIFY> CreateT_MOMENTS_ARTICLE_ADD_NOTIFY(flatbuffers::FlatBufferBuilder &_fbb,
    uint64_t moments_change_at = 0) {
  T_MOMENTS_ARTICLE_ADD_NOTIFYBuilder builder_(_fbb);
  builder_.add_moments_change_at(moments_change_at);
  return builder_.Finish();
}

inline const momentspack::T_MOMENTS_ARTICLE_ADD_NOTIFY *GetT_MOMENTS_ARTICLE_ADD_NOTIFY(const void *buf) {
  return flatbuffers::GetRoot<momentspack::T_MOMENTS_ARTICLE_ADD_NOTIFY>(buf);
}

inline bool VerifyT_MOMENTS_ARTICLE_ADD_NOTIFYBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<momentspack::T_MOMENTS_ARTICLE_ADD_NOTIFY>(nullptr);
}

inline void FinishT_MOMENTS_ARTICLE_ADD_NOTIFYBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<momentspack::T_MOMENTS_ARTICLE_ADD_NOTIFY> root) {
  fbb.Finish(root);
}

}  // namespace momentspack

#endif  // FLATBUFFERS_GENERATED_TMOMENTSARTICLEADDNOTIFY_MOMENTSPACK_H_