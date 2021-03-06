// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_FBGROUPBASEREQUEST_GROUPPACK_H_
#define FLATBUFFERS_GENERATED_FBGROUPBASEREQUEST_GROUPPACK_H_

#include "flatbuffers/flatbuffers.h"

namespace grouppack {

struct T_GROUP_BASE_REQUEST;

struct T_GROUP_BASE_REQUEST FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_GROUP_ID = 4,
    VT_NEXT_MESSAGE_ID = 6
  };
  uint64_t group_id() const { return GetField<uint64_t>(VT_GROUP_ID, 0); }
  uint64_t next_message_id() const { return GetField<uint64_t>(VT_NEXT_MESSAGE_ID, 0); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<uint64_t>(verifier, VT_GROUP_ID) &&
           VerifyField<uint64_t>(verifier, VT_NEXT_MESSAGE_ID) &&
           verifier.EndTable();
  }
};

struct T_GROUP_BASE_REQUESTBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_group_id(uint64_t group_id) { fbb_.AddElement<uint64_t>(T_GROUP_BASE_REQUEST::VT_GROUP_ID, group_id, 0); }
  void add_next_message_id(uint64_t next_message_id) { fbb_.AddElement<uint64_t>(T_GROUP_BASE_REQUEST::VT_NEXT_MESSAGE_ID, next_message_id, 0); }
  T_GROUP_BASE_REQUESTBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_GROUP_BASE_REQUESTBuilder &operator=(const T_GROUP_BASE_REQUESTBuilder &);
  flatbuffers::Offset<T_GROUP_BASE_REQUEST> Finish() {
    auto o = flatbuffers::Offset<T_GROUP_BASE_REQUEST>(fbb_.EndTable(start_, 2));
    return o;
  }
};

inline flatbuffers::Offset<T_GROUP_BASE_REQUEST> CreateT_GROUP_BASE_REQUEST(flatbuffers::FlatBufferBuilder &_fbb,
    uint64_t group_id = 0,
    uint64_t next_message_id = 0) {
  T_GROUP_BASE_REQUESTBuilder builder_(_fbb);
  builder_.add_next_message_id(next_message_id);
  builder_.add_group_id(group_id);
  return builder_.Finish();
}

inline const grouppack::T_GROUP_BASE_REQUEST *GetT_GROUP_BASE_REQUEST(const void *buf) {
  return flatbuffers::GetRoot<grouppack::T_GROUP_BASE_REQUEST>(buf);
}

inline bool VerifyT_GROUP_BASE_REQUESTBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<grouppack::T_GROUP_BASE_REQUEST>(nullptr);
}

inline void FinishT_GROUP_BASE_REQUESTBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<grouppack::T_GROUP_BASE_REQUEST> root) {
  fbb.Finish(root);
}

}  // namespace grouppack

#endif  // FLATBUFFERS_GENERATED_FBGROUPBASEREQUEST_GROUPPACK_H_
