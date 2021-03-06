// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_FBECMSGINFO_ECPACK_H_
#define FLATBUFFERS_GENERATED_FBECMSGINFO_ECPACK_H_

#include "flatbuffers/flatbuffers.h"

#include "common_generated.h"

namespace ecpack {

struct T_ECMSG_INFO;

struct T_ECMSG_INFO FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_APP_ID = 4,
    VT_SESSION_ID = 6,
    VT_CHAT_TYPE = 8,
    VT_M_TYPE = 10,
    VT_S_TYPE = 12,
    VT_EXT_TYPE = 14,
    VT_FROM_ID = 16,
    VT_TO_ID = 18,
    VT_B_ID = 20,
    VT_C_ID = 22,
    VT_W_ID = 24,
    VT_MESSAGE_ID = 26,
    VT_MSG_TIME = 28,
    VT_MSG_CONTENT = 30,
    VT_SEND_USER_NAME = 32
  };
  int16_t app_id() const { return GetField<int16_t>(VT_APP_ID, 0); }
  int32_t session_id() const { return GetField<int32_t>(VT_SESSION_ID, 0); }
  int16_t chat_type() const { return GetField<int16_t>(VT_CHAT_TYPE, 0); }
  int32_t m_type() const { return GetField<int32_t>(VT_M_TYPE, 0); }
  int32_t s_type() const { return GetField<int32_t>(VT_S_TYPE, 0); }
  int32_t ext_type() const { return GetField<int32_t>(VT_EXT_TYPE, 0); }
  uint64_t from_id() const { return GetField<uint64_t>(VT_FROM_ID, 0); }
  uint64_t to_id() const { return GetField<uint64_t>(VT_TO_ID, 0); }
  uint64_t b_id() const { return GetField<uint64_t>(VT_B_ID, 0); }
  uint64_t c_id() const { return GetField<uint64_t>(VT_C_ID, 0); }
  uint64_t w_id() const { return GetField<uint64_t>(VT_W_ID, 0); }
  uint64_t message_id() const { return GetField<uint64_t>(VT_MESSAGE_ID, 0); }
  int64_t msg_time() const { return GetField<int64_t>(VT_MSG_TIME, 0); }
  const flatbuffers::String *msg_content() const { return GetPointer<const flatbuffers::String *>(VT_MSG_CONTENT); }
  const flatbuffers::String *send_user_name() const { return GetPointer<const flatbuffers::String *>(VT_SEND_USER_NAME); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<int16_t>(verifier, VT_APP_ID) &&
           VerifyField<int32_t>(verifier, VT_SESSION_ID) &&
           VerifyField<int16_t>(verifier, VT_CHAT_TYPE) &&
           VerifyField<int32_t>(verifier, VT_M_TYPE) &&
           VerifyField<int32_t>(verifier, VT_S_TYPE) &&
           VerifyField<int32_t>(verifier, VT_EXT_TYPE) &&
           VerifyField<uint64_t>(verifier, VT_FROM_ID) &&
           VerifyField<uint64_t>(verifier, VT_TO_ID) &&
           VerifyField<uint64_t>(verifier, VT_B_ID) &&
           VerifyField<uint64_t>(verifier, VT_C_ID) &&
           VerifyField<uint64_t>(verifier, VT_W_ID) &&
           VerifyField<uint64_t>(verifier, VT_MESSAGE_ID) &&
           VerifyField<int64_t>(verifier, VT_MSG_TIME) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_MSG_CONTENT) &&
           verifier.Verify(msg_content()) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_SEND_USER_NAME) &&
           verifier.Verify(send_user_name()) &&
           verifier.EndTable();
  }
};

struct T_ECMSG_INFOBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_app_id(int16_t app_id) { fbb_.AddElement<int16_t>(T_ECMSG_INFO::VT_APP_ID, app_id, 0); }
  void add_session_id(int32_t session_id) { fbb_.AddElement<int32_t>(T_ECMSG_INFO::VT_SESSION_ID, session_id, 0); }
  void add_chat_type(int16_t chat_type) { fbb_.AddElement<int16_t>(T_ECMSG_INFO::VT_CHAT_TYPE, chat_type, 0); }
  void add_m_type(int32_t m_type) { fbb_.AddElement<int32_t>(T_ECMSG_INFO::VT_M_TYPE, m_type, 0); }
  void add_s_type(int32_t s_type) { fbb_.AddElement<int32_t>(T_ECMSG_INFO::VT_S_TYPE, s_type, 0); }
  void add_ext_type(int32_t ext_type) { fbb_.AddElement<int32_t>(T_ECMSG_INFO::VT_EXT_TYPE, ext_type, 0); }
  void add_from_id(uint64_t from_id) { fbb_.AddElement<uint64_t>(T_ECMSG_INFO::VT_FROM_ID, from_id, 0); }
  void add_to_id(uint64_t to_id) { fbb_.AddElement<uint64_t>(T_ECMSG_INFO::VT_TO_ID, to_id, 0); }
  void add_b_id(uint64_t b_id) { fbb_.AddElement<uint64_t>(T_ECMSG_INFO::VT_B_ID, b_id, 0); }
  void add_c_id(uint64_t c_id) { fbb_.AddElement<uint64_t>(T_ECMSG_INFO::VT_C_ID, c_id, 0); }
  void add_w_id(uint64_t w_id) { fbb_.AddElement<uint64_t>(T_ECMSG_INFO::VT_W_ID, w_id, 0); }
  void add_message_id(uint64_t message_id) { fbb_.AddElement<uint64_t>(T_ECMSG_INFO::VT_MESSAGE_ID, message_id, 0); }
  void add_msg_time(int64_t msg_time) { fbb_.AddElement<int64_t>(T_ECMSG_INFO::VT_MSG_TIME, msg_time, 0); }
  void add_msg_content(flatbuffers::Offset<flatbuffers::String> msg_content) { fbb_.AddOffset(T_ECMSG_INFO::VT_MSG_CONTENT, msg_content); }
  void add_send_user_name(flatbuffers::Offset<flatbuffers::String> send_user_name) { fbb_.AddOffset(T_ECMSG_INFO::VT_SEND_USER_NAME, send_user_name); }
  T_ECMSG_INFOBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  T_ECMSG_INFOBuilder &operator=(const T_ECMSG_INFOBuilder &);
  flatbuffers::Offset<T_ECMSG_INFO> Finish() {
    auto o = flatbuffers::Offset<T_ECMSG_INFO>(fbb_.EndTable(start_, 15));
    return o;
  }
};

inline flatbuffers::Offset<T_ECMSG_INFO> CreateT_ECMSG_INFO(flatbuffers::FlatBufferBuilder &_fbb,
    int16_t app_id = 0,
    int32_t session_id = 0,
    int16_t chat_type = 0,
    int32_t m_type = 0,
    int32_t s_type = 0,
    int32_t ext_type = 0,
    uint64_t from_id = 0,
    uint64_t to_id = 0,
    uint64_t b_id = 0,
    uint64_t c_id = 0,
    uint64_t w_id = 0,
    uint64_t message_id = 0,
    int64_t msg_time = 0,
    flatbuffers::Offset<flatbuffers::String> msg_content = 0,
    flatbuffers::Offset<flatbuffers::String> send_user_name = 0) {
  T_ECMSG_INFOBuilder builder_(_fbb);
  builder_.add_msg_time(msg_time);
  builder_.add_message_id(message_id);
  builder_.add_w_id(w_id);
  builder_.add_c_id(c_id);
  builder_.add_b_id(b_id);
  builder_.add_to_id(to_id);
  builder_.add_from_id(from_id);
  builder_.add_send_user_name(send_user_name);
  builder_.add_msg_content(msg_content);
  builder_.add_ext_type(ext_type);
  builder_.add_s_type(s_type);
  builder_.add_m_type(m_type);
  builder_.add_session_id(session_id);
  builder_.add_chat_type(chat_type);
  builder_.add_app_id(app_id);
  return builder_.Finish();
}

inline flatbuffers::Offset<T_ECMSG_INFO> CreateT_ECMSG_INFODirect(flatbuffers::FlatBufferBuilder &_fbb,
    int16_t app_id = 0,
    int32_t session_id = 0,
    int16_t chat_type = 0,
    int32_t m_type = 0,
    int32_t s_type = 0,
    int32_t ext_type = 0,
    uint64_t from_id = 0,
    uint64_t to_id = 0,
    uint64_t b_id = 0,
    uint64_t c_id = 0,
    uint64_t w_id = 0,
    uint64_t message_id = 0,
    int64_t msg_time = 0,
    const char *msg_content = nullptr,
    const char *send_user_name = nullptr) {
  return CreateT_ECMSG_INFO(_fbb, app_id, session_id, chat_type, m_type, s_type, ext_type, from_id, to_id, b_id, c_id, w_id, message_id, msg_time, msg_content ? _fbb.CreateString(msg_content) : 0, send_user_name ? _fbb.CreateString(send_user_name) : 0);
}

inline const ecpack::T_ECMSG_INFO *GetT_ECMSG_INFO(const void *buf) {
  return flatbuffers::GetRoot<ecpack::T_ECMSG_INFO>(buf);
}

inline bool VerifyT_ECMSG_INFOBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<ecpack::T_ECMSG_INFO>(nullptr);
}

inline void FinishT_ECMSG_INFOBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<ecpack::T_ECMSG_INFO> root) {
  fbb.Finish(root);
}

}  // namespace ecpack

#endif  // FLATBUFFERS_GENERATED_FBECMSGINFO_ECPACK_H_
