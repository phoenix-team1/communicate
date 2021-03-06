// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_FBECISUSERBUSYRS_ECPACK_H_
#define FLATBUFFERS_GENERATED_FBECISUSERBUSYRS_ECPACK_H_

#include "flatbuffers/flatbuffers.h"

#include "common_generated.h"

namespace ecpack {

struct T_EC_ISUSERBUSY_RS;

struct T_EC_ISUSERBUSY_RS FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_S_RS_HEAD = 4,
    VT_B_ID = 6,
    VT_C_ID = 8,
    VT_STATUS = 10
  };
  const commonpack::S_RS_HEAD *s_rs_head() const { return GetStruct<const commonpack::S_RS_HEAD *>(VT_S_RS_HEAD); }
  uint64_t b_id() const { return GetField<uint64_t>(VT_B_ID, 0); }
  uint64_t c_id() const { return GetField<uint64_t>(VT_C_ID, 0); }
  int32_t status() const { return GetField<int32_t>(VT_STATUS, 0); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<commonpack::S_RS_HEAD>(verifier, VT_S_RS_HEAD) &&
           VerifyField<uint64_t>(verifier, VT_B_ID) &&
           VerifyField<uint64_t>(verifier, VT_C_ID) &&
           VerifyField<int32_t>(verifier, VT_STATUS) &&
           verifier.EndTable();
  }
};

struct T_EC_ISUSERBUSY_RSBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_s_rs_head(const commonpack::S_RS_HEAD *s_rs_head) { fbb_.AddStruct(T_EC_ISUSERBUSY_RS::VT_S_RS_HEAD, s_rs_head); }
  void add_b_id(uint64_t b_id) { fbb_.AddElement<uint64_t>(T_EC_ISUSERBUSY_RS::VT_B_ID, b_id, 0); }
  void add_c_id(uint64_t c_id) { fbb_.AddElement<uint64_t>(T_EC_ISUSERBUSY_RS::VT_C_ID, c_id, 0); }
  void add_status(int32_t status) { fbb_.AddElement<int32_t>(T_EC_ISUSERBUSY_RS::VT_STATUS, status, 0); }
  T_EC_ISUSERBUSY_RSBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_EC_ISUSERBUSY_RSBuilder &operator=(const T_EC_ISUSERBUSY_RSBuilder &);
  flatbuffers::Offset<T_EC_ISUSERBUSY_RS> Finish() {
    auto o = flatbuffers::Offset<T_EC_ISUSERBUSY_RS>(fbb_.EndTable(start_, 4));
    return o;
  }
};

inline flatbuffers::Offset<T_EC_ISUSERBUSY_RS> CreateT_EC_ISUSERBUSY_RS(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RS_HEAD *s_rs_head = 0,
    uint64_t b_id = 0,
    uint64_t c_id = 0,
    int32_t status = 0) {
  T_EC_ISUSERBUSY_RSBuilder builder_(_fbb);
  builder_.add_c_id(c_id);
  builder_.add_b_id(b_id);
  builder_.add_status(status);
  builder_.add_s_rs_head(s_rs_head);
  return builder_.Finish();
}

inline const ecpack::T_EC_ISUSERBUSY_RS *GetT_EC_ISUSERBUSY_RS(const void *buf) {
  return flatbuffers::GetRoot<ecpack::T_EC_ISUSERBUSY_RS>(buf);
}

inline bool VerifyT_EC_ISUSERBUSY_RSBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<ecpack::T_EC_ISUSERBUSY_RS>(nullptr);
}

inline void FinishT_EC_ISUSERBUSY_RSBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<ecpack::T_EC_ISUSERBUSY_RS> root) {
  fbb.Finish(root);
}

}  // namespace ecpack

#endif  // FLATBUFFERS_GENERATED_FBECISUSERBUSYRS_ECPACK_H_
