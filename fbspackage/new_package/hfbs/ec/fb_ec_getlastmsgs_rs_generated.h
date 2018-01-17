// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_FBECGETLASTMSGSRS_ECPACK_H_
#define FLATBUFFERS_GENERATED_FBECGETLASTMSGSRS_ECPACK_H_

#include "flatbuffers/flatbuffers.h"

#include "common_generated.h"
#include "fb_ec_msginfo_generated.h"

namespace ecpack {

struct T_EC_GETLASTMSGS_RS;

struct T_EC_GETLASTMSGS_RS FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_S_RS_HEAD = 4,
    VT_B_ID = 6,
    VT_OFFSET = 8,
    VT_MAX_CNT = 10,
    VT_MSG_LIST = 12
  };
  const commonpack::S_RS_HEAD *s_rs_head() const { return GetStruct<const commonpack::S_RS_HEAD *>(VT_S_RS_HEAD); }
  uint64_t b_id() const { return GetField<uint64_t>(VT_B_ID, 0); }
  int32_t offset() const { return GetField<int32_t>(VT_OFFSET, 0); }
  int32_t max_cnt() const { return GetField<int32_t>(VT_MAX_CNT, 0); }
  const flatbuffers::Vector<flatbuffers::Offset<ecpack::T_ECMSG_INFO>> *msg_list() const { return GetPointer<const flatbuffers::Vector<flatbuffers::Offset<ecpack::T_ECMSG_INFO>> *>(VT_MSG_LIST); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<commonpack::S_RS_HEAD>(verifier, VT_S_RS_HEAD) &&
           VerifyField<uint64_t>(verifier, VT_B_ID) &&
           VerifyField<int32_t>(verifier, VT_OFFSET) &&
           VerifyField<int32_t>(verifier, VT_MAX_CNT) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_MSG_LIST) &&
           verifier.Verify(msg_list()) &&
           verifier.VerifyVectorOfTables(msg_list()) &&
           verifier.EndTable();
  }
};

struct T_EC_GETLASTMSGS_RSBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_s_rs_head(const commonpack::S_RS_HEAD *s_rs_head) { fbb_.AddStruct(T_EC_GETLASTMSGS_RS::VT_S_RS_HEAD, s_rs_head); }
  void add_b_id(uint64_t b_id) { fbb_.AddElement<uint64_t>(T_EC_GETLASTMSGS_RS::VT_B_ID, b_id, 0); }
  void add_offset(int32_t offset) { fbb_.AddElement<int32_t>(T_EC_GETLASTMSGS_RS::VT_OFFSET, offset, 0); }
  void add_max_cnt(int32_t max_cnt) { fbb_.AddElement<int32_t>(T_EC_GETLASTMSGS_RS::VT_MAX_CNT, max_cnt, 0); }
  void add_msg_list(flatbuffers::Offset<flatbuffers::Vector<flatbuffers::Offset<ecpack::T_ECMSG_INFO>>> msg_list) { fbb_.AddOffset(T_EC_GETLASTMSGS_RS::VT_MSG_LIST, msg_list); }
  T_EC_GETLASTMSGS_RSBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_EC_GETLASTMSGS_RSBuilder &operator=(const T_EC_GETLASTMSGS_RSBuilder &);
  flatbuffers::Offset<T_EC_GETLASTMSGS_RS> Finish() {
    auto o = flatbuffers::Offset<T_EC_GETLASTMSGS_RS>(fbb_.EndTable(start_, 5));
    return o;
  }
};

inline flatbuffers::Offset<T_EC_GETLASTMSGS_RS> CreateT_EC_GETLASTMSGS_RS(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RS_HEAD *s_rs_head = 0,
    uint64_t b_id = 0,
    int32_t offset = 0,
    int32_t max_cnt = 0,
    flatbuffers::Offset<flatbuffers::Vector<flatbuffers::Offset<ecpack::T_ECMSG_INFO>>> msg_list = 0) {
  T_EC_GETLASTMSGS_RSBuilder builder_(_fbb);
  builder_.add_b_id(b_id);
  builder_.add_msg_list(msg_list);
  builder_.add_max_cnt(max_cnt);
  builder_.add_offset(offset);
  builder_.add_s_rs_head(s_rs_head);
  return builder_.Finish();
}

inline flatbuffers::Offset<T_EC_GETLASTMSGS_RS> CreateT_EC_GETLASTMSGS_RSDirect(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RS_HEAD *s_rs_head = 0,
    uint64_t b_id = 0,
    int32_t offset = 0,
    int32_t max_cnt = 0,
    const std::vector<flatbuffers::Offset<ecpack::T_ECMSG_INFO>> *msg_list = nullptr) {
  return CreateT_EC_GETLASTMSGS_RS(_fbb, s_rs_head, b_id, offset, max_cnt, msg_list ? _fbb.CreateVector<flatbuffers::Offset<ecpack::T_ECMSG_INFO>>(*msg_list) : 0);
}

inline const ecpack::T_EC_GETLASTMSGS_RS *GetT_EC_GETLASTMSGS_RS(const void *buf) {
  return flatbuffers::GetRoot<ecpack::T_EC_GETLASTMSGS_RS>(buf);
}

inline bool VerifyT_EC_GETLASTMSGS_RSBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<ecpack::T_EC_GETLASTMSGS_RS>(nullptr);
}

inline void FinishT_EC_GETLASTMSGS_RSBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<ecpack::T_EC_GETLASTMSGS_RS> root) {
  fbb.Finish(root);
}

}  // namespace ecpack

#endif  // FLATBUFFERS_GENERATED_FBECGETLASTMSGSRS_ECPACK_H_
