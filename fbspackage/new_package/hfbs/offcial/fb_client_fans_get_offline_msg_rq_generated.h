// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_FBCLIENTFANSGETOFFLINEMSGRQ_OFFCIALPACK_H_
#define FLATBUFFERS_GENERATED_FBCLIENTFANSGETOFFLINEMSGRQ_OFFCIALPACK_H_

#include "flatbuffers/flatbuffers.h"

#include "common_generated.h"

namespace offcialpack {

struct T_OFFCIAL_BASE_REQUEST;

struct T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQ;

struct T_OFFCIAL_BASE_REQUEST FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_OFFCIAL_ID = 4,
    VT_NEXT_MESSAGE_ID = 6
  };
  uint64_t offcial_id() const { return GetField<uint64_t>(VT_OFFCIAL_ID, 0); }
  uint64_t next_message_id() const { return GetField<uint64_t>(VT_NEXT_MESSAGE_ID, 0); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<uint64_t>(verifier, VT_OFFCIAL_ID) &&
           VerifyField<uint64_t>(verifier, VT_NEXT_MESSAGE_ID) &&
           verifier.EndTable();
  }
};

struct T_OFFCIAL_BASE_REQUESTBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_offcial_id(uint64_t offcial_id) { fbb_.AddElement<uint64_t>(T_OFFCIAL_BASE_REQUEST::VT_OFFCIAL_ID, offcial_id, 0); }
  void add_next_message_id(uint64_t next_message_id) { fbb_.AddElement<uint64_t>(T_OFFCIAL_BASE_REQUEST::VT_NEXT_MESSAGE_ID, next_message_id, 0); }
  T_OFFCIAL_BASE_REQUESTBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_OFFCIAL_BASE_REQUESTBuilder &operator=(const T_OFFCIAL_BASE_REQUESTBuilder &);
  flatbuffers::Offset<T_OFFCIAL_BASE_REQUEST> Finish() {
    auto o = flatbuffers::Offset<T_OFFCIAL_BASE_REQUEST>(fbb_.EndTable(start_, 2));
    return o;
  }
};

inline flatbuffers::Offset<T_OFFCIAL_BASE_REQUEST> CreateT_OFFCIAL_BASE_REQUEST(flatbuffers::FlatBufferBuilder &_fbb,
    uint64_t offcial_id = 0,
    uint64_t next_message_id = 0) {
  T_OFFCIAL_BASE_REQUESTBuilder builder_(_fbb);
  builder_.add_next_message_id(next_message_id);
  builder_.add_offcial_id(offcial_id);
  return builder_.Finish();
}

struct T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQ FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_S_RQ_HEAD = 4,
    VT_LIST_OFFCIAL_OFFLINE_MSG_REQUEST = 6
  };
  const commonpack::S_RQ_HEAD *s_rq_head() const { return GetStruct<const commonpack::S_RQ_HEAD *>(VT_S_RQ_HEAD); }
  const flatbuffers::Vector<flatbuffers::Offset<T_OFFCIAL_BASE_REQUEST>> *list_offcial_offline_msg_request() const { return GetPointer<const flatbuffers::Vector<flatbuffers::Offset<T_OFFCIAL_BASE_REQUEST>> *>(VT_LIST_OFFCIAL_OFFLINE_MSG_REQUEST); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<commonpack::S_RQ_HEAD>(verifier, VT_S_RQ_HEAD) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_LIST_OFFCIAL_OFFLINE_MSG_REQUEST) &&
           verifier.Verify(list_offcial_offline_msg_request()) &&
           verifier.VerifyVectorOfTables(list_offcial_offline_msg_request()) &&
           verifier.EndTable();
  }
};

struct T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_s_rq_head(const commonpack::S_RQ_HEAD *s_rq_head) { fbb_.AddStruct(T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQ::VT_S_RQ_HEAD, s_rq_head); }
  void add_list_offcial_offline_msg_request(flatbuffers::Offset<flatbuffers::Vector<flatbuffers::Offset<T_OFFCIAL_BASE_REQUEST>>> list_offcial_offline_msg_request) { fbb_.AddOffset(T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQ::VT_LIST_OFFCIAL_OFFLINE_MSG_REQUEST, list_offcial_offline_msg_request); }
  T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQBuilder &operator=(const T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQBuilder &);
  flatbuffers::Offset<T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQ> Finish() {
    auto o = flatbuffers::Offset<T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQ>(fbb_.EndTable(start_, 2));
    return o;
  }
};

inline flatbuffers::Offset<T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQ> CreateT_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQ(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RQ_HEAD *s_rq_head = 0,
    flatbuffers::Offset<flatbuffers::Vector<flatbuffers::Offset<T_OFFCIAL_BASE_REQUEST>>> list_offcial_offline_msg_request = 0) {
  T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQBuilder builder_(_fbb);
  builder_.add_list_offcial_offline_msg_request(list_offcial_offline_msg_request);
  builder_.add_s_rq_head(s_rq_head);
  return builder_.Finish();
}

inline flatbuffers::Offset<T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQ> CreateT_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQDirect(flatbuffers::FlatBufferBuilder &_fbb,
    const commonpack::S_RQ_HEAD *s_rq_head = 0,
    const std::vector<flatbuffers::Offset<T_OFFCIAL_BASE_REQUEST>> *list_offcial_offline_msg_request = nullptr) {
  return CreateT_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQ(_fbb, s_rq_head, list_offcial_offline_msg_request ? _fbb.CreateVector<flatbuffers::Offset<T_OFFCIAL_BASE_REQUEST>>(*list_offcial_offline_msg_request) : 0);
}

inline const offcialpack::T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQ *GetT_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQ(const void *buf) {
  return flatbuffers::GetRoot<offcialpack::T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQ>(buf);
}

inline bool VerifyT_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<offcialpack::T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQ>(nullptr);
}

inline void FinishT_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<offcialpack::T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RQ> root) {
  fbb.Finish(root);
}

}  // namespace offcialpack

#endif  // FLATBUFFERS_GENERATED_FBCLIENTFANSGETOFFLINEMSGRQ_OFFCIALPACK_H_
