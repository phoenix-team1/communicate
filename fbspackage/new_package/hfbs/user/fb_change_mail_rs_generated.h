// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_FBCHANGEMAILRS_USERPACK_H_
#define FLATBUFFERS_GENERATED_FBCHANGEMAILRS_USERPACK_H_

#include "flatbuffers/flatbuffers.h"

#include "common_generated.h"

namespace userpack {

struct T_CHANGE_MAIL_RS;

struct T_CHANGE_MAIL_RS FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_S_RS_HEAD = 4,
    VT_OLD_MAIL = 6,
    VT_NEW_MAIL = 8
  };
  const commonpack::S_RS_HEAD *s_rs_head() const { return GetStruct<const commonpack::S_RS_HEAD *>(VT_S_RS_HEAD); }
  const flatbuffers::String *old_mail() const { return GetPointer<const flatbuffers::String *>(VT_OLD_MAIL); }
  const flatbuffers::String *new_mail() const { return GetPointer<const flatbuffers::String *>(VT_NEW_MAIL); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<commonpack::S_RS_HEAD>(verifier, VT_S_RS_HEAD) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_OLD_MAIL) &&
           verifier.Verify(old_mail()) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_NEW_MAIL) &&
           verifier.Verify(new_mail()) &&
           verifier.EndTable();
  }
};

struct T_CHANGE_MAIL_RSBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_s_rs_head(const commonpack::S_RS_HEAD *s_rs_head) { fbb_.AddStruct(T_CHANGE_MAIL_RS::VT_S_RS_HEAD, s_rs_head); }
  void add_old_mail(flatbuffers::Offset<flatbuffers::String> old_mail) { fbb_.AddOffset(T_CHANGE_MAIL_RS::VT_OLD_MAIL, old_mail); }
  void add_new_mail(flatbuffers::Offset<flatbuffers::String> new_mail) { fbb_.AddOffset(T_CHANGE_MAIL_RS::VT_NEW_MAIL, new_mail); }
  T_CHANGE_MAIL_RSBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_CHANGE_MAIL_RSBuilder &operator=(const T_CHANGE_MAIL_RSBuilder &);
  flatbuffers::Offset<T_CHANGE_MAIL_RS> Finish() {
    auto o = flatbuffers::Offset<T_CHANGE_MAIL_RS>(fbb_.EndTable(start_, 3));
    return o;
  }
};

inline flatbuffers::Offset<T_CHANGE_MAIL_RS> CreateT_CHANGE_MAIL_RS(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RS_HEAD *s_rs_head = 0,
    flatbuffers::Offset<flatbuffers::String> old_mail = 0,
    flatbuffers::Offset<flatbuffers::String> new_mail = 0) {
  T_CHANGE_MAIL_RSBuilder builder_(_fbb);
  builder_.add_new_mail(new_mail);
  builder_.add_old_mail(old_mail);
  builder_.add_s_rs_head(s_rs_head);
  return builder_.Finish();
}

inline flatbuffers::Offset<T_CHANGE_MAIL_RS> CreateT_CHANGE_MAIL_RSDirect(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RS_HEAD *s_rs_head = 0,
    const char *old_mail = nullptr,
    const char *new_mail = nullptr) {
  return CreateT_CHANGE_MAIL_RS(_fbb, s_rs_head, old_mail ? _fbb.CreateString(old_mail) : 0, new_mail ? _fbb.CreateString(new_mail) : 0);
}

inline const userpack::T_CHANGE_MAIL_RS *GetT_CHANGE_MAIL_RS(const void *buf) {
  return flatbuffers::GetRoot<userpack::T_CHANGE_MAIL_RS>(buf);
}

inline bool VerifyT_CHANGE_MAIL_RSBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<userpack::T_CHANGE_MAIL_RS>(nullptr);
}

inline void FinishT_CHANGE_MAIL_RSBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<userpack::T_CHANGE_MAIL_RS> root) {
  fbb.Finish(root);
}

}  // namespace userpack

#endif  // FLATBUFFERS_GENERATED_FBCHANGEMAILRS_USERPACK_H_
