// automatically generated by the FlatBuffers compiler, do not modify

package friendpack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_FRIEND_CLIENT_CONFIRM_RQ extends Table {
  public static T_FRIEND_CLIENT_CONFIRM_RQ getRootAsT_FRIEND_CLIENT_CONFIRM_RQ(ByteBuffer _bb) { return getRootAsT_FRIEND_CLIENT_CONFIRM_RQ(_bb, new T_FRIEND_CLIENT_CONFIRM_RQ()); }
  public static T_FRIEND_CLIENT_CONFIRM_RQ getRootAsT_FRIEND_CLIENT_CONFIRM_RQ(ByteBuffer _bb, T_FRIEND_CLIENT_CONFIRM_RQ obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_FRIEND_CLIENT_CONFIRM_RQ __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public commonpack.S_RQ_HEAD sRqHead() { return sRqHead(new commonpack.S_RQ_HEAD()); }
  public commonpack.S_RQ_HEAD sRqHead(commonpack.S_RQ_HEAD obj) { int o = __offset(4); return o != 0 ? obj.__assign(o + bb_pos, bb) : null; }
  public String ownNickname() { int o = __offset(6); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer ownNicknameAsByteBuffer() { return __vector_as_bytebuffer(6, 1); }
  public long peerUserId() { int o = __offset(8); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }
  public byte sourceType() { int o = __offset(10); return o != 0 ? bb.get(o + bb_pos) : 0; }
  public String peerRemark() { int o = __offset(12); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer peerRemarkAsByteBuffer() { return __vector_as_bytebuffer(12, 1); }
  public long token() { int o = __offset(14); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }
  public int result() { int o = __offset(16); return o != 0 ? bb.getInt(o + bb_pos) : 0; }

  public static void startT_FRIEND_CLIENT_CONFIRM_RQ(FlatBufferBuilder builder) { builder.startObject(7); }
  public static void addSRqHead(FlatBufferBuilder builder, int sRqHeadOffset) { builder.addStruct(0, sRqHeadOffset, 0); }
  public static void addOwnNickname(FlatBufferBuilder builder, int ownNicknameOffset) { builder.addOffset(1, ownNicknameOffset, 0); }
  public static void addPeerUserId(FlatBufferBuilder builder, long peerUserId) { builder.addLong(2, peerUserId, 0L); }
  public static void addSourceType(FlatBufferBuilder builder, byte sourceType) { builder.addByte(3, sourceType, 0); }
  public static void addPeerRemark(FlatBufferBuilder builder, int peerRemarkOffset) { builder.addOffset(4, peerRemarkOffset, 0); }
  public static void addToken(FlatBufferBuilder builder, long token) { builder.addLong(5, token, 0L); }
  public static void addResult(FlatBufferBuilder builder, int result) { builder.addInt(6, result, 0); }
  public static int endT_FRIEND_CLIENT_CONFIRM_RQ(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_FRIEND_CLIENT_CONFIRM_RQBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}
