// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_TMOMENTSCOMMENTDELETENOTIFY_MOMENTSPACK_H_
#define FLATBUFFERS_GENERATED_TMOMENTSCOMMENTDELETENOTIFY_MOMENTSPACK_H_

#include "flatbuffers/flatbuffers.h"

namespace momentspack {

struct T_MOMENTS_COMMENT_DELETE_NOTIFY;

struct T_MOMENTS_COMMENT_DELETE_NOTIFY FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_ARTICLE_ID = 4,
    VT_ARTICLE_USER_ID = 6,
    VT_COMMENT_ID = 8,
    VT_USER_ID = 10
  };
  uint64_t article_id() const { return GetField<uint64_t>(VT_ARTICLE_ID, 0); }
  uint64_t article_user_id() const { return GetField<uint64_t>(VT_ARTICLE_USER_ID, 0); }
  uint64_t comment_id() const { return GetField<uint64_t>(VT_COMMENT_ID, 0); }
  uint64_t user_id() const { return GetField<uint64_t>(VT_USER_ID, 0); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<uint64_t>(verifier, VT_ARTICLE_ID) &&
           VerifyField<uint64_t>(verifier, VT_ARTICLE_USER_ID) &&
           VerifyField<uint64_t>(verifier, VT_COMMENT_ID) &&
           VerifyField<uint64_t>(verifier, VT_USER_ID) &&
           verifier.EndTable();
  }
};

struct T_MOMENTS_COMMENT_DELETE_NOTIFYBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_article_id(uint64_t article_id) { fbb_.AddElement<uint64_t>(T_MOMENTS_COMMENT_DELETE_NOTIFY::VT_ARTICLE_ID, article_id, 0); }
  void add_article_user_id(uint64_t article_user_id) { fbb_.AddElement<uint64_t>(T_MOMENTS_COMMENT_DELETE_NOTIFY::VT_ARTICLE_USER_ID, article_user_id, 0); }
  void add_comment_id(uint64_t comment_id) { fbb_.AddElement<uint64_t>(T_MOMENTS_COMMENT_DELETE_NOTIFY::VT_COMMENT_ID, comment_id, 0); }
  void add_user_id(uint64_t user_id) { fbb_.AddElement<uint64_t>(T_MOMENTS_COMMENT_DELETE_NOTIFY::VT_USER_ID, user_id, 0); }
  T_MOMENTS_COMMENT_DELETE_NOTIFYBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_MOMENTS_COMMENT_DELETE_NOTIFYBuilder &operator=(const T_MOMENTS_COMMENT_DELETE_NOTIFYBuilder &);
  flatbuffers::Offset<T_MOMENTS_COMMENT_DELETE_NOTIFY> Finish() {
    auto o = flatbuffers::Offset<T_MOMENTS_COMMENT_DELETE_NOTIFY>(fbb_.EndTable(start_, 4));
    return o;
  }
};

inline flatbuffers::Offset<T_MOMENTS_COMMENT_DELETE_NOTIFY> CreateT_MOMENTS_COMMENT_DELETE_NOTIFY(flatbuffers::FlatBufferBuilder &_fbb,
    uint64_t article_id = 0,
    uint64_t article_user_id = 0,
    uint64_t comment_id = 0,
    uint64_t user_id = 0) {
  T_MOMENTS_COMMENT_DELETE_NOTIFYBuilder builder_(_fbb);
  builder_.add_user_id(user_id);
  builder_.add_comment_id(comment_id);
  builder_.add_article_user_id(article_user_id);
  builder_.add_article_id(article_id);
  return builder_.Finish();
}

inline const momentspack::T_MOMENTS_COMMENT_DELETE_NOTIFY *GetT_MOMENTS_COMMENT_DELETE_NOTIFY(const void *buf) {
  return flatbuffers::GetRoot<momentspack::T_MOMENTS_COMMENT_DELETE_NOTIFY>(buf);
}

inline bool VerifyT_MOMENTS_COMMENT_DELETE_NOTIFYBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<momentspack::T_MOMENTS_COMMENT_DELETE_NOTIFY>(nullptr);
}

inline void FinishT_MOMENTS_COMMENT_DELETE_NOTIFYBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<momentspack::T_MOMENTS_COMMENT_DELETE_NOTIFY> root) {
  fbb.Finish(root);
}

}  // namespace momentspack

#endif  // FLATBUFFERS_GENERATED_TMOMENTSCOMMENTDELETENOTIFY_MOMENTSPACK_H_
